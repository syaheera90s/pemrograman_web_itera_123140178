// Mendeklarasikan variabel dengan var, let, dan const
var nama = "Budi";
let usia = 20;
const TAHUN_LAHIR = 2004;

// Menampilkan output ke konsol
console.log("Nama: " + nama);
console.log("Usia: " + usia);
console.log("Tahun Lahir: " + TAHUN_LAHIR);

// Menampilkan output ke halaman HTML
document.getElementById("result").innerHTML = `
  <p>Nama: <strong>${nama}</strong></p>
  <p>Usia: <strong>${usia}</strong></p>
  <p>Tahun Lahir: <strong>${TAHUN_LAHIR}</strong></p>
`;

// Struktur kondisional
let nilai = 85;
let grade = "";

// If-else if-else
if (nilai >= 90) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Nilai: " + nilai + ", Grade: " + grade);

document.getElementById("result").innerHTML += `
  <hr>
  <p>Nilai: <strong>${nilai}</strong></p>
  <p>Grade: <strong>${grade}</strong></p>
`;

// Ternary operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += `
  <p>Status: <strong>${status}</strong></p>
`;

// Switch case
let hari = new Date().getDay();
let namaHari = "";

switch (hari) {
  case 0:
    namaHari = "Minggu";
    break;
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log("Hari ini adalah: " + namaHari);

document.getElementById("result").innerHTML += `
  <p>Hari ini adalah: <strong>${namaHari}</strong></p>
`;

//Latihan 1
document.getElementById("result").innerHTML += `<hr><p>--- LATIHAN 1 ---</p>`;

// Soal 1
const namaSaya = "Najwa Syahirah Rosyan";
let umurSaya = 22;
let kotaAsal = "Bandar Lampung";

document.getElementById("result").innerHTML += `
  <p>1. Data Diri</p>
  <p>Nama: <strong>${namaSaya}</strong></p>
  <p>Umur: <strong>${umurSaya} tahun</strong></p>
  <p>Kota Asal: <strong>${kotaAsal}</strong></p>
  <br>
`;

// Soal 2
let nilaiUjian = 88; 
let statusLulus = "";

if (nilaiUjian >= 70) {
    statusLulus = "Lulus";
} else {
    statusLulus = "Tidak Lulus";
}

document.getElementById("result").innerHTML += `
  <p>2. Pengecekan Kelulusan (Syarat >= 70)</p>
  <p>Nilai Ujian Anda: <strong>${nilaiUjian}</strong></p>
  <p>Status: <strong>${statusLulus}</strong></p>
  <br>
`;

// Soal 3
let kategoriUmur = "";
if (umurSaya < 12) {
    kategoriUmur = "Anak-anak";
} else if (umurSaya >= 12 && umurSaya <= 17) {
    kategoriUmur = "Remaja";
} else if (umurSaya >= 18 && umurSaya <= 59) {
    kategoriUmur = "Dewasa";
} else {
    kategoriUmur = "Lansia";
}

document.getElementById("result").innerHTML += `
  <p>3. Kategori Umur</p>
  <p>Umur Anda: <strong>${umurSaya} tahun</strong></p>
  <p>Kategori: <strong>${kategoriUmur}</strong></p>
  <br>
`;

// Soal 4
let angkaHari = 5; 
let namaHariInggris = "";

switch (angkaHari) {
    case 1: namaHariInggris = "Monday"; break;
    case 2: namaHariInggris = "Tuesday"; break;
    case 3: namaHariInggris = "Wednesday"; break;
    case 4: namaHariInggris = "Thursday"; break;
    case 5: namaHariInggris = "Friday"; break;
    case 6: namaHariInggris = "Saturday"; break;
    case 7: namaHariInggris = "Sunday"; break;
    default: namaHariInggris = "Invalid Day";
}

document.getElementById("result").innerHTML += `
  <p>4. Konversi Angka ke Hari (Inggris)</p>
  <p>Angka input: <strong>${angkaHari}</strong></p>
  <p>Nama Hari: <strong>${namaHariInggris}</strong></p>
  <br>
