"if"

a = 1
b = 2

if a < b:
    print('a kurang dari b')

"elif"

a = 1
b = 1

if a < b:
    print('a kurang dari b')
elif a == b:
    print('a sama dengan b')

# Kata kunci elif adalah python yang mengatakan "jika kondisi sebelumnya tidak benar, maka coba kondisi ini".

"else"

a = 1
b = 2

if a > b:
    print('a lebih dari b')
elif a == b:
    print('a sama dengan b')
else:
    print('a kurang dari b')

# Kata kunci else menangkap apa pun yang tidak tertangkap oleh kondisi sebelumnya.