greeting = ("Hey fucker!") 

print(greeting) #this will proceed to print HEY FUCKER!



#NOTES START

REVIEW #umbers are mainly two types, integers (integer is a whole number that is not afraction) and floats REVIEW
	   ##AN example to an integer is 2 which is a whole number
	   ###an example of a floating point number (or FLOAT for short) are 3.23 and 52.3E-4
	   	* The E notation indicates POWERS of 10. in this case 52.3E-4 means 52.3 * 10^-4^ = .00523 * 10 
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



