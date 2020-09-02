class SchoolMember:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print('(Initialized SchoolMember: {})'.format(self.name))

    def tell(self):
        print('Name:"{}" Age:"{}"'.format(self.name, self.age), end=" ")

class Teacher(SchoolMember):
    def __init__(self, name, age, salary):
        SchoolMember.__init__(self, name, age)
        self.salary = salary
        print('(Initialized Teacher: {})'.format(self.name))

    def tell(self):
        SchoolMember.tell(self)
        print('Salary: "{:d}"'.format(self.salary))

class Student(SchoolMember):
    def __init__(self, name, age, marks):
        SchoolMember.__init__(self, name, age)
        self.marks = marks
        print('(Initialized Student: {})'.format(self.name))

    def tell(self):
        SchoolMember.tell(self)
        print('Marks: "{:d}"'.format(self.marks))

t = Teacher('Mrs. Shrividya', 40, 30000)
s = Student('Swaroop', 25, 75)

print()
members = [t, s]
for member in members:
    member.tell()

#Bagaimana itu bekerja
"""Untuk menggunakan warisan, kami menetapkan nama kelas dasar dalam tupel mengikuti 
nama kelas dalam definisi kelas (misalnya, Guru kelas (Anggota Sekolah)). Selanjutnya, 
kita mengamati bahwa metode __init__ dari kelas dasar secara eksplisit dipanggil menggunakan 
variabel mandiri sehingga kita dapat menginisialisasi bagian kelas dasar dari sebuah instance 
di subkelas tersebut. Ini sangat penting untuk diingat- Karena kita mendefinisikan 
metode __init__ dalam subkelas Guru dan Siswa, Python tidak secara otomatis memanggil 
konstruktor kelas dasar SchoolMember, Anda harus secara eksplisit memanggilnya sendiri.

Sebaliknya, jika kita belum mendefinisikan metode __init__ dalam subkelas, Python akan 
memanggil konstruktor kelas dasar secara otomatis.

Meskipun kami dapat memperlakukan instance Teacher atau Student seperti yang kami lakukan 
sebagai instance SchoolMember dan mengakses metode tell SchoolMember hanya dengan mengetik 
Teacher.tell atau Student.tell, kami malah mendefinisikan metode tell lain di setiap 
subclass (menggunakan metode tell SchoolMember untuk bagiannya) untuk menyesuaikannya dengan 
subkelas tersebut. Karena kita telah melakukan ini, ketika kita menulis Teacher.tell 
Python menggunakan metode tell untuk subclass itu vs superclass. Namun, jika kita tidak 
memiliki metode tell di subclass, Python akan menggunakan metode tell di superclass. 
Python selalu mulai mencari metode dalam jenis subkelas yang sebenarnya terlebih dahulu, 
dan jika tidak menemukan apa pun, ia mulai melihat metode di kelas dasar subkelas, 
satu per satu sesuai urutan yang ditentukan dalam tupel (di sini kita hanya memiliki 1 kelas 
dasar, tetapi Anda dapat memiliki beberapa kelas dasar) dalam definisi kelas.

Catatan tentang terminologi - jika lebih dari satu kelas terdaftar dalam tupel warisan, 
maka itu disebut warisan berganda.

Parameter akhir digunakan dalam fungsi print dalam metode tell () superclass untuk mencetak 
sebuah baris dan memungkinkan pencetakan berikutnya untuk melanjutkan pada baris yang sama. 
Ini adalah trik untuk membuat cetakan tidak mencetak simbol \n (baris baru) di akhir 
pencetakan."""