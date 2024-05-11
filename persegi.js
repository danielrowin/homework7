// Fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function kelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Ekspor fungsi-fungsi agar dapat digunakan di file lain
  module.exports = { luasPersegi, kelilingPersegi };
  