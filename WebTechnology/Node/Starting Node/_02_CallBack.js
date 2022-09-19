const printanswer = (n) => {
  console.log("hello world " + n);
};
const printOutput = (n) => {
  console.log("Output is " + n);
  return n;
};
const oddOrEven = (n, functionToCall, newFunToCall) => {
  if (n % 2 == 0) {
    functionToCall("Even");
  } else {
    functionToCall("Odd");
  }
  newFunToCall(functionToCall("odd or even"));
};
const n = 25;
oddOrEven(n, printOutput, printanswer);
