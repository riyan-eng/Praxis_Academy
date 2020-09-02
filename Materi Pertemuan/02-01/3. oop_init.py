class Person:
    def __init__(self, name):
        self.name = name

    def say_hi(self):
        print("Hello, my name is", self.name)

p = Person("Swaroop")
p.say_hi()

#Bagaimana itu bekerja
"""Di sini, kami mendefinisikan metode __init__ sebagai mengambil nama parameter 
(bersama dengan self yang biasa). Di sini, kami baru saja membuat bidang baru yang disebut 
juga nama. Perhatikan ini adalah dua variabel yang berbeda meskipun keduanya disebut 'nama'. 
Tidak ada masalah karena notasi titik-titik self.name berarti ada sesuatu yang disebut "nama" 
yang merupakan bagian dari objek yang disebut "self" dan nama lainnya adalah variabel lokal. 
Karena kami secara eksplisit menunjukkan nama mana yang kami maksud, tidak ada kebingungan."""