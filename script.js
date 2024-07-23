var menu = [];
var harga = [];
var jumlah = [];
var totalHarga = [];
var i = 0;

function cekHarga() {
    var selectedMenu = document.getElementById("menu").value;
    if (selectedMenu == 'Chicken Katsu') {
        document.getElementById("harga").value = 40000;
    } else if (selectedMenu == "Chicken Tex-Mex") {
        document.getElementById("harga").value = 56000;
    } else if (selectedMenu == "Teriyaki Chicken") {
        document.getElementById("harga").value = 50000;
    } else if (selectedMenu == "Bojangles boosts Chicken") {
        document.getElementById("harga").value = 46000;
    } else if (selectedMenu == "Chipotle Chicken Power Bowl") {
        document.getElementById("harga").value = 60000;
    } else if (selectedMenu == "Tandoori Chicken Rice Bowl") {
        document.getElementById("harga").value = 45000;
    }
}

function cekTotal(event) {
    var tombol = event.which || event.getKeyCode;
    if (tombol === 13) {
        var harga = document.getElementById("harga").value;
        var jumlah = document.getElementById("jumlah").value;
        var total = document.getElementById("total").value = harga * jumlah;
    }
}

function pesan() {
    menu[i] = document.getElementById("menu").value;
    harga[i] = document.getElementById("harga").value;
    jumlah[i] = document.getElementById("jumlah").value;
    totalHarga[i] = document.getElementById("total").value;
    i++;
    alert("Data disimpan");

    var isi = "";
    for (var j = 0; j < menu.length; j++) {
        isi += "<tr><td>" + (j + 1) + "</td><td>" + menu[j] + "</td><td>" + jumlah[j] + "</td><td>" + totalHarga[j] + "</td></tr>";
    }
    document.getElementById("pesanan").innerHTML = "<tr><th>No</th><th>Menu</th><th>Jumlah</th><th>Total Harga</th></tr>" + isi;
}
