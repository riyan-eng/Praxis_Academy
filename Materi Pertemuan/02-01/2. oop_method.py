class Person:
    def say_hi(self):
        print('Hello, how are you?')
        
p = Person()
p.say_hi()

#Bagaimana itu bekerja
"""Di sini kita melihat self di action. Perhatikan bahwa metode say_hi tidak mengambil 
parameter tetapi masih memiliki self dalam definisi fungsinya."""