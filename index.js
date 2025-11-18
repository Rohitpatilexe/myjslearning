//Nodejs and its runtime
//ECMAScript is a scripting language specification on which JavaScript is based
//JavaScript has additional features which are required for building a website
//JS browser engines are V8-used by google chrome-C 2) SpiderMonkey - used by firefox-C+RUST
//some people took out v8 engine added some backend things (file syatem reads)on top to create a new runtime to compete with backend languages like Java
//sometimes Node.js is slower for multiper reasons , so BUN was created and we use it for low latency resposive systems

const express=require("express");//to import express , also use npm install express
const app = express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello dakshita')
})
app.listen(3000);//These above lines are must 
//whenever you are sending back an response makes sure it is converted to a string => res.send(ans.toString());
//if we need to take an input from user we use const xyz=req.query.variable_name
// if we want to display something we use res.send(ans.toString());

// 200-everything went Fine
// 404-Route doesnt exist //403-Authorization failed
// 500-Internal Server eroor
// 411-Imputs were incorrect 

// lets create an in memory hospital
var users=[{
    name:'sakib',
    kidneys:[{
        healthy:false
    }]
}];
//GET
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let healthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        numberOfUnhealthyKidneys
    })
})
//POST
app.use(express.json());//we use this so that body doesnt remain undefined
app.post("/",function(req,res){
    //here we send data in body
    const isHealthy=req.bosy.isHealthy;
    user[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})//test this on postman 
//PUT
app.put("/",function(req,res){
    for(let i=0;i<kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }
    res.json({//never forget to send back this or else the cycle is hung 
        msg:"Done!"
    })
})
app.delete("/",function(req,res){
    const newKidneys=[];
    for(let i=0;i<kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({
        msg:"ok deleted unhealthy kidney"
    })
})
//we should also validate the user input , using res.status(411).json({ xyz})
// req.body
// Data sent in the body of POST/PUT/PATCH requests.
// Requires: app.use(express.json());
// Example: req.body.username

// req.query
// Query parameters in the URL (after ?).
// Example: /search?name=rohit
// Access: req.query.name

// req.params
// Route parameters (dynamic URL values).
// Route: app.get("/user/:id")
// Access: req.params.id

// req.headers
// HTTP headers sent by the client.
// Example: req.headers["authorization"]

// req.method
// HTTP method used in the request.
// Example: req.method // "GET", "POST", etc.

// req.path
// URL path without query parameters.
// Example: req.path // "/home"

// req.url
// Full request URL (path + query).
// Example: req.url // "/home?sort=asc"

// req.ip
// Client IP address.
// Useful for logging and rate limiting.

// req.cookies
// Accessible if cookie-parser middleware is used.
// app.use(cookieParser());
// Access: req.cookies.token

// req.get()
// Get a specific header value.
// Example: req.get("User-Agent")

// ADDITIONAL USEFUL req PROPERTIES

// req.hostname
// Returns the domain name of the request.

// req.protocol
// Returns "http" or "https".

// req.originalUrl
// Original URL before any middleware rewrites.

// req.secure
// True if request is HTTPS.

// req.baseUrl
// Mount path of the router (used in router files).

// req METHODS (less common but important)

// req.on()
// Low-level method to listen to raw request events.
// Used when manually parsing streams.

// req.accepts()
// Check what content types the client accepts.
// Example: req.accepts("json")


