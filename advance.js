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

//common async functions are=> setTimeout , fs.readFile-to read a file from your filesyatem, Fetch-to fech some data from an ApiEndPoint

const fs= require("fs");//stands for filesystem and suppourts I/O
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
