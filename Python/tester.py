number = 28 
guess = (input('Enter the integer:'))

if guess == number:
    print('Congratulations, you guessed the correct number')
elif guess < number:
    print('No, a little higher')
else: 
    print('No, a little lower than that')

print('done')