`;

// Soal 5
let nilaiTernary = 82;
let gradeTernary = nilaiTernary >= 90 ? "A" :
                   nilaiTernary >= 80 ? "B" :
                   nilaiTernary >= 70 ? "C" : 
                   nilaiTernary >= 60 ? "D" : "E";

document.getElementById("result").innerHTML += `
  <p>5. Kalkulator Grade (Ternary Operator)</p>
  <p>Nilai Anda: <strong>${nilaiTernary}</strong></p>
  <p>Grade: <strong>${gradeTernary}</strong></p>
  <br>
`;

document.getElementById("result").innerHTML += `<hr><p>Loop & Fungsi</p>`;

// 1. For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;
let listSiswa = ""; // Variabel pembantu untuk menampung list HTML

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
  listSiswa += `<li>Siswa ${i + 1}: ${nilaiSiswa[i]}</li>`;
}

let rataRata = total / nilaiSiswa.length;

document.getElementById("result").innerHTML += `
  <p><strong>Nilai Siswa:</strong></p>
  <ul>${listSiswa}</ul>
  <p>Rata-rata: <strong>${rataRata}</strong></p>
  <br>
`;

// 2. While loop
let counter = 1;
let faktorial = 1;
let angka = 5;

while (counter <= angka) {
  faktorial *= counter;
  counter++;
}

document.getElementById("result").innerHTML += `
  <p>Faktorial dari ${angka} adalah: <strong>${faktorial}</strong></p>
  <br>
`;

// 3. Fungsi biasa dan Arrow Function
function sapa(nama, waktu) {
  return `Selamat ${waktu}, ${nama}!`;
}

const hitungLuasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar;
};

let pesanSapaan = sapa("Najwa", "Pagi"); // Namanya aku sesuaikan ya!
let luas = hitungLuasPersegiPanjang(10, 5);

document.getElementById("result").innerHTML += `
  <p>Pesan: <strong>${pesanSapaan}</strong></p>
  <p>Luas Persegi Panjang (10x5): <strong>${luas}</strong></p>
  <br>
`;

//Latihan 2
let outputLatihan2 = `<hr><p>--- LATIHAN 2 ---</p>`;

// Soal 1
let angkaPilihan = 7; 
let tabelPerkalian = "";
for (let i = 1; i <= 10; i++) {
    tabelPerkalian += `${angkaPilihan} x ${i} = ${angkaPilihan * i}<br>`;
}
outputLatihan2 += `
  <p>1. Tabel Perkalian (${angkaPilihan})</p>
  <p>${tabelPerkalian}</p>
  <br>
`;

// Soal 2
function hitungFaktorial(n) {
    if (n === 0 || n === 1) return 1;
    let hasil = 1;
    for (let i = n; i >= 1; i--) {
        hasil *= i;
    }
    return hasil;
}
let nFaktorial = 5;
outputLatihan2 += `
  <p>2. Menghitung Faktorial</p>
  <p>Faktorial dari ${nFaktorial} adalah: <strong>${hitungFaktorial(nFaktorial)}</strong></p>
  <br>
`;

// Soal 3
function cekPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let cekAngka = 17;
outputLatihan2 += `
  <p>3. Cek Bilangan Prima</p>
  <p>Angka ${cekAngka}: <strong>${cekPrima(cekAngka) ? "Adalah Bilangan Prima" : "Bukan Bilangan Prima"}</strong></p>
  <br>
`;

// Soal 4
outputLatihan2 += `
  <p>4. Kalkulator BMI (Menggunakan Event Handler)</p>
  <p>Berat (kg): <input type="number" id="inputBerat" value="65" style="border: 1px solid #ccc; padding: 2px; width: 60px;"></p>
  <p>Tinggi (cm): <input type="number" id="inputTinggi" value="170" style="border: 1px solid #ccc; padding: 2px; width: 60px;"></p>
  <button id="btnHitungBMI" style="background: #ddd; padding: 4px 8px; margin: 4px 0; cursor: pointer;">Hitung BMI</button>
  <p id="hasilBMI" style="color: blue; font-weight: bold;"></p>
  <br>
