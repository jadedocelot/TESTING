greeting = ("Hey fucker!") 

print(greeting) #this will proceed to print HEY FUCKER!



#NOTES START

REVIEW #umbers are mainly two types, integers (integer is a whole number that is not afraction) and floats REVIEW
	   ##AN example to an integer is 2 which is a whole number
	   ###an example of a floating point number (or FLOAT for short) are 3.23 and 52.3E-4	ß* The E notation indicates POWERS of 10. in this case 52.3E-4 means 52.3 * 10^-4^ = .00523 * 10 
	   			REVIEW: "Scientific Notation" - -4 means move the decimal point 4 places to the LEFT (+ to the RIGHT).
* https://www.google.com/search?q=decimal+numbers+multiplied+by+a+negative+exponents&rlz=1C5CHFA_enUS871US871&oq=decimal+number+multiplied+by+a+negative+expon&aqs=chrome.1.69i57j33.16646j0j8&sourceid=chrome&ie=UTF-8#kpvalbx=_9F2jXpuBG9280PEP8eei-As55
* https://www.khanacademy.org/math/pre-algebra/pre-algebra-exponents-radicals/pre-algebra-negative-exponents/a/negative-exponents-review

#NOTES END

<-- LITERAL CONSTANTS -->

#SINGLE and DOUBLE line quotes
##both perform the same action to specify STRINGS

print('Hello World!') #OUTPUT: Hello World!
print("Hello World!") #OUTPUT: Hello World!

#TRIPLE line QUOTES
## will be used when using single or double line quotes within the triple quotes
###All white space i.e. spaces and tabs, within the quotes, are preserved as-is.
### perks of the .Format method is that it automatically converts the string


print('''He looked at me and said; "Hello world."''') # OUTPUT: He looked at me and said; "Hello world."

					
					<-- FORMAT METHOD -->

#NOTE: Strings are immmutable, that means once you have created a string they can no longer be changed

#the Format Method
##When using the format method, values are always indexed starting with 0 (0,1,2,3,4,5)
### .format()
### Always inlcude the specification number within {}
### Python always start counting from 0-1

name = 'Edgar'
age = 28

print('{0} is {1} which is young but its also not.'.format(age, name)) 
#name = 0 and age = 1 
#always include the STRING name at the end within the parentheses in the order in which you would like them to outputted (THE LAST PART IS VERY IMPORTANT)

print('{0} is my current age.'.format(age))

##the format method can be called to substitute those specifications with corresponding arguments

# there is another wat of achieving teh same results, which is can be done using STRING CONCENTRATIONS thoughis it is much ulier and error-prone

name + 'is' + str(age) + 'years old.' #String concentrations

## NOTE that numbers are optional when using format method

print('{} is {} which is young but its also not.'.format(age, name)) 
# this would also work

# You may also use STRING NAMES within Parameters in place of number

print('My name is {name} and I am currently {age}'.format(name=name, age=age))
#notice how you have to declare the names at the end within the parantheses
## You will get the same results outputted

<-- F-STRINGS -->

#Though all being said PYTHON 3.6 introduced F-STRINGS

print(f'My name is {name} and I am {age}') 
# Will also print out "My name is Edgar and I am 28"
#Though note that F STRING will only work in PYTHON 3 

#decimal (.) precision of 3 for FLOAT '0.333'
print('{0:.3f}'.format(1.0/3))
#OUTPUT: 0.333  
#Specifications can be placed within qoutes (or single quotes)

#KEY-WORD based FORMAT METHOD
print('{name} is {age} years old.'.format(name='Edgar', age=28))  ## Output: Edgar is 28 years old.
## enter KEYWORDS within {curly braces}
## inlcude within quotes
##followed by .format() and within include SPEC name as well as value



#PRINT always ends with an "invisible line" character (/n)
print("Edgar")
print("Ortega")
## The above will print out as follows:
Edgar
Ortega 

#To prevnt a newline (/n) from being printed
print("Edgar" end="")
print("Ortega" end="")

#OUTPUT:
EdgarOrtega

