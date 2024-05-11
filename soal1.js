// Mengimpor fungsi-fungsi dari file persegi.js dan persegi_panjang.js
const persegi = require('./persegi.js');
const persegiPanjang = require('./persegipanjang.js');

// Ekspor fungsi-fungsi agar dapat digunakan di file lain
module.exports = { 
  luasPersegi: persegi.luasPersegi,
  kelilingPersegi: persegi.kelilingPersegi,
  luasPersegiPanjang: persegiPanjang.luasPersegiPanjang,
  kelilingPersegiPanjang: persegiPanjang.kelilingPersegiPanjang
};

const { luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang } = require('./soal1');

// Contoh penggunaan fungsi-fungsi dari modul soal1.js
const sisiPersegi = 5;
console.log(`Luas persegi dengan sisi ${sisiPersegi} adalah ${luasPersegi(sisiPersegi)}`);
console.log(`Keliling persegi dengan sisi ${sisiPersegi} adalah ${kelilingPersegi(sisiPersegi)}`);

const panjangPersegiPanjang = 4;
const lebarPersegiPanjang = 6;
console.log(`Luas persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling persegi panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);

