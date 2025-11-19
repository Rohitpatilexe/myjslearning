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

//map,filter and arrow functions
const sum=(a,b)=>{
    return a+b;
}

//map takes in an input and operation to be done on it
//map(arr,function)

const input=[1,2,3,4,5,6,7];
function transaform(i){
    return i*2;
}
const newarray=Map(input,transaform);//or = input.map(Transform)

//filtering
const arr=[1,2,3,4,5,6,7,8]
function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
const  ans =arr.filter(filterLogic);



//Middlewares,authentication,global catches,ZOD
//ugly way without using middleware
const expess=require("express");
const app1=express();
app.get("/health-checkup",function(req,res){
    const username1=req.headers.username1;
    const password=req.headers.password;

if(username==="saku" && password==='pass'){
    res.json({
        msg:"sucess"
    })
}else{
    res.json({
        msg:'wrong man wrong'
    })
}
})
//if we go on adding routes in which code repeats it doesnt go with DRY, for which we created functions usually
//u can always test this on postman
 
//ideal way , we use middlewares where we pass in checks and it is called for whichever route is used 
//we keep next in middlewares , suggesting to continue into the main logic of the api route 

function userMiddlewear(req,res,next){
    if(username!="saku" && password!="pass"){
        res.status(403).json({
            msg:"incorrect inputs",
        });
    }
    else{
            next();
        }
        // we can continue writing more and more checks and next passes the controller to the next check
}
app.get("/preeyanka",userMiddlewear,function(req,res){
    res.send("ok macha")
})
//we can pass in multiple callback functions inside of a api, where we use next() to move to the next callback function

app.get("/saku-hi",function(req,res,next){
//some code
},function(req,res){
    //some code which does the task 
})
//we can create a middlewear which checks number of requests hit and logs it 
numberOfRequests=0;
function calculateNumberofHits(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

//use cases of app.use()
app.use(userMiddlewear)
//this makes sure that any routes coming after this line , undergo this middlewear check

//GLOBAL CATCHES,special type of middleware in express that has 4 arhuments 
//it always comes at the end if some excpetion happens and is also written at the end of the code before app.listen(some_port)

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with my heart"
    })
})
app.listen(3000);
//zod is used for data validation , instead of writing multiple test cases for input validation 
//Zod lets you define a schema (a blueprint) of what your data should look like. It handles the checking for you.
// add a POST route because Zod is typically used to validate the req.body (data sent by the user).
const z = require ('zod');
const loginSchema=z.object({
    email:z.string().email({message:"Invalid Email Address"}),
    password:z.string.min()(6,{message:"Enter atleast 6 characters"}),
    country:z.literal("IN").optional()
});

function validateInputSchema(schema){
    return(req,res,next)=>{
        const response=schema.safeParse(req.body);
        if(!response.success){
            return res.status(400).json({
                msg:"Invalid input",
                errors:response.error.issues
            });
        }else{
            next();
        }
    }
}
//more zod usage keys 
// --- 1. BASIC PRIMITIVES ---
// const primitives = z.object({
//     username: z.string(),
//     age: z.number(),
//     isActive: z.boolean(),
//     birthDate: z.date(), // Expects JS Date object
//     anything: z.any(),   // Avoid if possible
//     unknown: z.unknown(), // Safer version of any
//     void: z.void(),      // Accepts undefined
// });


// // --- 2. STRING VALIDATIONS (Most Common) ---
// const stringSchema = z.string()
//     .min(5, { message: "Must be 5+ chars" })
//     .max(20, { message: "Max 20 chars" })
//     .length(10)             // Exact length
//     .email()                // Validates email format
//     .url()                  // Validates URL
//     .uuid()                 // Validates UUID
//     .cuid()                 // Validates CUID
//     .regex(/^[a-z]+$/)      // Custom Regex
//     .includes("saku")       // Must contain substring
//     .startsWith("admin_")
//     .endsWith(".com")
//     .trim()                 // Trims whitespace automatically
//     .toLowerCase();         // Converts to lowercase


