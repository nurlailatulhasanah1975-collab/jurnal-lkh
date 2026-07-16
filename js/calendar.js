/*
===========================================================
JURNAL MENGAJAR & LKH
Mesin Kalender
MTs. Al Ihsan Tanah Grogot

Version : 1.0
===========================================================
*/

const Kalender = {

    getNomorBulan() {

        return Number(document.getElementById("bulanSelect").value);

    },

    getNamaBulan() {

        const bulan = document.getElementById("bulanSelect");

        return bulan.options[bulan.selectedIndex].text;

    },

    getTahun() {

    return Number(document.getElementById("tahunSelect").value);

},

getJumlahHari() {

    const bulan = this.getNomorBulan();

    const tahun = this.getTahun();

    return new Date(tahun, bulan, 0).getDate();

},

getHariTerakhir() {

    const tanggal = new Date(
        this.getTahun(),
        this.getNomorBulan() - 1,
        this.getJumlahHari()
    );

    const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    return namaHari[tanggal.getDay()];

}
    
};