#In order to include a space between words, you have to add a space between the quotes of every END specification NOTE: That each END represents a space for every line
#The last print function will not require a space
print("Edgar", end=" ")
print("Ortega", end="")
#OUTPUT:
Edgar Ortega

<----ESCAPE SEQUENCE------>

#Your string contains a single quote ('), Example: "so You're goiong to the game tomorrow?". Including that single quote will confuse Python by having it think that's the end of the string
#The ESCAPE SEQUENCE (\) .This will need to be specified before the single quote (') in order to prevent any confusion
print("So, you\'re going out tomorrow night?")
#OUTPUT: 
So, You're going out tomorrow night?

#Another wat for preventing confusion is to include a single line quote (') in a double quoted string ("")
print("You're a twat.")
#OUTPUT:
You're a twat.

#What if you wanted to specify a two-line string?
##The escape sequence for the the NEW LINE CHARACTER (\n) is required
print("Kiss\nme\nguedo!")
#OUTPUT:
Kiss
me
guedo!

			<-- RAW STRINGS --> TODO ----> The Backslash Plague - https://docs.python.org/3/howto/regex.html
#A RAW STRING "r" treats BACKLASHES and ESCAPE SEQUENCES within a string as literal characters
#Always specify a RAW STRING by prefixing with (r) or (R)

print(r"Hello World \n")
#OUTPUT:
Hello World \n 

#NOTE always use RAW STRINGS with regular expressions. Otherwise a lot of back whacking may be required

print(r"\\\\section") OUTPUT: \\section
print("\\\\section") OUTPUT: \\section
print("\\section") OUTPUT: \section

<-- VARIABLES --> (FINALLY!!)

# Variables (VAR) are used to store information as well as manipulating them as well. There value can vary, i.e . you can store anything in a variable
# Var are just parts of the computers memory
# Unlike literal constants you need some method of accessing these VAR hence you give them names
# VAR are examples of identifiers 
# Identifiers are names given to identify something

		*** IDENTIFIERS ***
	# The character of an identifier must always start with a letter
		##uppercase, lowercase, and unicode charaters (or even underscroe(_)) OR digits
		##They are also case sensitive (myName or Myname (Both not the same))
		##Remember that that lowercase n is FORMER and uppercase N is LATTER (KEEP IN MIND: camelCase)
			### FORMER and LATTER are bothe terms to denote an items place in a two-place sequence
			### FORMER refers to the first of the set while LATTER refers to the second, or last item
# VALID identifiers
Planet_Greeting = "Hello World!" OUTPUT:Hello World!
planet_greeting = "Hello World!" OUTPUT:Hello World!
Planetgreeting = "Hello World!" OUTPUT:Hello World!
planetGreeting = "Hello World!"OUTPUT:Hello World!
greeting_69 = "Hello World!" OUTPUT:Hello World!

#types of INVALID indentifiers:
 - 2things
 - this is spaced out
 -  my_name
 - >alb2_c3

# Variables can hold values of differnt types called data types. The basic type are NUMBERS and STRINGS 
# You can even create your own TYPES using classes 

# Python referes to anything in the program as an OBJECT
	## this is meant in the generic sense; insead of saying "the something", we say "The object"

NOTE ## Python is strongly object oriented, that mostly everything is an object I E numbers, strings, and functions

## a few FUN examples below

i = 5 
## Assigning a literal constant value 5 to the variable i using the assignment operator (=)
## /\/\ This is also refered to a statement becuase it states that somehting should be done 

print(i)
## OUTPUT: 5

i = 5 + i ### 5 + 5 -- the we added 5 to the value stored in i 	
print(50 / i) ## 50 divided by 10 
## OUTPUT: 5.0	

greeting = "Hello World!"

print(greeting)
## OUTPUT: Hello World!

s = 'This is a string.\
 This continues the string.'

print (s)
#OUTPUT:
This is a string. This continues the string

<--- Indentation ANCHOR --->
#Whitespace is IMPORTANT in python
	## Whitespace at the beginning of a line is important, this is called INDENTATION
#Statements which go together must have the same indentation, each such statements is called a block
	#Wrong indentations can give errors 

#UNACCEPTABLE indentations bellow:
	i  = 5 

	print('the value of the foot is', i)
