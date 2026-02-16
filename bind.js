// it is similar to call(), here just it take the copy of the function and invoke it later

let studentDetails5 = {
  fname: "sya",
  lname: "yuhe",
};

const printnamefunctionCase3 = function(homeAdd,pincode){
 console.log("the student name is " + this.fname + " " + this.lname + " "+ "at" + " "+ homeAdd + "," + pincode);
}

 const mynameprint3 = printnamefunctionCase3.bind(studentDetails5,"bengaluru","87544");
 console.log(mynameprint3);
 mynameprint3();
let studentDetails6 = {
  fname: "riml",
  lname: "pat",
};
const mynameprint4 = printnamefunctionCase3.bind(studentDetails6,"delhi","677655");
console.log(mynameprint4)
mynameprint3();

