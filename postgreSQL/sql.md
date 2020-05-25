#What is a database
  * working with PosgreSQL through the terminal will be the main focus
  - it is a place to
    * Store
    * Maniputlate
    * Retrieve data 
  
- This data  is often stored in a computer server, once data is stored in said server you can do
   the above
- Facebook is a prime example of a company that uses a database to store data 
  * Our names
  * Friends
  * Comments
  * LIKES 

- Ebay is another company that strives off a database, when looking at a product the following are picked up from a database       
  * the price 
  * views 
  * Description 
  * Comments
 
- Postgres is the actual database 
- SQL: Structured Query Language
   * SQL is a programming language 
      * that allows the user to access a database
   * manage data held in a relational database
(ALSO SQL IS EASY TO LEARN, THANK GAWD)
- it is also very powerful and was established in 1974
- it is widely used all over the internet

#How is data stored?

- Data  is stored in tables 
   - tables are formed by two things
      * columns 
      * Rows 
                ( EXAMPLE  OF A TABLE BELOW ) 
##          TABLE - PERSON 
##  COLUMNS -->  Id |  first_name | last_name | gender | age | car_id 
    ROWS    -->  1  |   Edgar     |   Ortega  | Male   | 28  |  75           * rows consist of the actual data
                 2  |   Monica    |   Ortega  | Female | 33  |  23
                 3  |   Noah      | Rodriguez | Male   | 13  | 
##                  /\/\/\/\COLUMNS                

- A RELATIONAL DATABASE is a relation between 1 or more tables
     * for example looking at the "car_id" column, notice how Edgar and Monica have a car and Noah doesnt. 
       the info within that car_id is linked to a CAR TABLE which is a seperate data table
        * Again, this is a relational database (Look into FLASK)

# What is postgreSQL
  - Advanced open source relational database
  - Another example of a database system that isnt open source (NOT FREE) is Oracle, MySQL, SQLserver 
   - PostgreSQL is an object relational databasse management system
# GUI Clients vs terminal/CMD Clients

- Remember that the server is running on the computer postregeSQL is installed in 
  **Basically your computer is acting as a database server ((REMBER THAT ANYONE CAN CONNECT TO IT))
 
#Methods to accessing your database 
   - In order to connext  to data base is with a GUI client
      * this is an application that eases the way that you connect to the database
  
   - The second way to access your database  is throught the terminal/CMD line 
    <COMMAND LINE WILL BE THE WAY WE LEARN TO DO THIS> 

# Some GUI clients that can be used 
1. Data Grip
2. Postico

# Accessing a PorstgreSQL database in ITERM

  - A number of commands start with (\) 
  - Some command examples: 
   1. \?: will present you with a list of commands that can be used within your database
      * q: to quit HELP index     
   2. \ connect {database name}: will take you to requested database
   3. \list: will print out a list of your databases 
   4. create database {database name}; : will create a new database

# NOTE (COMMANDS)
  1. \l : presents a list of your current databases
  2. \connect {database name}; : Connects to database

## REFER to PSQL --h in command line for assistance

### A very dangerous command
 !! DROP DATABASE {database name}; : THIS DELETES THE DATABASE (IN MILI SECONDS) 


# Creating Tables

#Refer to the link below for data types
https://www.postgresql.org/docs/9.5/datatype.html

#EXAMPLE:
   CREATE TABLE {table name} (
        column name + data type + constraints if any

    )

(USE UNDERSCORE instead of DASH)

  CREATE TABLE person (
   id int,
   first-name: varchar(50),
   last-name: varchar(50),
   gender: varchar(6),
   date-of-birth: TIMESTAMP,

  )

# Understanding The Table
(within post in ITERM) 

tester=# CREATE TABLE person (
  - TABLE has been created