print('I repeat, the value of the foot is', i)
# the the above syntax will print out an ERROR message telling you that an unexpected indent was included

# CORRECT INDENTATION BELOW 
i  = 5 

print('the value of the foot is', i)
print('I repeat, the value of the foot is', i)
#OUTPUT:
the value of the foot is 5
I repeat, the value of the foot is 5

#if need bem, use FOUR spaces. This is the official python recommendation
<-- Operators and expressions ANCHOR -->
# Most statements (logical lines) that you write will contain expressions.
# Example of an expression:
	 	2 + 4  # 2 (operand) + (operator) 4 (operand)
		 < OPERATORS >
#an expression can be broken down into operands and operators
	## operators (+) are used to perform operations on variables and values - funtionality that do something and can be represented in symbols or special keywords
		### operators do require data I E operands 
#EXAMPLES of OPERATORS being used:
# NOTE POWER of is ** 

3 + 4
# ADD
4 * 3
# MULTIPLY
4 / 2 
# DIVIDE 
5 ** % 
#Returns x to the power of y
13 % 3 
# Modulo (%) returns the remainder of the division

	___	BINARY OPERATIONS __ 

2 << 2 ## OUTPUT: 8 
#LEFT SHIFT (<<)
	## Shifts the bits of the number to the left by the number of bits specified. (Each number is represented in memory by bits or binary digits i.e. 0 and 1)
		#NOTE understanding how got 8
		 # A << B 
		 	# you will need to get the BINARY REPRESENTATION of A
			 # - this can be done with 
			 	>>> format(2, 'b')
			# output: 10
				#now remove the first 2 number from the front and add 2 zero to the back (cause B = 2)
					# TODO REFER TO index.MD (working on this) 
			
# ANCHOR Right Shift (>>)
11 >> 5
#OUTPUT
5
#11 when represented in bits is 1011
	 #> remember to RIGHT SHIFT by 1 digit - (remove the 1 on the right side)
# which leaves us with 101
#5 = 101 (binary rep)

<-- Bit wise and (&) -->
# Bitwise AND sets the bits in the result to 1 if both the corresponding bits in the two operands are 1.
# 1 = TRUE 
# 0 + FALSE 
5 & 3 
#output: 1
#It will compare the binary reps of 5 & 3


| BIT REF CHART |

INPUT 1	  |    INPUT 2	   |	  OUTPUT  

  0		  |       0        |        0         # FALSE 

  0       |       1        |        0		  # FALSE 

  1       |       0        |        0		  # FALSE

  1       |       1        |        1		  # TRUE 


<-- Bit-wise AND -->
#Bit-wise AND (&)
#Bit wise AND of the number
	## AND (&) compares the first bit of each opperand to the corresponding bit of the second operand 
	## If both bits are 1 then the corresponding result bit is set to 1
	## otherwise teh corresponding result bit is set to 0
	## Both operands to the bitwise AND must be of intergral types I E  NUMBERS

5 & 3 

>>> 1

	## 5 = 101 
	## 3 = 11  


# LIL side NOTE:
	# using a variable to store a numeric value

bigFive = 5

bigFive & 3 

>>> 1 

<-- bit-wise OR --> 

#bit-wise OR ( | )
# take two bit patterns and performs the logical inclusive OR operation on each corrosponding bits.
# The result in each position is 0 if both are zero, while otherwise the result is 1
# https://en.wikipedia.org/wiki/Bitwise_operation#OR

5 | 3 

>>> 7

<-- bit-wise XOR -->
# bit-wise XOR (^)
# takes two bit patterns of equal length and performs the LOGICAL EXCLUSIVE OR operation on each pair of corrosponding bits
#The result in each position is 1 if only the first bit is 1 or only the second bit is 1, but will be 0 if both are 0 or both are 1. (Continue)
#In this we perform the comparison of two bits, being 1 if the two bits are different, and 0 if they are the same


#print(format(5,'b')) # 101
#print(format(3,'b')) #11


5 ^ 3
>>> 6

print(format(6, 'b'))
>>> 110

< -- bit wise invert -- >
# The bit-wise inversion of x is -(x+1)


~ 5

>>> - 6

~ 7 

