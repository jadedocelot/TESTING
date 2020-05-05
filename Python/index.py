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

