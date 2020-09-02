class Person:
    pass

p = Person()
print(p)

#Bagaimana itu bekerja
"""Kami membuat kelas baru menggunakan pernyataan kelas dan nama kelas. 
Ini diikuti dengan blok pernyataan yang menjorok ke dalam yang membentuk badan kelas. 
Dalam kasus ini, kami memiliki blok kosong yang ditunjukkan dengan pernyataan pass.

Selanjutnya, kita membuat objek / turunan dari kelas ini menggunakan nama kelas yang 
diikuti dengan sepasang tanda kurung. (Kita akan mempelajari lebih lanjut tentang 
instantiation di bagian selanjutnya). Untuk verifikasi kami, kami mengkonfirmasi jenis 
variabel hanya dengan mencetaknya. Ini memberi tahu kita bahwa kita memiliki turunan dari 
kelas Person dalam modul __main__.

Perhatikan bahwa alamat memori komputer tempat objek Anda disimpan juga dicetak. 
Alamat akan memiliki nilai yang berbeda di komputer Anda karena Python dapat menyimpan objek 
di mana pun ia menemukan ruang."""