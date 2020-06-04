/* C ++ Programming ANCHOR */
    // Is better than C //
        // 1. Can support data abstracions
        // 2. Supports object oriented programming
        // 3. Supports generic programming

    //Language started in 1979 and was originally known as C with classes, essentially it meant that class files (used in object oriented programming)
        // Were added to the C language, 1983 it was renamed C++ 
            // NOTE C++ is associated with the following
                // 1. classes: A (class) is a user-defined data type that we can use in  our program, and it works as an object constructor
                // 2. objects: An object is created from a class
                // 3. attributes
                // 4. Methods: Methods are functions that belong to a class
                 // NOTE There are two ways to define functions within a (CLASS)
                    //1. inside class definition
                    //2. outside 
// C++ exists under the stewardship of a standards committee and became and ISO standard in 1998
        //NOTE in other words, it doesnt belong to anyone
    // With a revision in 2011 and a minor revision in 2014, it continues to be updated as a part of the standard committee work

// C++ PROGRAM STRUCTURE ANCHOR
    //C++ has a very specific structure in terms of how code is written and some key elements that you use in your C++ 

/* FIRST (simple) Hello world(!) example NOTE */

# include <iostream> // PRE- processor

int main ()
{ // METHOD
    std::cout << "Hello world!";
    return 0;

}// METHOD
// in the example above notice some elements listed, the line numbers are used for reference only
    //LINE 23:
        // This is known as a PRE-PROCESSOR
         //it instructs the (COMPILER) to locate the file that contains code for a library known as (IOStream)
          // IOSTREAM library contains code that allows for input and output to streams, such as the the CONSOLE WINDOW
          // look into # include <iostream) 
            // IOSTREAM is used to invovke commonly used functions like like the (cout) and (cin)
                //(cin) is an object in C++ 
                    // Which is the instance of the class istream  and is used to read input from the standard input device which is usually the keyboard 
                    // NOTE stress on ACCEPTING input from the standard input device



    //LINE 25:
     // Every C++ program must have a method know as | main() | 
       // It is refferred to as an entry point for the application when you start an execution of the program on your computer (the front door)
        // the | int | 
         // is the return type of the method  
        // The empty parantheses | () | (after main method)
         //  indicates that this is a method and that it takes no arguments
         //  look into METHODS and ARGUMENTS in C++
            // (default) argument
                //
    // LINE 29:
        // (Method) bodie in C++ start with open curly brace 
    //LINE 30:
        // This (METHOD) uses a method known as (cout)(((KNOWN AS "SEE OUT"))) to send the TEXT "Hello world!" to the console for the output display
            // This is referring to a standard output device i.e. monitor
         // (::COUT) is an object of class ostream.
         // it is defined in the <iostream>


    