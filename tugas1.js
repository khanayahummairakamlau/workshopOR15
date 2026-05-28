// BIODATA
const bioBtn = document.getElementById("bioBtn");
const bio = document.getElementById("bio");

let tampil = false;

function tampilBio()
{
    if(tampil === false){
        bio.innerHTML =
        "Nama : Khanaya Hummaira Kamlau <br> NIM : 2410432013 <br> Jurusan : Matematika <br> Instagram : @khanayakamlau <br> Email : khanayahummairakamlau@gmail.com";
        tampil = true;
    } else {
        bio.innerHTML = "";
        tampil = false;
    }
}

bioBtn.addEventListener("click",tampilBio);


const colorBtn = document.getElementById("colorBtn");

function ubahWarna()
{
    const warna = [
        "linear-gradient(135deg, #dbeafe, #fbcfe8)",
        "linear-gradient(135deg, #bfdbfe, #bbf7d0)",
        "linear-gradient(135deg, #fde68a, #fbcfe8)"
    ];

    let randomWarna =
    warna[Math.floor(Math.random() * warna.length)];
    document.body.style.background = randomWarna;
}

colorBtn.addEventListener("click", ubahWarna);

const addBtn = document.getElementById("addBtn");

const aktivitasInput = document.getElementById("aktivitasInput");

const aktivitasList = document.getElementById("aktivitasList");

function tambahAktivitas()
{
    const aktivitas = aktivitasInput.value;
    if(aktivitas === ""){
        alert("Input tidak boleh kosong!");
        return;
    }
    const li = document.createElement("li");

    li.textContent = aktivitas;
    aktivitasList.appendChild(li);
    aktivitasInput.value = "";
}

addBtn.addEventListener("click", tambahAktivitas);