`;

// Soal 5
let fizzBuzzOutput = "";
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzOutput += "FizzBuzz";
    } else if (i % 3 === 0) {
        fizzBuzzOutput += "Fizz";
    } else if (i % 5 === 0) {
        fizzBuzzOutput += "Buzz";
    } else {
        fizzBuzzOutput += i;
    }
    // Tambah koma sebagai pemisah jika belum mencapai 100
    if (i < 100) fizzBuzzOutput += ", ";
}
outputLatihan2 += `
  <p>5. Program FizzBuzz (1-100)</p>
  <p style="max-height: 100px; overflow-y: auto; border: 1px solid #ccc; padding: 5px; font-size: 14px;">${fizzBuzzOutput}</p>
  <br>
`;

// Mencetak seluruh soal Latihan 2 ke layar HTML
document.getElementById("result").innerHTML += outputLatihan2;

// Menambahkan Event Handler untuk Soal 4 (Harus dilakukan SETELAH elemen HTML dicetak)
document.getElementById("btnHitungBMI").addEventListener("click", function() {
    let berat = parseFloat(document.getElementById("inputBerat").value);
    let tinggiCm = parseFloat(document.getElementById("inputTinggi").value);
    
    // Konversi tinggi ke meter
    let tinggiM = tinggiCm / 100;
    
    // Rumus BMI
    let bmi = berat / (tinggiM * tinggiM);
    let kategori = "";
    
    if (bmi < 18.5) kategori = "Kekurangan berat badan";
    else if (bmi < 24.9) kategori = "Normal (Ideal)";
    else if (bmi < 29.9) kategori = "Kelebihan berat badan";
    else kategori = "Obesitas";

    // Menampilkan hasil setelah tombol diklik
    document.getElementById("hasilBMI").innerHTML = `Nilai BMI: ${bmi.toFixed(1)} - ${kategori}`;
});

// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

document.getElementById("result").innerHTML += `
  <hr>
  <h3 id="manipulasi-array">Manipulasi Array:</h3>
  <div id="array-demo"></div>
`;

// Menampilkan array
document.getElementById("array-demo").innerHTML += `
  <p><strong>Array buah:</strong> ${buah.join(", ")}</p>
`;

// Menambahkan item
buah.push("Durian");
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah push Durian:</strong> ${buah.join(", ")}</p>
`;

// Menghapus item terakhir
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah pop:</strong> ${buah.join(", ")} (item dihapus: ${itemDihapus})</p>
`;

// Mengurutkan array
buah.sort();
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah sort:</strong> ${buah.join(", ")}</p>
`;

// Array map
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => `${item} (Rp${hargaBuah[index].toLocaleString()})`);

document.getElementById("array-demo").innerHTML += `
  <p><strong>Array dengan harga:</strong> ${daftarBuah.join(", ")}</p>
`;

// Array filter
const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += `
  <p><strong>Buah dengan harga > 10.000:</strong> ${buahMahal.join(", ")}</p>
`;

// Objek
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "20210001",
  jurusan: "Teknik Informatika",
  nilai: {
    algoritma: 85,
    basis_data: 90,
    web: 88
  },
  hobi: ["Coding", "Membaca", "Futsal"],
  tampilkanInfo: function() {
    return `${this.nama} (${this.nim}) - ${this.jurusan}`;
  },
  hitungRataRata: function() {
    const nilaiArray = Object.values(this.nilai);
    const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    return (total / nilaiArray.length).toFixed(2);
  }
};

document.getElementById("result").innerHTML += `
  <hr>
  <h3 id="manipulasi-objek">Manipulasi Objek:</h3>
  <div id="objek-demo"></div>
`;

