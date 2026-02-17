
//in JS everything is object and means everything initialtes from the obeject and prototype of this object is always null

//case 1
const bag = "photon-bag";
console.log(bag.__proto__); // here it will refer to the prototype of String
console.log(bag.__proto__.__proto__)// here it will refer to the obejct 
console.log(bag.__proto__.__proto__.__proto__)// and  prototype of this obejct will be null.

//case2

const mark = 88;
console.log(mark.__proto__);//here it will refer to prototype of Number
console.log(mark.__proto__.__proto__)// it will refer to obeject and
console.log(mark.__proto__.__proto__.__proto__)//  prototype of this obejct will be null

//case3
const isMorning = true;
console.log(isMorning.__proto__);// here it will referr to prototype of boolean
console.log(isMorning.__proto__.__proto__);//it will refer to object
console.log(isMorning.__proto__.__proto__.__proto__);// it will give null

//case4

const p1 ={
    fname:"yhg",
    lname:"duio",
    printname : function (){
        console.log("the full name is ", this.fname +" "+this.lname);
    }

}
//const p2 =Object.create(p1);
const p2 ={
    __proto__: p1
}

console.log(p2.fname);



//const bag = "photon-bag"; here bag is object of string class means internally it is like
//  const bag = new String("photon-bag");

console.log(bag.at(2));// see here bag dont have any function like at() so it will search 1st at bag , then it will go at prototype label,

//main class has the prototype actually
// then the object created form that class can access the all variables , methods of that class using the __proto__

// for example
class String{

}// here class String Has the prototype

// if i want to create object and access the class then
const s1obj ={
    __proto__:String.prototype
}


//__proto__ vs prototype
//__proto__ of the object points towards the prototype of the base class