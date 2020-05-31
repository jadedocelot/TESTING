while True:  
    s = raw_input("Take your chances:")
    if s == 'quit':
        break
    elif len(s) < 3:
        print('Too small')
        continue
    print('Input is of suffecient length')