// Menampilkan informasi objek
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Info Mahasiswa:</strong> ${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> ${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> ${mahasiswa.hobi.join(", ")}</p>
`;

// Menambahkan properti baru ke objek
mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Email:</strong> ${mahasiswa.email}</p>
`;

// Mengubah nilai properti
mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Nilai Web setelah diubah:</strong> ${mahasiswa.nilai.web}</p>
`;

// Menghapus properti
delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Hobi setelah dihapus:</strong> ${mahasiswa.hobi ? mahasiswa.hobi.join(", ") : "Tidak ada data hobi"}</p>
`;

// Latihan 3
// Soal 1: Array minimal 5 objek mahasiswa[cite: 6]
let dataMahasiswaLatihan = [
    { nim: "12314001", nama: "Putri", jurusan: "Teknik Informatika", nilai: 85 },
    { nim: "12314002", nama: "Adelia", jurusan: "Teknik Informatika", nilai: 90 },
    { nim: "12314003", nama: "Eka", jurusan: "Sistem Informasi", nilai: 78 },
    { nim: "12314004", nama: "Arta", jurusan: "Teknik Informatika", nilai: 95 },
    { nim: "12314005", nama: "Nadin", jurusan: "Sistem Informasi", nilai: 82 }
];

document.getElementById("result").innerHTML += `
  <hr><p>--- LATIHAN 3 ---</p>
  
  <p>1. Data Mahasiswa (Tabel CRUD)</p>
  <table border="1" style="width: 100%; border-collapse: collapse; margin-bottom: 10px;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th>NIM</th><th>Nama</th><th>Jurusan</th><th>Nilai</th><th>Aksi</th>
      </tr>
    </thead>
    <tbody id="tbodyMhs"></tbody>
  </table>
  
  <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
    <strong>Form CRUD Mahasiswa:</strong><br>
    <input type="hidden" id="inputIndexMhs">
    NIM: <input type="text" id="inputNimMhs" style="margin: 2px;"><br>
    Nama: <input type="text" id="inputNamaMhs" style="margin: 2px;"><br>
    Jurusan: <input type="text" id="inputJurusanMhs" style="margin: 2px;"><br>
    Nilai: <input type="number" id="inputNilaiMhs" style="margin: 2px;"><br>
    <button id="btnSimpanMhs" style="margin-top: 5px;">Simpan Data</button>
  </div>
  <br>

  <p>2. Mahasiswa Nilai Tertinggi</p>
  <p id="infoTertinggi" style="padding-left: 10px; border-left: 3px solid blue;"></p>
  <br>

  <p>3. Mahasiswa Nilai di Atas Rata-rata</p>
  <p id="infoAtasRata" style="padding-left: 10px; border-left: 3px solid green;"></p>
  <br>

  <p>4. Urutkan Mahasiswa</p>
  <button id="btnSortAsc">Urutkan A-Z</button>
  <button id="btnSortDesc">Urutkan Z-A</button>
  <br><br>
`;

// Fungsi Utama untuk me-Render Ulang UI Latihan 3 setiap ada perubahan data
function renderUI_Latihan3() {
    let tbody = document.getElementById("tbodyMhs");
    tbody.innerHTML = "";
    
    // Render Tabel (Soal 1 & Bagian dari Soal 5 CRUD)[cite: 6]
    dataMahasiswaLatihan.forEach((mhs, index) => {
        tbody.innerHTML += `
            <tr>
                <td style="padding: 5px;">${mhs.nim}</td>
                <td style="padding: 5px;">${mhs.nama}</td>
                <td style="padding: 5px;">${mhs.jurusan}</td>
                <td style="padding: 5px;">${mhs.nilai}</td>
                <td style="padding: 5px;">
                    <button class="btn-edit" data-id="${index}">Edit</button>
                    <button class="btn-hapus" data-id="${index}">Hapus</button>
                </td>
            </tr>
        `;
    });

    if (dataMahasiswaLatihan.length > 0) {
        // Soal 2: Mencari Mahasiswa Nilai Tertinggi (menggunakan reduce)[cite: 6]
        const tertinggi = dataMahasiswaLatihan.reduce((max, mhs) => Number(mhs.nilai) > Number(max.nilai) ? mhs : max, dataMahasiswaLatihan[0]);
        document.getElementById("infoTertinggi").innerHTML = `Nama: <strong>${tertinggi.nama}</strong> (Nilai: ${tertinggi.nilai})`;
        
        // Soal 3: Filter Mahasiswa di atas Rata-rata[cite: 6]
        const totalNilai = dataMahasiswaLatihan.reduce((sum, mhs) => sum + Number(mhs.nilai), 0);
        const rataRata = totalNilai / dataMahasiswaLatihan.length;
        const atasRataRata = dataMahasiswaLatihan.filter(mhs => Number(mhs.nilai) > rataRata);
        const namaAtasRata = atasRataRata.map(mhs => mhs.nama).join(", ");
        document.getElementById("infoAtasRata").innerHTML = `Rata-rata Kelas: <strong>${rataRata.toFixed(1)}</strong><br>Mahasiswa lulus: <strong>${namaAtasRata}</strong>`;
    } else {
        document.getElementById("infoTertinggi").innerHTML = "Data Kosong";
        document.getElementById("infoAtasRata").innerHTML = "Data Kosong";
    }
}

// Menjalankan render pertama kali
renderUI_Latihan3();

// EVENT HANDLER UNTUK CRUD & SORTING (Soal 4 & 5)[cite: 6]

// Menggunakan Event Delegation untuk tombol Edit & Hapus di dalam tabel
document.getElementById("tbodyMhs").addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-edit")) {
        // Read (Memasukkan data ke form untuk di-Update)[cite: 6]
        let index = e.target.getAttribute("data-id");
        document.getElementById("inputIndexMhs").value = index;
        document.getElementById("inputNimMhs").value = dataMahasiswaLatihan[index].nim;
        document.getElementById("inputNamaMhs").value = dataMahasiswaLatihan[index].nama;
        document.getElementById("inputJurusanMhs").value = dataMahasiswaLatihan[index].jurusan;
        document.getElementById("inputNilaiMhs").value = dataMahasiswaLatihan[index].nilai;
    } else if (e.target.classList.contains("btn-hapus")) {
        // Delete[cite: 6]
        let index = e.target.getAttribute("data-id");
        dataMahasiswaLatihan.splice(index, 1);
        renderUI_Latihan3();
    }
});

