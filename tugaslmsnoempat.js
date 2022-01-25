let hasil = 0
let r = 3
let a = 4

for (let i = 1; i < 11; i++) {
    suku = a*(r**(i-1))
    hasil = suku + hasil
}

console.log(`Jumlah deret geometri adalah ${hasil}`);