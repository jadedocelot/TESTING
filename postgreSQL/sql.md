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
   4. create database {database name}: will create a new database






















 
