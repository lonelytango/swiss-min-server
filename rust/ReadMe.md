<!-- To build rust project -->
cargo build

<!-- To run rust project -->
cargo run

<!-- To build for release -->
cargo build --release

<!-- Mutable / Immutable -->
let foo = 5; // immutable
let mut bar = 5; // mutable

<!-- println placeholder -->
let x = 5;
let y = 10;
println!("x = {} and y = {}", x, y);

<!-- generating random number -->
use rand::Rng;
let secret_number: u32 = rand::thread_rng().gen_range(1..101);

<!-- comparing numbers -->
use std::cmp::Ordering;
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => println!("You win!"),
}

<!-- Loop -->
loop {
    println!("hello!!")
}

<!-- Tuple -->
let tup = (500, 6.4, 1);
let (x, y, z) = tup;
println!("The value of y is: {}", y);

<!-- Shadowing -->
let x = 5;
let x = x + 1;
let x = x * 2;
<!-- 12 -->

<!-- Return value from loop -->
let mut counter = 0;
let result = loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
};

<!-- While -->
let a = [10, 20, 30, 40, 50];
let mut index = 0;
while index < 5 {
    println!("the value is: {}", a[index]);
    index += 1;
}

<!-- For iteration -->
let a = [10, 20, 30, 40, 50];
for element in a.iter() {
    println!("the value is: {}", element);
}

<!-- Appending string -->
let mut s = String::from("hello");
s.push_str(", world!"); // push_str() appends a literal to a String
println!("{}", s); // This will print `hello, world!`