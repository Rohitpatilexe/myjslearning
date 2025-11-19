const express=require('express');
const port=3000;
const app=express();
const jwt=require('jsonwebtoken')
const SECRET_KEY='SAKU_IS_A_FBOY';
app.use(express.json());
const users =[{
    id:1,
    username:'saku',
    password:'sanchita'
}];

app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    const user=users.find(u=>u.username===username && u.password===password)
    if(!user){
        return res.status(401).json({
            message:'You have not entered the valid credentials or you are not an exisiting user'
        })
    }
    const payload={
        id:user.id,
        username:user.username
    };
    const token=jwt.sign(payload,SECRET_KEY,{expiresIn:'5h'})
    res.json({
        message:'a jwt web token is sucessfully created',
        token:token
    });
});
const authenticationToken=(req,res,next)=>{
    const authenticator=req.headers['authorization'];
    const token=authenticator && authenticator.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:'Access denied'
        })
    };
    jwt.verify(token,SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(403).json({
                message:"An internal error occured,Apologies!"
            });
        }
        req.user=user;
        next();
    });
};
app.get('/protected', authenticationToken, (req, res) => {
    res.json({
        message: 'You have accessed a protected route!',
        user: req.user 
    });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
