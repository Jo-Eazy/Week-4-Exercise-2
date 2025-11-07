function sum(n) {
  if (typeof n !== "number" || n !== Math.floor(n)) {
    return "The value you entered was not a number";
  }
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

function factorial(n) {
  if (typeof n !== "number" || n < 0 || n !== Math.floor(n)) {
    console.log("Input must be a non-negative integer.");
    return;
  }
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.log(result);
}

function funkyMath() {
  const len = arguments.length;
  if (len === 2) {
    return arguments[1] - arguments[0];
  } else if (len === 3) {
    return arguments[0] + arguments[1] + arguments[2];
  } else if (len === 4) {
    const firstSum = arguments[0] + arguments[1];
    const secondSum = arguments[2] + arguments[3];
    return firstSum / secondSum;
  } else {
    return "Invalid. Numbers must be 2, 3, or 4.";
  }
}

let orginalArray = [1, 2, 33, 45, 6, 44];
let oddArray = [];

for (let i = 0; i < orginalArray.length; i++) {
  if (orginalArray[i] % 2 !== 0) {
    oddArray.push(orginalArray[i]);
  }
}

oddArray.sort(function (a, b) {
  return a - b;
});

let me = {
  firstName: "Jose",
  lastName: "Dhlamini",
  age: 18,
  favouriteColour: "black",
  dreamCar: "Bugatti",
};

me.favouriteFood = "Steak and Eggs";

delete me.age;

for(key in me){console.log(key, ":", me[key])}
//Building Blocks to use code (uncomment to test the code)
//console.log(sum(5));
//console.log(sum("a"));
//factorial(4);
//factorial(-2);
//console.log(funkyMath(8,2));
//console.log(funkyMath(1,2,3));
//console.log(funkyMath(8,2,3,5));
//console.log(oddArray);
//console.log(me);
