 // The idiots guide to Rust 
 
// 0.1 
// The code below will print out "Hello world (NOTE: code below in store in main_folder/main.rs

fn main() {
    println!("Hello world!");

    }
// once saved
// Go back to your terminal and enter in the following: 
$ rustc main.rs 

// This will then compile your Rust file and output a binary excutable
// now enter the following into your terminal
$ ./main
//OUTPUT: Hello world!

// NOTE Anatomy of a Rust program

fn main() { //the empty parantheses indicates NO PARAMETERS 

} //NOTE notice how the function is wrapped in curly bracket, Rust requires these around all function bodies 
        //it's considered good style to put the opening curly brace on the same line as the
        //function declaration 

// The code above is a Rust function
    // It basically says "I'm declaring a functiion named main that has no parameters and returns
    // nothing 
    // It basically says "I'm declaring a functiion named main that has no parameters and returns
    // nothing 
// If there were parameters, their names would go inside the parthetheses NOTE: (and)

// Inside the main function:

println!("Hello world!"); 
// This line does all the work, remember that bitch
// it prints the text to the line
//println = normal function, printlin! = macro. So when you see a ! you are calling a macro and not
//a normal function
// "Hello world!" within the parantheses is the string
    //we pass the string as an argument to 
        println!

// And lastly, the line ends with a semicolon (;). the ; indicates that this expression is over and
// ready for the next line 
    // Most lines in Rust end with (;)

// The Rust style is to indent with four spaces and NOT tab

// The second: 
println!

// This is calling a Rust "macro"
   // which is how metaprogramming is done in Rust
    // REMEMBER THAT ! = MACRO 

// NOTE Compiling and Running Are Seperate Steps 
//  This section will go into how we ran our newly created Rust program

// Before running a Rust program, you have to compile it
    // TODO this we can use the Rust compiler by entering (rustc) and passing it the name of the
    // file. Like so: 
    $ rustc main.rs

// After compiling successfully, Rust should 
// Once this is done, do the following to see what you are now working with:
$ ls 
main main.rs

//Hello, Cargo! NOTE

// CARGO is Rust's buid system and package manager
// Rustaceans use Cargo to manage their Rust projects because it makes a lot of tasks easier
    //CARGO:
    // Takes care of building your code 
    // Downloading the libraries your code depends on
    // And building those libraries

    // Though the simple 'Hello world!' program we just built doesnt have any dependencies
        // So right now you'd only be using the part of the Cargo that can take care of building your code


