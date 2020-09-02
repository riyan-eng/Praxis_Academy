#fungsi biasa
def salam():
    print ('Assalamualaikum')
salam()

#fungsi parameter
def salam(ucapan):
    print (ucapan)
salam('Waalaikumsalam')

def jml(a, b):
    print (a + b)
jml(3, 3)
jml(1,2)

#fungsi return
def jml(a, b, c):
    total = a + b + c
    return total
print (jml(4,5,1))