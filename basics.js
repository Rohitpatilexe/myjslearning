console.log("Hello, GitHub!");

// compilers convert high level human friendly code to 0 and 1 

//things which js provides
function getLength(str){
    console.log("The lenght of the string is ",str.length);
}

function findIndexOf(str,target){
    console.log("Index:",str.indexOf(target));//use lastIndexOf for last words index
}

function getSlice(str,start,end){
    console.log("After Slice:",str.slice(start,end));
}

const str="hello world";
console.log(str.replace("world","javascript"));

const value="HEllo Sakib Husaain";
const words=value.split(" ");//here delimeter is space , if u put h it seperates using h in between    

const value1="            harkirat            ";
console.log(value.trim());// only trims in the beginning in the end

var name1="rohit";
console.log(name1.toUpperCase());

console.log(parseInt("42"));//string to integer
console.log(parseInt("32px"))//gives 32 as outout , there is also parseFloat();

//in arrays
let array=[1,2,3,5,6,7];
array.push(7);
array.pop();
array.unshift(4);//adds element at the start of the array
array2=[1,4,65];
console.log(array.concat(array2));

//to itertate over a loop
array3=[12,4,545];
// array3.forEach(here a function is required)

//classes
class Animal{
    constructor(name,legCount){
        this.name=name;
        this.legCount;
    }
}
let dog = new Animal("dog",4);
//there are also static functions or variables which are not associated to any object they are directly mapped to the class 
// you can use the static function or variable using class_name.fuction_name();
//if you want to call something directly on a CLASS you should declare that item or function as static

//we can use Date as an inbuilt class for us 

const CurrentDate=new  Date();
console.log(CurrentDate.getMonth()+1);
console.log(CurrentDate.getSeconds());

console.log("time in milliseconds since 1970",CurrentDate.getTime());//this(1970) is called as epoch time stamp

//a trick to check how much time does a fucntion take to run in milliseconds

function calculateSum(){
    let a =0;
    for(let i=0;i<1000000;i++){
        a=a+i;
    }
    return a;
}
const beforeTime = new Date();
const beforeTimeInMs=beforeTime.getTime();

calculateSum();

const afterTime=new Date();
const afterTimeInMs=afterTime.getTime();

console.log("The orignal time taken is :", afterTimeInMs-beforeTimeInMs);

//JSON
const users={
"name2":"Rohit",
"age":24,
"gender":"male"
}//we have to actually convert this to a string so that the person who recieves this understands the structure of our object
//JSON.parse and JSON.stringify are used to convert 
const finalString=JSON.stringify(users);
console.log(finalString);

//inorder to do deep-copy
const original = { name: "Matrix", details: { year: 1999 } };

// The "Hack"
const clone = JSON.parse(JSON.stringify(original));

clone.details.year = 2024;

console.log(original.details.year); // 1999 (Safe! The original didn't change)