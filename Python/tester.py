winner = 28
guess = int(raw_input('Enter an integer : '))

if guess == winner: 
    print "Congratulations! You guessed it!."
    print "(but you don't get any prizes.....HA HA"
elif guess < winner:
    print "Nope! It is a little higher than that."
else:
    print "No, it is a little lower than that."

print "Done"