// Event Handler: Create & Update
document.getElementById("btnSimpanMhs").addEventListener("click", function() {
    let index = document.getElementById("inputIndexMhs").value;
    let mhsBaru = {
        nim: document.getElementById("inputNimMhs").value,
        nama: document.getElementById("inputNamaMhs").value,
        jurusan: document.getElementById("inputJurusanMhs").value,
        nilai: Number(document.getElementById("inputNilaiMhs").value)
    };

    if (index === "") {
        dataMahasiswaLatihan.push(mhsBaru); // Create[cite: 6]
    } else {
        dataMahasiswaLatihan[index] = mhsBaru; // Update[cite: 6]
        document.getElementById("inputIndexMhs").value = ""; // Reset index
    }

    // Bersihkan form
    document.getElementById("inputNimMhs").value = "";
    document.getElementById("inputNamaMhs").value = "";
    document.getElementById("inputJurusanMhs").value = "";
    document.getElementById("inputNilaiMhs").value = "";
    
    renderUI_Latihan3();
});

// Event Handler: Sort Ascending (A-Z)[cite: 6]
document.getElementById("btnSortAsc").addEventListener("click", function() {
    dataMahasiswaLatihan.sort((a, b) => a.nama.localeCompare(b.nama));
    renderUI_Latihan3();
});

// Event Handler: Sort Descending (Z-A)[cite: 6]
document.getElementById("btnSortDesc").addEventListener("click", function() {
    dataMahasiswaLatihan.sort((a, b) => b.nama.localeCompare(a.nama));
    renderUI_Latihan3();
});

document.getElementById("result").innerHTML += `
  <hr class="my-8 border-gray-300">
  
  <div class="bg-white p-6 my-6 shadow-lg rounded-xl border border-gray-200">
    <h2 class="text-2xl font-extrabold text-gray-800 mb-4 border-b pb-2"> Demo Manipulasi DOM</h2>
    <div id="dom-output" class="mb-4 flex flex-col gap-3 transition-colors duration-300 p-4 rounded-lg bg-gray-50 border border-gray-100">
      <p class="text-gray-400 italic text-sm" id="empty-msg">Belum ada item ditambahkan.</p>
    </div>
    <div class="flex flex-wrap gap-2 mt-4">
      <button id="btn-tambah-item" class="bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-indigo-700 hover:shadow-lg transition-all">➕ Tambah Item</button>
      <button id="btn-hapus-item" class="bg-rose-500 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-rose-600 hover:shadow-lg transition-all">🗑️ Hapus Item</button>
      <button id="btn-ubah-warna" class="bg-emerald-500 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-emerald-600 hover:shadow-lg transition-all">🎨 Ubah Warna Container</button>
    </div>
  </div>

  <div class="bg-white p-6 my-6 shadow-lg rounded-xl border border-gray-200">
    <h2 class="text-2xl font-extrabold text-gray-800 mb-4 border-b pb-2"> Demo Fetch API</h2>
    <p class="text-gray-600 mb-4">Mengambil data postingan dari server secara asinkronus (async/await).</p>
    <button id="btn-fetch" class="bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-purple-700 hover:shadow-lg transition-all mb-4">🚀 Ambil Data Postingan</button>
    
    <div id="api-output" class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"></div>
  </div>
`;

