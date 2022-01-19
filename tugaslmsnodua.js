let barang = [
    {nama: "beras", harga: 10000, jumlah : 5},
    {nama: "gula", harga: 14000, jumlah : 5},
    {nama: "telur", harga: 20000, jumlah : 2},
    {nama: "minyak goreng", harga: 9000, jumlah : 10}
] 

let total = 0

for (let i = 0; i < barang.length; i++) {
    total += barang[i].harga * barang[i].jumlah
}

console.log("Total belanja adalah " + total );