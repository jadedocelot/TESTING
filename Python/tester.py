def myFunc(n):
     return lambda a: a * n

bangBang = myFunc(2)

print(bangBang(11)) 
