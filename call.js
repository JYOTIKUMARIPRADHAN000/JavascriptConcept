

//" valriable follows the lexical scope with normal and arrow function "
// "this keyword follows the lexical scope with arrow function only but not with normal function . "



//call

//case1

let studentDetails1 = {
  fname: "abcd",
  lname: "tango",
  printnamefunction: function(){
    console.log("the student name is " + this.fname + " " + this.lname);
  }
};


studentDetails1.printnamefunction();
let studentDetails2 = {
  fname: "ram",
  lname: "roy",
};
studentDetails1.printnamefunction.call(studentDetails2);

//case2

let studentDetails3 = {
  fname: "sony",
  lname: "mist",
};

const printnamefunctionCase2 = function(){
 console.log("the student name is " + this.fname + " " + this.lname);
}

printnamefunctionCase2.call(studentDetails3);
let studentDetails4 = {
  fname: "rojal",
  lname: "hipt",
};
printnamefunctionCase2.call(studentDetails4);

//case3

let studentDetails5 = {
  fname: "sya",
  lname: "yuhe",
};

const printnamefunctionCase3 = function(homeAdd){
 console.log("the student name is " + this.fname + " " + this.lname + " "+ "at" + " "+ homeAdd );
}

printnamefunctionCase3.call(studentDetails5,"bengaluru");
let studentDetails6 = {
  fname: "riml",
  lname: "pat",
};
printnamefunctionCase3.call(studentDetails6,"delhi");

