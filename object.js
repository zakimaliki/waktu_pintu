let mahasiswa = {
    nama : "zaki",
    gender:"laki-laki",
    usia : 17,
    hobi :["nonton","jalan-jalan","ngoding"],
    alamat :{
        kabupaten: "tangerang selatan",
        kecamatan : "pamulang barat"
    },
    printNama : function(){
        return this.nama;
    },
    printHobi : function(){
        return this.hobi[0];
    }
}

// const {nama,gender,usia,hobi} = mahasiswa
// const {kabupaten,kecamatan} = mahasiswa.alamat


console.log(kabupaten);
