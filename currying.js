// Currying is the process of taking a function with multiple arguments and
// turning it into a sequence of functions each with only a single argument.

//case1 using bind()

function multiply(x, y) {
  console.log(x * y);
}

const checkFunc1 = multiply.bind(this, 2);
checkFunc1(6);

const checkFunc2 = multiply.bind(this, 8, 2); //16
checkFunc2(9); // it will not take this 9

const checkFunc3 = multiply.bind(this); //NaN
checkFunc3(9); // it will not take this 9

//CASE2 using closer

function checkvalue(x) {
  return function inputcheck(y) {
    console.log(x);
    console.log(y);
    console.log(x + y);
  };
}

const valuechecking1 = checkvalue(7);

valuechecking1(9)
