//we can context switch between tasks or we can delegate tasks to other parts 
//JS is singe threaded yet can do the above mentioned things
//by default all things are synchronous in JS

function findSum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans+=i;
        return ans;
    }
}
function findSumTill100(){
    console.log(findSum(100));
}
setTimeout(findSumTill100,1000);//This setTimeout is inbuilt and delegates work to some other thread 
console.log("Kaise ho bhai github master");

//common async functions are=> setTimeout , fs.readFile-to read a file from your filesyatem, Fetch-to fech some data from an ApiEndPoint (like sending a nw request)

const fs= require("fs");//stands for filesystem and suppourts I/O operations on a file
const { resolve } = require("path");
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

//After async functions are done executing , it waits in the CallBack Queue

console.log("hi there broski");
setTimeout(function(){
    console.log("from inside async fn");
},200)
let a=0;
for(let i=0;i<10000000000;i++){
    a+=i;
}
console.log(a);

//here the setTimeout anonymous function waits in callback queue
//callback functions actually make more sense inside a async function

//Promises are syntactical way of making async codes look readlable
//We create a wrapper on top of other async functions and make it look readable, fs.readFile is also a wrapper around some async function 

function RohFile(){
    return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){//called as error first callback
        resolve(data);
    });
    })
}
function onDone(cb){//callback function
    console.log(data);
}
RohFile.then(onDone);//an example of promises

//a promise can have 3 forms pending,resolved and 

function putCopyrightToFile(cb){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        data=data+"saku was here";
        fs.writeFile("a.txt",function(){
            cb();
        })
    });
}
putCopyrightToFile(function(){
    console.log("copyright has been put");
})

//There are 2 ways of creating async await function 
//one is promisified and other is not 
//non promisified takes in a callback where as other doesnt and it returns a promise 

//returning a promise
function promisidiedMyOwnSetTimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    });
    return p;
}
const ans=promisidiedMyOwnSetTimeout(1000);
addEventListener.then(function(){
    console.log("timeout is done");
});

//non-promisified async

function nonpromisifiesMyOwnSetTimeout(callback,duration){
    setTimeout(function(){
      callback();
    },duration);
}
//01:34:27 i had stopped here








