//lets learn about Document Object Model
//Javascript makes the HTML page active and dynamic via the DOM
//it is a programming interface for web documents
//DOM is present at the top of the tree structure
//we use dot to access multiple elements or parameters of HTML
//.innerHTML helps us change or manipulate content of an attribute
//createElement() helps create a specified element and insert in into DOM
const para=document.createElement('p');
para.innerText="saku loves sanchita";
document.body.appendChild(para);

//getElementById()
//get elemntByTagName()
//getElementByClassName()

var paragraphs=document.querySelectorAll('p.intro');
paragraphs.forEach(paragraph=>paragraphs.style.backgroundColor="red");

//if we only want first occurance of our choice we use , querySelector
//we can change attribute using
Element.attribute=new value;
// the setAtrribute() method sets a new value to an attribute