// // --- 3. NUMBER VALIDATIONS ---
// const numberSchema = z.number()
//     .min(10)                // >= 10
//     .max(100)               // <= 100
//     .gt(5)                  // > 5
//     .gte(5)                 // >= 5
//     .lt(10)                 // < 10
//     .lte(10)                // <= 10
//     .int()                  // Must be an integer
//     .positive()             // > 0
//     .nonnegative()          // >= 0
//     .negative()             // < 0
//     .finite()               // No Infinity
//     .safe();                // Inside JS safe integer range


// // --- 4. OBJECTS & ARRAYS ---
// const complexSchema = z.object({
    
//     // Objects can be nested
//     address: z.object({
//         street: z.string(),
//         zip: z.number()
//     }),

//     // Arrays
//     tags: z.array(z.string()),             // Array of strings: ["news", "tech"]
//     scores: z.number().array(),            // Alternative syntax
    
//     // Non-empty array
//     items: z.string().array().nonempty(), 
    
//     // Exact length array
//     coords: z.number().array().length(2),  // e.g., [10, 20]
// });


// // --- 5. MODIFIERS (Optional, Nullable, Default) ---
// const modifiers = z.object({
//     // OPTIONAL: Key can be missing or undefined
//     // Result: string | undefined
//     middleName: z.string().optional(), 

//     // NULLABLE: Key must exist, but can be null
//     // Result: string | null
//     bio: z.string().nullable(),

//     // NULLISH: Key can be missing, undefined, or null
//     // Result: string | null | undefined
//     referral: z.string().nullish(),

//     // DEFAULT: If missing/undefined, use this value
//     role: z.string().default("guest"),
// });


// // --- 6. LITERALS, ENUMS & UNIONS ---
// const logicSchema = z.object({
//     // LITERAL: Must be exactly this value
//     type: z.literal("admin"), 
//     isConfirmed: z.literal(true),
    
//     // ENUM: One of a set of strings
//     status: z.enum(["Pending", "Active", "Banned"]), 
    
//     // NATIVE ENUM (if using Typescript enums)
//     // role: z.nativeEnum(MyRoleEnum),

//     // UNION: "OR" logic (String OR Number)
//     id: z.union([z.string(), z.number()]), 
    
//     // DISCRIMINATED UNION (Advanced: efficient switching based on a key)
//     event: z.discriminatedUnion("type", [
//         z.object({ type: z.literal("click"), x: z.number(), y: z.number() }),
//         z.object({ type: z.literal("scroll"), offset: z.number() }),
//     ]),
// });


// // --- 7. TRANSFORMATION & REFINEMENT (Custom Logic) ---
// const transformSchema = z.object({
//     // TRANSFORM: Change data after validation
//     email: z.string().email().transform(val => val.toLowerCase()),
    
//     // REFINE: Custom validation logic
//     password: z.string().refine(val => val.length <= 20, {
//         message: "Password is too long (custom check)" 
//     }),
    
//     // REFINE (Async): Check DB for unique username
//     username: z.string().refine(async (val) => {
//         // const exists = await db.checkUser(val);
//         // return !exists;
//         return true; 
//     }, { message: "Username already taken" }),
// });


// // --- 8. STRICT vs PASSTHROUGH ---
// // By default, Zod strips unknown keys.

// // STRICT: Throws error if unknown keys are present
// const strictUser = z.object({ name: z.string() }).strict();

// // PASSTHROUGH: Keeps unknown keys
// const looseUser = z.object({ name: z.string() }).passthrough();


// // --- 9. INFER (TypeScript Only - Very Useful) ---
// /*
//     const UserSchema = z.object({ name: z.string() });
//     type User = z.infer<typeof UserSchema>;
//     // Result: { name: string }
// */
