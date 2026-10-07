// 1. Mengambil Elemen DOM
const formBarang = document.getElementById("form-barang");
const tabelKeranjang = document.getElementById("tabel-keranjang");
const inputUangBayar = document.getElementById("uang-bayar");
const btnReset = document.getElementById("btn-reset");

// 2. Inisialisasi Data Keranjang dari LocalStorage (jika ada)
let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

// Fungsi Helper Format Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(angka);
}

// 3. Fungsi Render Tabel Keranjang & Kalkulasi Total
function renderKeranjang() {
    tabelKeranjang.innerHTML = "";
    let totalBelanja = 0;

    // Tampilkan setiap item ke tabel
    keranjang.forEach((item, index) => {
        const subtotal = item.harga * item.qty;
        totalBelanja += subtotal;

        tabelKeranjang.innerHTML += `
            <tr class="border-b">
                <td class="p-2 border text-center">${index + 1}</td>
                <td class="p-2 border">${item.nama}</td>
                <td class="p-2 border">${formatRupiah(item.harga)}</td>
                <td class="p-2 border text-center">${item.qty}</td>
                <td class="p-2 border font-semibold">${formatRupiah(subtotal)}</td>
                <td class="p-2 border text-center">
                    <button onclick="hapusItem(${index})" class="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });

    // Kalkulasi Diskon 10% jika Total Belanja >= Rp 50.000
    let diskon = 0;
    if (totalBelanja >= 50000) {
        diskon = totalBelanja * 0.10;
    }
    const totalAkhir = totalBelanja - diskon;

    // Update Tampilan Ringkasan Pembayaran
    document.getElementById("total-belanja").innerText = formatRupiah(totalBelanja);
    document.getElementById("nominal-diskon").innerText = `- ${formatRupiah(diskon)}`;
    document.getElementById("total-akhir").innerText = formatRupiah(totalAkhir);

    // Simpan Data Keranjang Terbaru ke LocalStorage
    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    // Hitung ulang uang kembalian
    hitungKembalian(totalAkhir);
}

// 4. Handler Validasi Form & Tambah Barang
formBarang.addEventListener("submit", function(e) {
    e.preventDefault();

    const namaInput = document.getElementById("nama-barang");
    const hargaInput = document.getElementById("harga-barang");
    const qtyInput = document.getElementById("qty-barang");

    const nama = namaInput.value.trim();
    const harga = parseInt(hargaInput.value);
    const qty = parseInt(qtyInput.value);

    let isValid = true;

    // Validasi Nama Barang (minimal 3 karakter)
    if (nama.length < 3) {
        document.getElementById("error-nama").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("error-nama").classList.add("hidden");
    }

    // Validasi Harga Satuan (harus angka, minimal Rp 500)
    if (isNaN(harga) || harga < 500) {
        document.getElementById("error-harga").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("error-harga").classList.add("hidden");
    }

    // Validasi Qty (harus angka bulat minimal 1)
    if (isNaN(qty) || qty < 1) {
        document.getElementById("error-qty").classList.remove("hidden");
        isValid = false;
    } else {
        document.getElementById("error-qty").classList.add("hidden");
    }

    // Jika seluruh input valid, masukkan barang ke keranjang
    if (isValid) {
        keranjang.push({ nama, harga, qty });
        formBarang.reset();
        renderKeranjang();
    }
});

// 5. Fungsi Hapus Item dari Keranjang
window.hapusItem = function(index) {
    keranjang.splice(index, 1);
    renderKeranjang();
};

// 6. Fungsi Perhitungan Uang Kembalian
function hitungKembalian(totalAkhir) {
    const uangBayar = parseInt(inputUangBayar.value) || 0;
    const pesanUang = document.getElementById("pesan-uang");
    const teksKembali = document.getElementById("uang-kembali");

    if (inputUangBayar.value.trim() === "" || uangBayar === 0) {
        teksKembali.innerText = "Rp 0";
        teksKembali.classList.remove("text-red-500");
        pesanUang.classList.add("hidden");
        return;
    }

    if (uangBayar < totalAkhir) {
        pesanUang.innerText = `Uang belum mencukupi! Kurang ${formatRupiah(totalAkhir - uangBayar)}`;
        pesanUang.classList.remove("hidden");
        teksKembali.innerText = "Uang Kurang";
        teksKembali.classList.add("text-red-500");
    } else {
        pesanUang.classList.add("hidden");
        teksKembali.innerText = formatRupiah(uangBayar - totalAkhir);
        teksKembali.classList.remove("text-red-500");
    }
}

// Event Listener saat user mengetikkan nominal uang bayar
inputUangBayar.addEventListener("input", function() {
    let totalBelanja = keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0);
    let diskon = totalBelanja >= 50000 ? totalBelanja * 0.10 : 0;
    hitungKembalian(totalBelanja - diskon);
});

// 7. Tombol Reset / Transaksi Baru
btnReset.addEventListener("click", function() {
    if (confirm("Apakah Anda yakin ingin memulai transaksi baru? Seluruh daftar belanja akan dikosongkan.")) {
        keranjang = [];
        inputUangBayar.value = "";
        localStorage.removeItem("keranjang");
        renderKeranjang();
    }
});

// Render awal saat halaman pertama kali dibuka
renderKeranjang();

