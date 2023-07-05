// Bài 1  1+2+..+n>10000
var tong10000 = 0;

for (b = 0; tong10000 < 10000; b++) {
  tong10000 = tong10000 + b;
  var num = b;
}

document.getElementById("result_1").innerHTML = `
<p>Số nguyên dương nhỏ nhất để 1+2+...+n>10000: ${num}</p>`;

//Bài 2 nhập x và n, tính tổng x+ x^2+ x^3+ ... + x^n;
function tinhMuX(a, b) {
  return Math.pow(a, b);
}

function tinhtong() {
  var numX = document.getElementById("so-x").value * 1;
  var numN = document.getElementById("so-n").value * 1;
  var tongX = 0;

  for (i = 1; i <= numN; i++) {
    var xMuI = tinhMuX(numX, i);
    tongX = tongX + xMuI;
  }
  document.getElementById("result_2").innerHTML = `
  <p>Tổng là: ${tongX}</p>`;
}

//Bài 3

function bai3() {
  var numberN = document.getElementById("num").value * 1;
  var tinhN = 1;

  for (p = 2; p <= numberN; p++) {
    tinhN = tinhN * p;
  }
  document.getElementById("result_3").innerHTML = `
    <p>Kết quả N! là: ${tinhN}</p>`;
}

//Bài 4

function createDiv() {
  var tenDiv = "";

  for (m = 1; m <= 10; m++) {
    if (m % 2 == 0) {
      tenDiv = tenDiv + "<div class='bg-danger'>Đây là div chẵn</div>";
    } else {
      tenDiv = tenDiv + "<div class='bg-success'>Đây là div lẻ</div>";
    }
  }
  document.getElementById("result_4").innerHTML = tenDiv;
}