>>> -8


~10101
>>> 10102

<-- Greater/less than ANCHOR -->

# Greater than (>)
# When the entered value is greater operand(NUMBER), TRUE is returnned 

4 > 2
>>> TRUE

2 > 4
>>> FALSE 

# Less than (<)
# Returns >>>True when the endered value is less than the stored operand(NUMBER)

2 < 4
>>>True

4 < 2 
>>>False

##This was a fun one.

###∆∆∆ A "bit" is a single binary digit. The number above has 6 bits. ∆∆∆∆

print(0b11001 < 0b110010)
>>> True 
##This was a fun one.
# 25 = 0b11001(Binary number
# 50 = 0b110010(Binary number) 


<-- less than or equal to -->
#less than or equal to(<=)

# Returns whether y is less than or equal to X 

y = 2 
x = 4


y <= X 
>>> True


<-- greater than or equal to -->
# greater than equal to (>=)


# True is returned when y is greater or equal to y. Otherwise return will be FALSE
x = 4
y = y

***********************
\					  *
 \					  *
  \					  *
 	  \ 			  *
   		 /			  *
     \				  *
      \				  *
       \ 			  *
        \			  *
         \			  *
         /			  * 
        /			  *
       /			  *
      /****************
     /  D
    /	 Y
   /	  N
  /		   A
 /		    M
/			 I
			  C
			 Y
			R
		  O
		M
	  E
	m
  >
 


x >= y
>>>True 

10 >= 5 
>>> True  


print(0b1001110 >= 0b100010)
>>> True

print(0b100010 >= 0b1001110)
>>> False 
#0b100010 = 34
#0b1001110 = 78

<-- Equal to -->
# Equal to (==)
# it will compare if the objects are equal ("" == '') = True  

x = 2
y = 2 

prin(y == x) 
>>> True

4 == 9
>>> False 


<-- Not equal to -->
#Not equal to (!=)

#it compares two numbers that are not equal to
# True is returned if y is not equal to x 
x = 4 
y = 9 

x != y 
>>> True

4 != 4 
>>> False 

<-- Boolean NOT --> 

#Using  (not) before a boolean will OUTPUT the oposite value

x = True; 
>>>
not x
>>> False


<-- boolean (and) --> 

x = False; 
y = True; 

x and y
>>> False
#
# In this case Python will not evaluate Y since the left hand of AND expression is false, which implies the whole expression is FALSE
# It will return false even though Y is True 
# Only if the fist value is is TRUE, it checks the second statement and returns the value

NOTE: 


# This is called short-circuit evaluation
 
 #SHORT CIRCUIT
	## - short circutit operators consist of (boolean AND, Boolean OR, and boolean NOT 

	## - Short-Ciruit referes to stopping the execution of a booleans if the truth value of the expression has been determined already
	## An expression containing an AND and OR stops the truth value of expression that has been achieved 


	<-- boolean (OR) -->
#if X is True, it returns True (even if if Y is False 

x = False; 
y = True;`

print(x or y)  
>>>True

print(y or x)
>>>True

<-- SHORTCUT FOR MATH OPERTATION AND ASSIGNMENTS -->

# You can run a math opertation on a variable and then assign the result of the operation back to the variable

a = 5 

a = a * 5 

a 
>>> 25 

___________________________

OR 


a = 5 

a *=2

a 
>>> 10 
# Notice that Var = Var operation expression --> Var Operation= Expression


___________________________

<-- evaluation Operators --> 

# The following table gives us the precedence table for Python
	# from the lowest precedence (least binding) to the highest precendence (MOST binding)
	# Python in this case  will first evalutate the operators and expressions lower in the table before the ones listed  higher in the tabkle
	# it is far  better to use parentheses to group operators and operands appropriately in order to explicitly specify the precence
				#This makes the program more readable

lambda
	# Lambda Expression
	 # The Lambda expression is small anonymous epxression 
	   # it can take any number of arguments, but can only have one expressions

x = lambda a,b,c: a + b + -c

print(x(1,1,1))
>>> 1 

___
or
___


x = lambda a: a * 3

print(x(5))
>>>15 

# The power of Lambda is better shown when you use it at an anonymous function inside another function

def myFunc(n):
     return lambda a: a * n

bangBang = myFunc(2) #2 is now assigned to a

print(bangBang(11))
>>> 22 
# 11 is now assigned to n and will now perform the following
# 11 * 2  


___
or
___
# Use the same function definition that makes a function that always triples the number you send in

def myFunc(n)
	return lambda a: a * n 

bangBang = myFunc(3)

print(bangBang(11))
>>> 33

___
or
___

def myFunc(n):
     return lambda a: a * n

bangBang = myFunc(2) #2 is now assigned to a
bangBangBang = myFunc(3)

print(bangBang(11))
>>>22

print(bangBangBang(11))
>>>33 

<-- if/else ANCHOR -->

# The following conditions can be used in IF statements

e == b 
# Equals 

e != b 
#Not equals

e < b
# Less than

e > b 
# Greater than 

e >=
# Greater than or equal to 


If 

x = 200
y = 300

if y > x: 
	print("Y is larger than X")

>>> That number is much larger 



<<-- elif -->
# Elif keyword in Python is a way of saying "if the previous condition were true, then try this condition "

x = 13
b = 345

if b > x: #1: if vale is this
     print("Yeah that's way big.") # 1: OUTPUT
elif b < x: #2: else if print this
     print("uh yeah no...") #2: OUTPUT

_____
OR___
_____

a = 243 
b = 500
c = 124

if a > b:
     print("b is greater than a")
elif a == b:
     print("a and b are equal")
else: 
     print("b is greater and that's that")
     #This will print out since a is neither greater than or equal 

/* SHORT HAND */
# this iwill come in handy when you have only one statement to execute, you can put it on the same line as the statement