// 2. Manipulasi DOM
const domOutput = document.getElementById("dom-output");
const emptyMsg = document.getElementById("empty-msg");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
  if (emptyMsg) emptyMsg.style.display = 'none'; // Sembunyikan pesan kosong
  
  itemCount++;
  const newItem = document.createElement("div");
  // Desain item list yang lebih rapi
  newItem.className = "p-3 bg-white border-l-4 border-indigo-500 rounded shadow-sm text-gray-700 font-medium flex justify-between items-center animate-pulse-once";
  newItem.innerHTML = `<span>Item <span class="text-indigo-600 font-bold">#${itemCount}</span></span> <span class="text-xs text-gray-400">Baru ditambahkan</span>`;
  domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild && domOutput.lastChild.id !== 'empty-msg') {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
  if (itemCount === 0 && emptyMsg) {
    emptyMsg.style.display = 'block'; // Tampilkan kembali pesan kosong
  }
});

// Fungsi untuk mengubah warna background container DOM
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  // Palet warna pastel yang lebih soft
  const colors = ["bg-indigo-50", "bg-emerald-50", "bg-amber-50", "bg-rose-50", "bg-sky-50"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Reset kelas warna sebelumnya dan tambahkan yang baru
  domOutput.className = `mb-4 flex flex-col gap-3 transition-colors duration-500 p-4 rounded-lg border border-gray-200 ${randomColor}`;
});


