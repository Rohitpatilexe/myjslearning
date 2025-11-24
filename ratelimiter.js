const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());

const MAX_WINDO_SIZE_IN_MS=10*10000;
const MAX_REQUESTS=5;

// In-memory store: ip -> { count, windowStart }
const rateLimitStore=new Map();

function rateLimitier(req,res,next){
    const ip=req.ip;
    const now=Date.now();

const record=rateLimitStore.get(ip);

if(!record){
    rateLimitStore.set(ip,{
        count:1,
        windowStart:now
    });
    return next();
}
const timeSinceWindowStart=now - record.windowStart;

if(timeSinceWindowStart <MAX_WINDO_SIZE_IN_MS){
    if(record.count>=MAX_REQUESTS){
        const retry_after=Math.ceil((MAX_WINDO_SIZE_IN_MS-timeSinceWindowStart)/1000);
        res.set("Retry-after",retry_after.toString());
        return res.status(429).json({
            message:"Too many requests , please try again later"
        });
    }
    record.count++;
    rateLimitStore.set(ip,record);
    return next();
    }else{
        rateLimitStore.set(ip,{
            count:1,
            windowStart:now
        })
        return next();
    }
    
}
app.use(rateLimitier);

app.get('/',(req,res)=>{
    res.send("Hello Saku mere bacheee");
})
app.get("/test", (req, res) => {
  res.send("Test route ok");
}); 
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})