tester(# id int

testr( # first-name VARCHAR(50),

tester( #last-name VARCHAR(50),

tester(# gender VARCHAR(6),

tester(# date-of-birth DATE);
  - PARANTHESES TO CLOSE 
  - WONT EXECUTE WITHOUT THE SEMICOLON
  - HIT ENTER

TABLE CREATED  {TABLE NAME: persomn}

tester=#

# \d : to list tables
        List of relations
 Schema |  Name  | Type  | Owner
--------+--------+-------+-------
 public | person | table | ort
(1 row)


##  AND to take it another step further, enter in the following to see the table content
tester=# \d {table name} 

(REMINDER: slash (-) in place of underscor

    Column     |         Type          | Collation | Nullable | Default
---------------+-----------------------+-----------+----------+---------
 id            | integer               |           |          |
 first-name    | character varying(50) |           |          |
 last-name     | character varying(50) |           |          |
 gender        | character varying(6)  |           |          |
 date-of-birth | date                  |           |          |

# Creating a table with CONSTRAINTS
 - NULL: Indicates that a data value does not exist in the database
    https://en.wikipedia.org/wiki/Null_(SQL)


CREATE TABLE person ( 
id BIGSERIAL NOT NULL PRIMARY KEY
  - BIGSERIAL means that it is a signed integer, which auto increments
  - This is SQL SYNTAX

first-name VARCHAR(50)NOT NULL,
last-name VARCHAR(50)NOT NULL,
gender VARCHAR(6)NOT NULL,
date-of-birth DATE NOT NULL,
)

#DROP TABLE 
  DROP TABLE person;


tester=# CREATE TABLE person (
tester(# id BIGSERIAL NOT NULL PRIMARY KEY,
tester(# first-name VARCHAR(50) NOT NULL,
tester(# last-name VARCHAR(50) NOT NULL,
tester(# gender VARCHAR(7) NOT NULL,
tester(# date-birth DATE NOT NULL,
tester(# email VARCHAR(150) );
CREATE TABLE
tester=#

# Now view table: 

tester=#
tester=# \d
             List of relations
 Schema |     Name      |   Type   | Owner
--------+---------------+----------+-------
 public | person        | table    | ort
 public | person-id-seq | sequence | ort
(2 rows)

tester=#

 - The (person-id-seq) is in regards to the (BIGSERIAL) that was added to the id
  - BIGSERIAL is an auto incremnet number - SO WE DONT HAVE TO REMEBER THE PREVIUOUS number

                                       Table "public.person"
    Column     |          Type          | Collation | Nullable |              Default
---------------+------------------------+-----------+----------+------------------------------------
 id            | bigint                 |           | not null | nextval('person_id_seq'::regclass)
 first-name    | character varying(50)  |           | not null |
 last-name     | character varying(50)  |           | not null |
 gender        | character varying(7)   |           | not null |
 date-of-birth | date                   |           | not null |
 email         | character varying(150) |           |          |
Indexes:
    "person_pkey" PRIMARY KEY, btree (id)


  - EMAIL is NULL (DOES not require a value


# insert into
  - Inserting records into tables

So far we have the follow ing

tester(DATABASE) ---- > person(TABLE)

# Inserting records into (person) table

tester=# INSERT INTO person (first-name, last-name, gender, date-of-birth)
tester-# VALUES ('Edgar', 'Ortega', 'MALE' , DATE '1991-08-28');
INSERT 0 1
  - This indicates that the records was successfully inserted into the (person) table

## Lets add another record, this time with an EMAIL 

tester=# INSERT INTO person (first-name, last-name, gender, date-of-birth, email)
tester-# VALUES ('Joe', 'Garage', 'MALE' , DATE '1978-08-28', 'Joe@gmail.com,);
INSERT 0 1

tester=# 

# Now that you have added some records to your (person) table, lets check them out

tester=# SELECT * FROM person;

id | first_name | last_name | gender | date_of_birth |        email
----+------------+-----------+--------+---------------+----------------------
  1 | Edgar      | Ortega    | MALE   | 1991-08-28    | gobbl@earthlink.com
  2 | Joe        | Garage    | MALE   | 1984-04-13    | joesgarage@gmail.com
(2 rows)