// 3. Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
  const apiOutput = document.getElementById("api-output");
  const btn = this;
  
  // Efek loading pada tombol
  btn.innerHTML = "⏳ Mengambil Data...";
  btn.classList.add("opacity-75", "cursor-not-allowed");
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    
    apiOutput.innerHTML = ""; // Bersihkan kontainer
    
    // Looping data dan membuat card untuk setiap post
    data.slice(0, 4).forEach(post => {
      apiOutput.innerHTML += `
        <div class="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 class="font-bold text-gray-800 text-lg mb-2 capitalize line-clamp-1">${post.title}</h4>
          <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    apiOutput.innerHTML = `
      <div class="col-span-full p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded shadow-sm">
        <strong class="font-bold">Gagal mengambil data!</strong><br>
        <span class="text-sm">${error.message}</span>
      </div>
    `;
  } finally {
    // Kembalikan tombol ke keadaan semula
    btn.innerHTML = "Ambil Data Postingan";
    btn.classList.remove("opacity-75", "cursor-not-allowed");
  }
}); document.getElementById("result").innerHTML += `
  <hr class="my-8 border-gray-300">
  <h2 class="text-3xl font-extrabold text-gray-800 mb-6"> Latihan 4</h2>

  <!-- Soal 4: Dark Mode Toggle -->
  <div class="lat-card mb-6 p-5 bg-white shadow-md rounded-xl border border-gray-200 transition-colors duration-300">
     <h3 class="font-bold text-xl mb-3">4. Dark Mode Toggle</h3>
     <p class="text-sm mb-3">Memanipulasi class CSS untuk mengubah tema halaman.</p>
     <button id="btn-dark-mode" class="bg-gray-800 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-gray-700 transition-all">🌙 Toggle Dark Mode</button>
  </div>

  <!-- Soal 1 & 2: Form Mahasiswa + LocalStorage -->
  <div class="lat-card mb-6 p-5 bg-white shadow-md rounded-xl border border-gray-200 transition-colors duration-300">
     <h3 class="font-bold text-xl mb-3">1 & 2. Form Mahasiswa & LocalStorage</h3>
     <p class="text-sm mb-3">Validasi form dan penyimpanan persisten di browser.</p>
     
     <div id="error-msg" class="text-red-600 bg-red-100 p-2 rounded mb-3 text-sm hidden border border-red-200 font-medium"></div>
     
     <div class="flex flex-wrap gap-2 mb-4">
       <input type="text" id="mhs-nim" placeholder="NIM" class="border p-2.5 rounded-lg flex-1 min-w-[150px] bg-gray-50 text-gray-800">
       <input type="text" id="mhs-nama" placeholder="Nama Lengkap" class="border p-2.5 rounded-lg flex-1 min-w-[200px] bg-gray-50 text-gray-800">
       <button id="btn-tambah-mhs" class="bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-blue-700">Simpan Data</button>
     </div>
     <ul id="list-mhs" class="list-disc pl-5 space-y-1 text-gray-700"></ul>
  </div>

  <!-- Soal 3 & 5: API Search/Filter & Pagination -->
  <div class="lat-card mb-6 p-5 bg-white shadow-md rounded-xl border border-gray-200 transition-colors duration-300">
     <h3 class="font-bold text-xl mb-3">3 & 5. API Filter & Pagination</h3>
     <input type="text" id="search-post" placeholder="Cari judul post..." class="border p-2.5 rounded-lg mb-4 w-full bg-gray-50 text-gray-800">
     
     <div id="api-posts-container" class="space-y-3 mb-4 min-h-[200px]">
        <p class="text-gray-500 italic">Memuat data...</p>
     </div>
     
     <div class="flex gap-3 items-center justify-center border-t pt-4">
        <button id="btn-prev" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50 font-medium">⬅️ Prev</button>
        <span id="page-info" class="text-sm font-bold text-gray-600">Page 1</span>
        <button id="btn-next" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-50 font-medium">Next ➡️</button>
     </div>
  </div>

  <!-- Soal 6: Todo List (DOM & LocalStorage) -->
  <div class="lat-card mb-6 p-5 bg-white shadow-md rounded-xl border border-gray-200 transition-colors duration-300">
     <h3 class="font-bold text-xl mb-3">6. Aplikasi Todo List Sederhana</h3>
     <div class="flex gap-2 mb-4">
       <input type="text" id="todo-input" placeholder="Apa yang ingin dikerjakan?" class="border p-2.5 rounded-lg flex-1 bg-gray-50 text-gray-800">
       <button id="btn-tambah-todo" class="bg-green-500 text-white font-medium px-5 py-2.5 rounded-lg shadow hover:bg-green-600">Tambah Todo</button>
     </div>
     <ul id="list-todo" class="space-y-2"></ul>
  </div>
`;


// Soal 4: Dark Mode Toggle[cite: 8]
document.getElementById("btn-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
    
    // warna card agar menyesuaikan tema gelap
    const cards = document.querySelectorAll('.lat-card');
    cards.forEach(card => {
        card.classList.toggle('bg-white');
        card.classList.toggle('bg-gray-800');
        card.classList.toggle('border-gray-200');
        card.classList.toggle('border-gray-700');
        
        // Memastikan teks di dalam card bisa terbaca
        if (card.classList.contains('bg-gray-800')) {
            card.classList.add('text-gray-200');
            card.classList.remove('text-gray-800');
        } else {
            card.classList.remove('text-gray-200');
            card.classList.add('text-gray-800');
        }
    });
});

// Soal 1 & 2: Form Input dengan Validasi & LocalStorage[cite: 8]
let dataMhsLokal = JSON.parse(localStorage.getItem('mahasiswaData')) || [];

const renderMhsLokal = () => {
    const list = document.getElementById('list-mhs');
    list.innerHTML = dataMhsLokal.length === 0 ? '<li class="text-gray-400 italic list-none">Belum ada data mahasiswa.</li>' : '';
    dataMhsLokal.forEach(m => {
        list.innerHTML += `<li><strong>${m.nim}</strong> - ${m.nama}</li>`;
    });
};
renderMhsLokal(); // Panggil saat pertama kali load

document.getElementById('btn-tambah-mhs').addEventListener('click', () => {
    const nim = document.getElementById('mhs-nim').value.trim();
    const nama = document.getElementById('mhs-nama').value.trim();
    const errorMsg = document.getElementById('error-msg');

    // Validasi Form
    if(!nim || !nama) {
        errorMsg.textContent = "⚠️ Validasi Gagal: NIM dan Nama wajib diisi!";
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden'); // Sembunyikan error jika sukses
    dataMhsLokal.push({nim, nama});
    
    // Simpan ke LocalStorage secara persisten
    localStorage.setItem('mahasiswaData', JSON.stringify(dataMhsLokal));
    
    // Kosongkan form
    document.getElementById('mhs-nim').value = '';
    document.getElementById('mhs-nama').value = '';
    
    renderMhsLokal();
});

// Soal 3 & 5: Search/Filter API & Pagination[cite: 8]
let allApiPosts = [];
let filteredApiPosts = [];
let currentPage = 1;
const postsPerPage = 5; // Jumlah data per halaman

const renderApiPosts = () => {
    const container = document.getElementById('api-posts-container');
    container.innerHTML = '';
    
    // Logika Pagination
    const startIdx = (currentPage - 1) * postsPerPage;
    const endIdx = startIdx + postsPerPage;
    const paginatedData = filteredApiPosts.slice(startIdx, endIdx);

    if(paginatedData.length === 0) {
        container.innerHTML = '<p class="text-red-500 font-medium">Data tidak ditemukan.</p>';
    } else {
        paginatedData.forEach(post => {
            container.innerHTML += `
                <div class="p-3 bg-gray-50 border border-gray-200 rounded text-gray-800">
                    <h4 class="font-bold capitalize">${post.title}</h4>
                    <p class="text-sm line-clamp-2 text-gray-600">${post.body}</p>
                </div>
            `;
        });
    }
    
    // Update tombol pagination dan info halaman
    const totalPages = Math.ceil(filteredApiPosts.length / postsPerPage) || 1;
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('btn-prev').disabled = currentPage === 1;
    document.getElementById('btn-next').disabled = currentPage === totalPages || filteredApiPosts.length === 0;
};

// Ambil data dari API
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        allApiPosts = data;
        filteredApiPosts = data; // Awalnya tampilkan semua
        renderApiPosts();
    });

// Logika Search / Filter
document.getElementById('search-post').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    filteredApiPosts = allApiPosts.filter(post => post.title.toLowerCase().includes(keyword));
    currentPage = 1; // Reset ke halaman 1 setiap kali mencari
    renderApiPosts();
});

// Event Listener Tombol Prev & Next
document.getElementById('btn-prev').addEventListener('click', () => {
    if(currentPage > 1) { currentPage--; renderApiPosts(); }
});
document.getElementById('btn-next').addEventListener('click', () => {
    if(currentPage < Math.ceil(filteredApiPosts.length / postsPerPage)) { currentPage++; renderApiPosts(); }
});

// Soal 6: Todo List dengan DOM & LocalStorage[cite: 8]
let todoList = JSON.parse(localStorage.getItem('todoDataAplikasi')) || [];

const renderTodos = () => {
    const list = document.getElementById('list-todo');
    list.innerHTML = todoList.length === 0 ? '<p class="text-gray-400 italic">Belum ada tugas.</p>' : '';
    
    todoList.forEach((todo, index) => {
        list.innerHTML += `
            <li class="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded">
                <div class="flex items-center gap-3 cursor-pointer w-full" onclick="toggleStatusTodo(${index})">
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center ${todo.selesai ? 'bg-green-500 border-green-500' : 'border-gray-400'}">
                        ${todo.selesai ? '<span class="text-white text-xs">✓</span>' : ''}
                    </div>
                    <span class="${todo.selesai ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}">${todo.tugas}</span>
                </div>
                <button class="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1.5 rounded text-sm font-bold" onclick="hapusTodo(${index})">X</button>
            </li>
        `;
    });
};

// Fungsi global agar bisa dipanggil dari inline onclick HTML
window.toggleStatusTodo = (index) => {
    todoList[index].selesai = !todoList[index].selesai;
    localStorage.setItem('todoDataAplikasi', JSON.stringify(todoList));
    renderTodos();
};

window.hapusTodo = (index) => {
    todoList.splice(index, 1);
    localStorage.setItem('todoDataAplikasi', JSON.stringify(todoList));
    renderTodos();
};

renderTodos(); // Render awal

// Tambah Todo
document.getElementById('btn-tambah-todo').addEventListener('click', () => {
    const input = document.getElementById('todo-input');
    const tugas = input.value.trim();
    
    if(tugas) {
        todoList.push({ tugas: tugas, selesai: false });
        localStorage.setItem('todoDataAplikasi', JSON.stringify(todoList));
        input.value = '';
        renderTodos();
    }
});

