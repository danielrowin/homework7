// Fungsi untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // Fungsi untuk menghitung keliling persegi panjang
  function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // Ekspor fungsi-fungsi agar dapat digunakan di file lain
  module.exports = { luasPersegiPanjang, kelilingPersegiPanjang };
  