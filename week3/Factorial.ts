function factorial(n: number): number {

  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  let result: number = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(factorial(2)); 