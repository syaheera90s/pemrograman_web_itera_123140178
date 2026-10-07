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

// --- 1. If-Else If-Else ---
let nilai = 85;
let grade = "";

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

// Gunakan += agar tampilan sebelumnya tidak tertimpa
document.getElementById("result").innerHTML += `
    <hr>
    <p>Nilai: <strong>${nilai}</strong></p>
    <p>Grade: <strong>${grade}</strong></p>
`;

// --- 2. Ternary Operator ---
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

document.getElementById("result").innerHTML += `
    <p>Status: <strong>${status}</strong></p>
`;

// --- 3. Switch Case ---
let hari = new Date().getDay(); // Mengambil angka hari saat ini (0 = Minggu, 1 = Senin, dst.)
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

// --- 1. For Loop ---
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += `
    <hr>
    <h3 id="daftar-nilai-siswa">Daftar Nilai Siswa:</h3>
    <ul id="daftar-nilai"></ul>
    <p id="rata-rata"></p>
`;

for (let i = 0; i < nilaiSiswa.length; i++) {
    total += nilaiSiswa[i];
    document.getElementById("daftar-nilai").innerHTML += `
        <li>Siswa ${i + 1}: ${nilaiSiswa[i]}</li>
    `;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = `
    Rata-rata nilai: <strong>${rataRata.toFixed(2)}</strong>
`;

// --- 2. While Loop ---
document.getElementById("result").innerHTML += `
    <h3 id="judul-countdown">Countdown:</h3>
    <div id="countdown"></div>
`;

let hitungMundur = 5;
while (hitungMundur > 0) {
    document.getElementById("countdown").innerHTML += `
        <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">${hitungMundur}</span>
    `;
    hitungMundur--;
}

// --- 3. For...of Loop ---
document.getElementById("result").innerHTML += `
    <h3>Nilai dengan for...of:</h3>
    <div id="nilai-of" class="flex flex-wrap gap-2"></div>
`;

for (let nilai of nilaiSiswa) {
    let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
    document.getElementById("nilai-of").innerHTML += `
        <span class="inline-block bg-gray-100 px-3 py-1 rounded ${statusNilai}">${nilai}</span>
    `;
}

// --- HTML Tambahan untuk Form Sapa & Kalkulator ---
document.getElementById("result").innerHTML += `
    <hr>
    <div class="event-demo p-4 my-4 border border-gray-300 rounded">
        <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
        <input type="text" id="nama-input" placeholder="Masukkan nama Kalian" class="border p-2 rounded w-full mb-2">
        <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sapa</button>
        <div id="sapa-output" class="mt-3"></div>

        <div class="mt-4">
            <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
            <div class="flex gap-2 mb-3">
                <input type="number" id="angka1" placeholder="Angka 1" class="border p-2 rounded flex-1">
                <input type="number" id="angka2" placeholder="Angka 2" class="border p-2 rounded flex-1">
            </div>
            <div class="flex gap-2">
                <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
                <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">-</button>
                <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">×</button>
                <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">÷</button>
            </div>
            <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
        </div>
    </div>
`;

// --- 1. Fungsi & Event Handler Sapa ---
function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-red-500">Silakan masukkan nama Kalian terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-green-500">${pesan}</p>`;
    }
});

// --- 2. Fungsi & Event Handler Kalkulator ---
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Event handler Tambah
document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
});

// Event handler Kurang
document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
});

// Event handler Kali
document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
});

// Event handler Bagi
document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
});

// --- 1. Array dan Metode Array ---
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

// Menambahkan item di akhir (push)
buah.push("Durian");
document.getElementById("array-demo").innerHTML += `
    <p><strong>Setelah push Durian:</strong> ${buah.join(", ")}</p>
`;

// Menghapus item terakhir (pop)
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += `
    <p><strong>Setelah pop:</strong> ${buah.join(", ")} (item dihapus: ${itemDihapus})</p>
`;

// Mengurutkan array (sort)
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


// --- 2. Bekerja dengan Objek ---
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

// --- 1. Manipulasi DOM ---
document.getElementById("result").insertAdjacentHTML("beforeend", `
    <hr>
    <div class="dom-demo p-4 my-4 border border-gray-300 rounded">
        <h2 class="text-xl font-bold mb-3">Demo Manipulasi DOM</h2>
        <div id="dom-output" class="mb-3"></div>
        <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tambah Item</button>
        <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Hapus Item</button>
        <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ubah Warna</button>
    </div>
`);

const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
    itemCount++;
    const newItem = document.createElement("div");
    newItem.className = "p-2 mb-2 bg-gray-100 rounded";
    newItem.innerText = `Item ${itemCount}`;
    domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
    if (domOutput.lastChild) {
        domOutput.removeChild(domOutput.lastChild);
        itemCount--;
    }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
    const colors = ["#dbeafe", "#dcfce7", "#fef9c3", "#fce7f3"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    domOutput.style.backgroundColor = randomColor;
    domOutput.style.padding = "10px";
    domOutput.style.borderRadius = "6px";
});


// --- 2. Fetch API dan Async/Await ---
document.getElementById("result").insertAdjacentHTML("beforeend", `
    <hr>
    <div class="api-demo p-4 my-4 border border-gray-300 rounded">
        <h2 class="text-xl font-bold mb-3">Demo Fetch API</h2>
        <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Ambil Data API</button>
        <div id="api-output" class="mt-3"></div>
    </div>
`);

// Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const apiOutput = document.getElementById("api-output");
        
        apiOutput.innerHTML = "<h3 class='font-bold mb-2'>Daftar Post:</h3>";

        data.slice(0, 5).forEach(post => {
            apiOutput.innerHTML += `
                <div class="p-3 mb-2 bg-gray-100 rounded">
                    <h4 class="font-semibold">${post.title}</h4>
                    <p class="text-sm">${post.body}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("api-output").innerHTML = `
            <div class="p-3 bg-red-100 text-red-800 rounded">
                Gagal mengambil data: ${error.message}
            </div>
        `;
    }
});

