//add function
console.log("Add function");
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(4, 6));
//multiplication
console.log("multiplication function");
function multiply(num1, num2) {
  let total = 0;
  let count = 0;
  while (count < num2) {
    total = add(num1, total);
    count += 1;
  }
  return total;
}
console.log(multiply(6, 4));

// Power/Exponentiation
console.log("Power/Exponentiation function");
function power(x, n) {
  let total = 1;
  let count = 0;
  while (count < n) {
    total = multiply(x, total);
    count += 1;
  }
  return total;
}
console.log(power(3, 4));

//Factorial function
console.log("Factorial functions");
function factorial(num) {
  let total = 1;

  while (num > 0) {
    total = multiply(total, num);
    num -= 1;
  }
  return total;
}
console.log(factorial(5));

console.log("Fibonacci Number Function");
function fibonacci(n) {
  let count = 2;
  let num1 = 0;
  let num2 = 1;
  let total = 0;

  if (n === 1) {
    return (total = 0);
  } else if (n === 2) {
    return (total = 1);
  } else {
    while (count < n) {
      total = add(num1, num2);
      num1 = num2;
      num2 = total;
      count += 1;
    }
    return total;
  }
}
console.log(fibonacci(5));
console.log("Fibonacci Number Function2");
function fibonacci2(n) {
  let fibValue = [0, 1];
  let count = 0;
  let total = 0;
  while (count < n) {
    total = add(fibValue[count], fibValue[count + 1]);

    fibValue.push(total);
    count += 1;
  }
  console.log(fibValue);
  return fibValue[n - 1];
}
console.log(fibonacci2(5));
