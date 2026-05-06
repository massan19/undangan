// AOS INIT
AOS.init();

// NAMA TAMU
const urlParams = new URLSearchParams(window.location.search);
let nama = urlParams.get('to');

if (!nama) nama = "Tamu Undangan";

nama = decodeURIComponent(nama);
document.getElementById("namaTamu").innerText = nama;

// OPEN
function openInvite() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("musik").play();
}

// SET TANGGAL ACARA (FORMAT AMAN)
let target = new Date("2026-06-05T08:00:00").getTime();

setInterval(() => {
  let now = new Date().getTime();
  let selisih = target - now;

  if (selisih < 0) return;

  let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  let jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  let menit = Math.floor((selisih / (1000 * 60)) % 60);
  let detik = Math.floor((selisih / 1000) % 60);

  document.getElementById("hari").innerText = hari;
  document.getElementById("jam").innerText = jam;
  document.getElementById("menit").innerText = menit;
  document.getElementById("detik").innerText = detik;
}, 1000);
setInterval(() => {
  let now = new Date().getTime();
  let selisih = target - now;

  // kalau waktu habis
  if (selisih < 0) {
    document.getElementById("countdown").innerHTML = "Acara sedang berlangsung 🎉";
    return;
  }

  let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  let jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  let menit = Math.floor((selisih / (1000 * 60)) % 60);
  let detik = Math.floor((selisih / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    hari + " Hari " +
    jam + " Jam " +
    menit + " Menit " +
    detik + " Detik";
}, 1000);

// UCAPAN
function kirimUcapan() {
  let isi = document.getElementById("ucapanInput").value;
  let p = document.createElement("p");
  p.innerText = isi;

  document.getElementById("listUcapan").appendChild(p);
}

const elements = document.querySelectorAll('.fade-up');

function reveal() {
  let windowHeight = window.innerHeight;

  elements.forEach(el => {
    let pos = el.getBoundingClientRect().top;

    if (pos < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', reveal);

function openInvite() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("main").style.display = "block";

  let audio = document.getElementById("musik");
  audio.muted = false;
  audio.play().catch(() => {});
}