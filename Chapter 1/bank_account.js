// Deklarasikan variabel saldo dengan nilai awal
let saldo = 0;

// Fungsi untuk menampilkan saldo ke dalam elemen dengan id "saldoDisplay"
function tampilkanSaldo() {
    const saldoDisplay = document.getElementById("saldoDisplay");
    saldoDisplay.textContent = saldo.toFixed(2); // Menampilkan saldo dengan dua angka desimal
}

// Fungsi untuk menambahkan saldo dengan menggunakan window.prompt()
function tambahSaldo() {
    const jumlahTambah = parseFloat(prompt("Masukkan jumlah saldo yang akan ditambahkan:"));
    if (!isNaN(jumlahTambah) && jumlahTambah > 0) {
        saldo += jumlahTambah;
        tampilkanSaldo();
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}

// Fungsi untuk mengurangi saldo dengan menggunakan window.prompt()
function kurangiSaldo() {
    const jumlahKurang = parseFloat(prompt("Masukkan jumlah saldo yang akan dikurangkan:"));
    if (!isNaN(jumlahKurang) && jumlahKurang > 0 && jumlahKurang <= saldo) {
        saldo -= jumlahKurang;
        tampilkanSaldo();
    } else {
        alert("Masukkan jumlah yang valid.");
    }
}

// Panggil fungsi tampilkanSaldo() saat halaman dimuat
tampilkanSaldo();