// --- PROYEK LATIHAN ---

// 1. Tampilan HTML Proyek Latihan
document.getElementById("result").insertAdjacentHTML("beforeend", `
    <hr class="my-6">
    <div id="exercise-section" class="p-4 border border-gray-300 rounded space-y-6">
        <h2 class="text-xl font-bold">Proyek Latihan</h2>

        <!-- Dark Mode Section -->
        <div>
            <button id="btn-dark-mode" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                🌙 Toggle Dark Mode
            </button>
        </div>

        <!-- Todo List Section -->
        <div class="border-t pt-4">
            <h3 class="text-lg font-semibold mb-2">1. Aplikasi Todo List (LocalStorage)</h3>
            <div class="flex gap-2 mb-3">
                <input type="text" id="todo-input" placeholder="Tambah tugas baru..." class="border p-2 rounded flex-1 text-black">
                <button id="btn-add-todo" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Tambah</button>
            </div>
            <ul id="todo-list" class="space-y-2"></ul>
        </div>

        <!-- Filter API Posts Section -->
        <div class="border-t pt-4">
            <h3 class="text-lg font-semibold mb-2">2. Search / Filter Post API</h3>
            <input type="text" id="search-input" placeholder="Cari judul post..." class="border p-2 rounded w-full mb-3 text-black">
            <div id="filtered-posts" class="space-y-2"></div>
        </div>
    </div>
`);

// --- 2. Logika Dark Mode Toggle ---
let isDarkMode = false;
document.getElementById("btn-dark-mode").addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = "#1f2937";
        document.body.style.color = "#ffffff";
        this.innerText = "☀️ Toggle Light Mode";
    } else {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        this.innerText = "🌙 Toggle Dark Mode";
    }
});

// --- 3. Logika Todo List (dengan LocalStorage) ---
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const btnAddTodo = document.getElementById("btn-add-todo");

// Ambil data todo tersimpan dari localStorage (jika ada)
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 text-black p-2 rounded";

        const textSpan = document.createElement("span");
        textSpan.innerText = todo.text;
        if (todo.completed) {
            textSpan.className = "line-through text-gray-400";
        }
        textSpan.style.cursor = "pointer";
        textSpan.title = "Klik untuk tandai selesai";
        textSpan.addEventListener("click", () => toggleTodo(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Hapus";
        deleteBtn.className = "bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600";
        deleteBtn.addEventListener("click", () => deleteTodo(index));

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    // Simpan perubahan ke LocalStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== "") {
        todos.push({ text: text, completed: false });
        todoInput.value = "";
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

btnAddTodo.addEventListener("click", addTodo);
renderTodos(); // Tampilkan todo saat halaman dibuka

// --- 4. Logika Search / Filter Post API ---
const searchInput = document.getElementById("search-input");
const filteredPostsContainer = document.getElementById("filtered-posts");
let allPosts = [];

async function fetchPostsForSearch() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        allPosts = await res.json();
        displayPosts(allPosts.slice(0, 10)); // Tampilkan 10 post awal
    } catch (err) {
        filteredPostsContainer.innerHTML = "<p class='text-red-500'>Gagal memuat data API.</p>";
    }
}

function displayPosts(posts) {
    filteredPostsContainer.innerHTML = "";
    if (posts.length === 0) {
        filteredPostsContainer.innerHTML = "<p class='text-gray-400'>Judul post tidak ditemukan.</p>";
        return;
    }
    posts.forEach(post => {
        filteredPostsContainer.innerHTML += `
            <div class="p-3 bg-gray-100 text-black rounded">
                <h4 class="font-semibold text-blue-600 mb-1">${post.title}</h4>
                <p class="text-sm text-gray-700">${post.body}</p>
            </div>
        `;
    });
}

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();
    const filtered = allPosts.slice(0, 10).filter(post =>
        post.title.toLowerCase().includes(query)
    );
    displayPosts(filtered);
});

fetchPostsForSearch();

