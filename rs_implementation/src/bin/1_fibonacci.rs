fn fib_loop() -> i32 {
    let mut first = 0;
    let mut next = 1;
    let mut fibo = 0;
    let mut count = 2;
    while count < 20 {
        fibo = first + next;
        first = next;
        next = fibo;
        count += 1;
    }
    fibo
}

fn fib_recursive(first: i32, next: i32, mut count: i32) {
    let fibo = first + next;
    if count <= 0 {
        println!("{fibo}")
    } else {
        count -= 1;
        fib_recursive(next, fibo, count);
    }
}

fn main() {
    println!("Fibonacci Sequence with loop: {}", fib_loop());

    fib_recursive(0, 1, 17);
}
