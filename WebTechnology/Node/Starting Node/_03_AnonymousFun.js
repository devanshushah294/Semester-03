const oddOrEven = (n, funToCall) => {
  if (n % 2 == 0) {
    funToCall("Even");
  } else {
    funToCall("Odd");
  }
};
const number = 5;
oddOrEven(number, (n) => {
  console.log("the number is " + n);
});
