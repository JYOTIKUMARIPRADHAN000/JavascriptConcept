// in call() we can pass the arguments comma seoparated but with apply just need to pass all that arguments in array 
let studentDetails5 = {
  fname: "sya",
  lname: "yuhe",
};

const printnamefunctionCase3 = function(homeAdd,pincode){
 console.log("the student name is " + this.fname + " " + this.lname + " "+ "at" + " "+ homeAdd + "," + pincode);
}

printnamefunctionCase3.apply(studentDetails5,["bengaluru","87544"]);
let studentDetails6 = {
  fname: "riml",
  lname: "pat",
};
printnamefunctionCase3.apply(studentDetails6,["delhi","677655"]);