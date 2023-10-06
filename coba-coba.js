let saldo = 0;

function tampilkanSaldo() {
    const saldoDisplay = document.getElementById("saldoDisplay");
    saldoDisplay.textContent = saldo.toFixed(2); // Menampilkan saldo dengan dua angka desimal
}

function tambahSaldo() {
    const jumlahTambah = parseFloat(prompt("Enter the amount to deposit:"));
    if (!isNaN(jumlahTambah) && jumlahTambah > 0) {
        saldo += jumlahTambah;
        tampilkanSaldo();
    } else {
        alert("Please enter a valid positive amount.");
    }
}

function kurangiSaldo() {
    const jumlahKurang = parseFloat(prompt("Enter the amount to withdraw:"));
    if (!isNaN(jumlahKurang) && jumlahKurang > 0 && jumlahKurang <= saldo) {
        saldo -= jumlahKurang;
        tampilkanSaldo();
    } else {
        alert("Please enter a valid amount within your balance.");
    }
}

tampilkanSaldo();
