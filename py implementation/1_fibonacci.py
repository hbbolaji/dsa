def fib_loop():
  fibo1 = 0
  fibo2 = 1
  for fibo in range(18):
    fibo = fibo1 + fibo2
    fibo1 = fibo2
    fibo2 = fibo
  print(f"the 20th fibonacci number is {fibo}")
  return fibo

# fib_loop()

count = 0
def fib_recursion(fibo1= 0, fibo2=1):
  global count;
  if count >= 18:
    return fibo;
  fibo = fibo1 + fibo2
  print(f"{count} -> {fibo}")
  count += 1
  fibo = fib_recursion(fibo2, fibo)

# fib_recursion()

def nth_fib(n):
    if n <= 1:
        return n
    else:
        return nth_fib(n - 1) + nth_fib(n - 2)

print(nth_fib(19))