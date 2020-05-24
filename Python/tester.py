
winner = 28
guess = int(input("Enter an integer :"))

while guess == winner: 
    print "Congratulations! You guessed it!."
    print "(but you don't get any prizes.....HA HA)"
if guess < winner:
    print "Nope! It is a little higher than that."
else:
    print "No, it is a little lower than that."

print "Done"
