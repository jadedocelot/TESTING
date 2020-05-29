number = 23 
running = True

while running:
    guess = int(input('Enter an integer: '))
if guess == number:
    print 'Congrats bitch!'
 
elif guess < number: 
    print('No, a little higher than that.')
else: 
    print('No, a little lower than that.')
else:
    print('The while loop is over.')

print('Done')
