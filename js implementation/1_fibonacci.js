const fib_loop = () => {
  let fibo1 = 0;
  let fibo2 = 1;
  let fibo;

  for (i = 2; i < 20; i++) {
    let fibo = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo;
    console.log("The", i + 1, "th fibonacci number is ", fibo);
  }
  return fibo;
};

// fib_loop();

let count = 0;
const fib_recursion = (fibo1 = 0, fibo2 = 1) => {
  if (count >= 18) return;
  let fibo = fibo1 + fibo2;
  console.log(count, " -> ", fibo);
  count++;
  fib_recursion(fibo2, fibo);
};

// fib_recursion();

const nth_fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return nth_fib(n - 1) + nth_fib(n - 2);
};

console.log(nth_fib(19));