a = 70
b = 50


if a > b:print("a is greter than b")

# Short hand example of an if and else statement

a = 24
b = 50

print("a is greater than b") if a > b else print("a-int got shit shit on b")
>>> a-int got shit shit on b

# And keyword 
## the and keyword is a logical operator, and is used to combine conditional statements

a = 300
b = 1000
c = 700

if a > b and c > a:
     print("Both conditions are true")
>>> Both conditions are true


#Below is a one line statement which consists of 3 CONDITIONS ANCHOR

a = 300
b = 300

print("a is greter than b") if a > b else print("a and b are equal") if a < b else print("A-int got shit on B")
>>> a and b are equal


or 

a = 100
b = 300

print("a is greter than b") if a > b else print("a and b are equal") if a < b else print("A-int got shit on B")
>>> A-int got shit on B
		

<-- Or keyword --> 

a = 200
b = 140
c = 500

if a > b or a > c:
     print("at least one condition is greater")


#Also, the or key will define a statemet is true as long as the condition the the left (OR right?) is true    


<-- Nested if -->

# In python you can place an IF statement within an IF statement, this is called a nested if statement 

x = 12

if x > 15: 
     print("x is greater than 15")
if x > 35:
     print("x is also greater than 35")
else:
     print("But it's not greater than 50")


<-- PASS statement ANCHOR -->
# if statements cannot be empty 

a = 35 
b = 200
c = 500

if b > a: 
	pass
if c > 20


#Messing with if and AND statements

a = 5
b = 10
c = 25 

if b > c and a < c:
     print("Both statements are true")
else:
     print("At least one statement is true")


if a > b or a > c:
     print("At least one statement is true")
else:
     print("Neither statement is true") 
#slice()
# SLICE statement -- ANCHOR
# function returns a slice of the object, it specifies how to slice a SEQUENCE 


a = ("Noah","Monica","Maria","Edgar","Lucas","Luis")
x = slice(5)

print(a[x])
>>>("Noah","Monica","Maria","Edgar","Lucas") 

# Creating tuple and slice object
# Choose a specific position where to start and 

a = ("Noah","Monica","Maria","Edgar","Lucas","Brooklyn","Allisandra")
x = slice(3,5)

print(a[x])
>>("Edgar","Lucas") 


# NOTE Changin the order of the evaluation

# in python to make the expression more readable, one would push to using paratheses. Like so:
2 +(3 * 4)
>>>14

# This would be much easier to read as oppose to this:

