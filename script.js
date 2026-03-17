console.log("Hello World");
var num = 10;
console.log(num);
console.log(typeof(num));
num = false;
console.log(num);
console.log(typeof(num));
num = "Rohan";
console.log(num);
console.log(typeof(num));
num = 10.5;
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));

objects
var person = {
    name: "Rohan",
    age: 20,
    city: "Ghaziabad"
};
console.log(person);
console.log(typeof(person));

const sym1 = Symbol(4);
console.log(sym1);
console.log(typeof(sym1));
const sym2 = Symbol(4);
console.log(sym2);
console.log(typeof(sym2));
if(sym1 == sym2){
    console.log("true");
}else{
    console.log("false");
}