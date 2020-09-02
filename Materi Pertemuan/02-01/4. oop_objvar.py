class Robot:
    population = 0

    def __init__(self, name):
        self.name = name
        print("(Initializing {})".format(self.name))
        Robot.population += 1

    def die(self):
        print("{} is being destroyed!".format(self.name))
        Robot.population -= 1
        if Robot.population == 0:
            print("{} was the last one.".format(self.name))
        else:
            print("There are still {:d} robots working.".format(Robot.population))

    def say_hi(self):
        print("Greetings, my masters call me {}.".format(self.name))

    @classmethod
    def how_many(cls):
        print("We have {:d} robots.".format(cls.population))

droid1 = Robot("R2-D2")
droid1.say_hi()
Robot.how_many()

droid2 = Robot("C-3PO")
droid2.say_hi()
Robot.how_many()

print("\nRobots can do some work here.\n")

print("Robots have finished their work. So let's destroy them.")

droid1.die()
droid2.die()
Robot.how_many()

#Bagaimana itu bekerja
"""Ini adalah contoh panjang tetapi membantu mendemonstrasikan sifat variabel kelas dan objek. 
Di sini, populasi termasuk dalam kelas Robot dan karenanya merupakan variabel kelas. 
Variabel nama milik objek (itu ditugaskan menggunakan diri) dan karenanya merupakan 
variabel objek.

Jadi, kami merujuk ke variabel kelas populasi sebagai Robot.population dan bukan sebagai 
self.population. Kami merujuk ke nama variabel objek menggunakan notasi self.name dalam 
metode objek itu. Ingat perbedaan sederhana antara variabel kelas dan objek. Perhatikan 
juga bahwa variabel objek dengan nama yang sama dengan variabel kelas akan menyembunyikan 
variabel kelas!

Selain Robot.population, kita juga bisa menggunakan self .__ class __. Populasi karena setiap 
objek merujuk ke kelasnya melalui atribut self .__ class__.

How_many sebenarnya adalah metode yang dimiliki kelas dan bukan milik objek. Ini berarti 
kita dapat mendefinisikannya sebagai metode kelas atau metode statis bergantung pada apakah 
kita perlu mengetahui kelas mana kita menjadi bagiannya. Karena kita mengacu pada variabel 
kelas, mari gunakan metode kelas.

Kami telah menandai metode how_many sebagai metode kelas menggunakan dekorator.

Dekorator dapat dibayangkan sebagai jalan pintas untuk memanggil fungsi pembungkus (yaitu 
fungsi yang "membungkus" fungsi lain sehingga dapat melakukan sesuatu sebelum atau sesudah 
fungsi bagian dalam), jadi menerapkan dekorator @classmethod sama dengan memanggil:

how_many = classmethod (how_many)

Perhatikan bahwa metode __init__ digunakan untuk menginisialisasi instance Robot dengan sebuah 
nama. Dalam metode ini, kami meningkatkan jumlah populasi sebanyak 1 karena kami memiliki 
satu robot lagi yang ditambahkan. Juga amati bahwa nilai self.name spesifik untuk setiap objek 
yang menunjukkan sifat variabel objek.

Ingat, Anda harus merujuk ke variabel dan metode dari objek yang sama hanya menggunakan self 
saja. Ini disebut referensi atribut.

Dalam program ini, kami juga melihat penggunaan docstrings untuk kelas serta metode. 
Kita dapat mengakses kelas docstring saat runtime menggunakan Robot .__ doc__ dan 
metode docstring sebagai Robot.say_hi .__ doc__

Dalam metode die, kita cukup mengurangi jumlah Robot.population sebanyak 1.

Semua anggota kelas bersifat publik. Satu pengecualian: Jika Anda menggunakan anggota data 
dengan nama menggunakan awalan garis bawah ganda seperti __privatevar, Python menggunakan 
name-mangling untuk menjadikannya variabel pribadi secara efektif.

Jadi, konvensi yang diikuti adalah bahwa variabel apa pun yang akan digunakan hanya di dalam 
kelas atau objek harus dimulai dengan garis bawah dan semua nama lain bersifat publik dan 
dapat digunakan oleh kelas / objek lain. Ingatlah bahwa ini hanya konvensi dan tidak 
diberlakukan oleh Python (kecuali untuk awalan garis bawah ganda)."""