#NO BUENO!
2 + 3 * 4 #This would actually be easier to understand with knowledge of "operator precedences"?

>>> 14 

# Parantheses should be used reasonbly (Don't overdo it!)
# And should not be redundant! Like so: 

(2 +(3 * 4))
>>> DONT DO THIS SHIT!

# There are additional advantages of using paranthese
# It can help change the evaluation.

# If you want to addition to be evaluated before multiplication in an expression, you would go about it like so: 

(2 + 3) * 3 
>>> 20 

# NOTE Associtivity

# Operators are usually associated from left to right
# When two operators have the same precedence, associativity helps determine the order of operation
    # Associativity is the order in which an expression is evalutated, the has multiple operators
    # Almost all operators have left to right associativity

#Left-right associativity
print(5*2//3)
 >>> 3 

#SHOWS left-right associativity
print(5*(2//3))
>>> 0

# NOTE (**) = to the power, example:
2 ** 5 = 5*5*5*5*5 
#Also starts with the largest number?

#Shows the right-left associativity of **
print(2**3**2)
#Output: 512, since 2**(3**2) = 2**9 

#if 2 needs to be exponated first, your bitch ass needs to use()
print((2 ** 3) ** 2) 
>>> 64 

#Please refer to the link for an operators table for an understanding of order or refer to 
    # to a BYTE OF PYTHON (Page: 53) 
https://docs.python.org/3.2/reference/lexical_analysis.html#operators

# Some operators like assignment operators have the right-left associativity i.e 
a = b = c 
# Is treated as
a = (b = c) 

# NOTE EXPRESSIONS

length = 5
breadth = 2

area = length * breadth

print 'area is', area 
print 'perimeter is', 2 * (length + breadth)

>>> area is 10
>>> perimeter is 14 

#ANCHOR The length and breadth of the rectangle are stored in variables by the same name
# Then they are used to calculate the area of the perimeter of the rectangle with the help of EXPRESSIONS
	# The result of the expression length * breadth in the VAR area then use it in the print function 
	# In the second, we directly use the value of the expression 	2 * (length + breadth) in the print statement

#Also notice how Python "pretty prints"
	# Even though we have not specified a space between 'area is' and the variable AREA, Python puts it in for us
	# We don't need to worry about spacing in the strings we use in output 

#ANCHOR CHAPTER 7
## CONTROL FLOW!!!

# Example: What if the user wanted to change the flow of how it works? 
	# and by IT I mean Python statements
	# What if you wanted your program to take some decisions and do different things depending on different situations, such as printing 
	# 'Good morning' or 'Good Evening' depending on the time or day 
# This is achieved using control flow statements. There are 3 control flow statements in Python:

	# - if 
	# for
	# while


# THE IF STATEMENT

	# The if statement is used to check the condition
	# (if) the condition is true, we run a block of statements (Called if-block)
	# (else) we process another block of statements (called the else-block) -- the else cause is optional

number = 28 # We have assigned 28 to number
guess = (input('Enter the integer:')) 
# Input converts to string 
# (if) prints out a string and waits for an input from the user
# We then convert this string intp an integer
# The nnumber that is entered in by the user is then compared
if guess == number: # if the integer is equal to the number then the block below will print out
	# New block starts here (stripping a line) and returns 
	# Notice the colon (:) at the end of the (if), we are indicating that a block statment follows 
    print('Congratulations, you guessed the correct number') # Enter in  28 
	# New block ends here
elif guess < number: # else if the guess is less than the number, then the block below will print out
	# Another block
    print('No, a little higher') # Enter in 22 
else:  # else is optional /// though if the guess is higher than the number then the block below will print out
    print('No, a little lower than that') # Enter in 34 
	# The elif and else statement must always have a colon at the end of the logical line followed by their corrosponding block statement 
		# (with poper indentation, of course)

print('done')

# Don't forget the indentation!	
	# Always be consistent with indentation
# After Python has fiinished executing the complete  (if statement) along with the associated (elif) and (else) clauses
	# It will then move on to the next statement in the block containing the (if) statement.
# Though in this case (the above example) the next statement is print('done'), after this Python sees the ends of the program and finished up

# The (while) statement  ANCHOR 
	# the (while) statement allows you to repeatedly execute a block statement as long as the condition is true
	# the (whilte) statement is an example of what is called a looping statement (for being another loop statement)
	# The (while) statement can have an optinonal (else) clauses
##EXAMPLE BELOW## 

number = 23 
running = True

while running:
    guess = int(input('Enter an integer: '))

    if guess == number:
        print 'Congrats bitch!'

# EXAMPLE 2  --- Guessing game
	# The advange of the (while) statement is that the user is allowed to keep guessing until they guess correctly
				# FUCK HAVING TO CONSTANT RUN  THE CODE AND I E F5 
	

number = 23
running = True 

while running: # Notice how the (input() and (if) statement rest inside the while loop), as well as set the running variable to (True) 				 		before the while loo
	# If the variable running is true(ON) then Python will proceed to to execute the corresponding while block
	# And the (while) block will continue looping as long as the running variable is true
    guess = int(input('Enter an integer : ')) 
    
    if guess == number:
        print('Congratulations, you guessed it.') 
        
        running = False # Once the correct (number) is guessed then the running variable will be switched to FALSE which will stop the loop
    elif guess < number: # the elif/else block will be executed when the (while) loop condition is (False)
        print('No, it is a little higher than that.')
    else:
        print('No, it is a little lower than that.')
else: 
    print('The WHILE loop is over')

print('Test will end in')
# You may consider TRUE and FALSE (booleans) -- you can consider them to be the equivelant to the value 1 and 0 respectively
# The while loop is always executed unless you break out the loop with a (break) statement

# The (for) loop 
	# The (for...in) statement is another loop statement which itereates over a sequence of objects.
		# i.e. go through each in a sequence (A sequence is an ordered collection of items)

# EXAMPLE

else:
    print('This loop is over in..')
for i in range (1, 5):
    print i
else:
    print('This (for) is over')

# In the above example we are printing out a sequence of numbers
	# This can be accomplishd by using the built-in (range) function 

# What we do here is supply two numbers and (range) returns a sequence of numbers starting from the first number up to the second number
	#range(1, 5) 
		# Gives a sequence [1,2,3,4,5]. By default, range takes	a step count of 1
		# Though say we wanted to up the count up to a 2 count seqeunce
			# in orde to do this we would need to add a 3rd number to the range for example
				# range(0, 12, 2): 
					# OUTPUT: 0, 2, 4, 6, 8, 10
					# Remeber that the range extends up to the second number i.e. it does not include the second number
					# Range() generates a sequence of numbers all at once, so this is safe for only small ranges 
				# If a long range but generated only one number at a time, use 
					xrange() 

# the (for) loop then iterates over the range of i in range(1, 5), is the equivalent to (for) i in [1,2,3,4,5]
	# Which is like assigning each number(or object) in the sequence to i

# (break) statement ANCHOR 
	# The (break) statement is used to BREAK out the loop statement i.e. stop the execution of a loop statement
		# Even if the loop condition has not become False or the sequence of items has not been completelty iterated over
			# NOTE if you (break) out of a (for) or (while) loop, any corrosponding loop (else) block is not exectuted

# EXAMPLE
while True: 
    sad = raw_input('Enter something:')
    if sad == 'quit':
        break
    print "Length of string is:",len(sad) 
print('Done')

# In the example above, we take the users input and print the length of it with len()
# We are providing a special condition to stop the program by checking if the user input is "quit".
	# We stop the program by breaking out of the loop and reach the end of the program

# The (continue) statement ANCHOR
	# the (continue) statement is used to tell Python to skip the resst of the statements in the current loop block

while True:  
    s = raw_input("Take your chances:")
    if s == 'quit':
        break
    elif len(s) < 3:
        print('Too small')
        continue
    else:
        print('Input is of suffecient length')


    # We accept input from the user, but we process the input string only if it is at least 3 characters long
    # As you can see a built-in len() function to get the legnth and if the length is less than 3

		    # We skip the statement rest of the statements in the block by using the (continue) statement
    # Otherwise the rest of the statements in the loop are executed, doing any kind of processing we want to fo here









	 








