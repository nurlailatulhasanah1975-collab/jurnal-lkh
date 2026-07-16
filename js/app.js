document.addEventListener("DOMContentLoaded", () => {

    loadGuru();

    document
    .getElementById("guruSelect")
    .addEventListener("change", pilihGuru);

document
    .getElementById("bulanSelect")
    .addEventListener("change", updateStatus);

document
    .getElementById("tahunSelect")
    .addEventListener("change", updateStatus);

setStatus("Silakan pilih guru.");

});

function loadGuru() {

    const select = document.getElementById("guruSelect");

    select.innerHTML = "";

    // Option pertama
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "-- Pilih Guru --";
    select.appendChild(opt);

    // Isi dropdown
    Guru.forEach((g) => {

        const option = document.createElement("option");

        option.value = g.id;

        option.textContent = g.nama;

        select.appendChild(option);

    });

}

function pilihGuru(e) {

    const id = Number(e.target.value);

    const guru = Guru.find(g => g.id === id);

    if (!guru) {

        kosongkanGuru();

        return;

    }

    document.getElementById("guruNama").textContent = guru.nama;

    document.getElementById("guruNip").textContent = guru.nip;

    document.getElementById("guruSertifikasi").textContent = guru.sertifikasi;

    document.getElementById("guruPangkat").textContent = guru.pangkat;

    document.getElementById("guruPendidikan").textContent = guru.pendidikan;

    document.getElementById("guruStatus").textContent = guru.status;
	
	document.getElementById("guruMapel").textContent = guru.mapel;
	
	setStatus("Guru dipilih: " + guru.nama);

}

function kosongkanGuru() {

    document.getElementById("guruNama").textContent = "-";

    document.getElementById("guruNip").textContent = "-";

    document.getElementById("guruSertifikasi").textContent = "-";

    document.getElementById("guruPangkat").textContent = "-";

    document.getElementById("guruPendidikan").textContent = "-";

    document.getElementById("guruStatus").textContent = "-";
	
	document.getElementById("guruMapel").textContent = "-";

}

function setStatus(text){

    document.getElementById("statusAplikasi").textContent=text;

}

function updateStatus() {

    const guru = document.getElementById("guruSelect");
    const bulan = document.getElementById("bulanSelect");
    const tahun = document.getElementById("tahunSelect");

    if (guru.value === "") {

        setStatus("Silakan pilih guru.");

        return;

    }

    const namaGuru = guru.options[guru.selectedIndex].text;

    const namaBulan = bulan.options[bulan.selectedIndex].text;

    const tahunDipilih = tahun.value;

    setStatus(
        "Guru dipilih: " +
        namaGuru +
        " | " +
        namaBulan +
        " " +
        tahunDipilih
    );

}