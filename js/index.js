//mengambil object form
let form = document.forms["form-bmi"];

// aksi ketika submit button di klik
form.addEventListener("submit", getValues);

function getValues(event) {
  event.preventDefault();

  // menyimpan data pervariabel form
  const jenisKelamin = this.jenisKelamin.value;
  const berat = this.beratBadan.value;
  const usia = this.usia.value;
  const tinggi = this.tinggiBadan.value;

  // form validation
  if (jenisKelamin.match("pria,wanita")) {
    alert("Jenis kelamin harus diisi !!!");
  } else if (berat < 50 || berat > 150) {
    alert("Masukkan berat diantara 50 s/d 150 !!!");
  } else if (usia < 1 || usia > 100) {
    alert("Masukkan usia diantara 1 s/d 100 !!!");
  } else if (tinggi < 100 || tinggi > 200) {
    alert("Masukkan tinggi diantara 100 s/d 200 !!!");
  } else {
    // jika berhasil validasi masuk sini
    let bmi = berat / ((tinggi / 100) ^ 2);

    // variabel untuk menyimpan view yang berubah
    let klasifikasiBerat,
      klasifikasiBeratDetail,
      hasilBmiText,
      hasilBmiText1,
      hasilBmiText2;
    bmi = bmi.toFixed(2);

    // pengujian konsisi berat badan
    if (bmi < 18.5) {
      klasifikasiBerat = "Berat Badan Kurang";
      klasifikasiBeratDetail = "Anda kekurangan berat badan";
      hasilBmiText = "Hasil BMI dibawah 18.5";
      hasilBmiText1 =
        "<p>Anda berada dalam kategori underweight atau kekurangan berat badan.</p><p> Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang kaya nutrisi dan berolahraga. </p><p> Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.</p>";
      hasilBmiText2 =
        "<h2>Beberapa penyakit yang berasal dari kurangnya berat badan</h2><ul><li>Anemia</li><li>Malnutrisi</li><li>Infertilitas</li><li>Osteoporosis</li><li>Sistem Imun Rendah</li></ul>";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      klasifikasiBerat = "Berat Badan Normal (Ideal)";
      klasifikasiBeratDetail = "Anda memiliki berat badan ideal";
      hasilBmiText = "Hasil BMI diantara 18.5 dan 25";
      hasilBmiText1 =
        "<p>Anda berada dalam kategori normal.</p><p>Cara terbaik untuk menjaga berat badan adalah dengan mengurangi cemilan, melakukan aktivitas fisik, dan istirahat yang cukup.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menjaga pola makan dan kesehatan Anda.</p>";
      hasilBmiText2 =
        "<h2>Trik dalam menjaga berat badan normal</h2><ul><li>Konsumsi Makanan yang Tepat</li><li>Makan Dalam Porsi Kecil</li><li>Makan Secara Perlahan</li><li>Istirahat yang Cukup</li><li>Olahraga yang Rutin</li></ul>";
    } else if (bmi > 25 && bmi <= 29.9) {
      klasifikasiBerat = "Kelebihan Berat Badan";
      klasifikasiBeratDetail = "Anda memiliki berat badan berlebih";
      hasilBmiText = "Hasil BMI diantara 25 dan 30";
      hasilBmiText1 =
        "<p>Anda berada dalam kategori overwight atau berat badan berlebih.</p><p>Cara terbaik untuk mengurangi berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>";
      hasilBmiText2 =
        "<h2>Trik dalam menjaga berat badan normal</h2><ul><li>Diabetest</li><li>Hipertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>";
    } else {
      klasifikasiBerat = "Kegemukan (Obensitas)";
      klasifikasiBeratDetail = "Anda miliki berat badan berlebih atau obesitas";
      hasilBmiText = "Hasil BMI 30";
      hasilBmiText1 =
        "<p><p>Anda berada dalam kategori obesity atau obesitas.</p><p>Cara terbaik untuk mengurangi berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p><p>Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>";
      hasilBmiText2 =
        "<h2>Trik dalam menjaga berat badan normal</h2><ul><li>Diabetest</li><li>Hipertensi</li><li>Sakit Jantung</li><li>Osteoarthritis</li></ul>";
    }

    // pembuatan objek untuk view
    let out = `<p>BMI adalah ${bmi}</p>
    `;
    let klasifikasiBeratView = `<h3>${klasifikasiBerat}</h3>
    `;
    let klasifikasiBeratDetailView = `<h3>${klasifikasiBeratDetail}</h3>
    `;
    let hasilBmiText1View = `<P>${hasilBmiText1}</p>`;
    console.log(hasilBmiText1View);

    // push view into html element
    document.querySelector(".bmi").innerHTML = out;
    document.querySelector(".klasifikasi-berat").innerHTML =
      klasifikasiBeratView;
    document.querySelector(".klasifikasi-berat-detail").innerHTML =
      klasifikasiBeratDetailView;
    document.querySelector(".detail-pertama").innerHTML = hasilBmiText1;
    document.querySelector(".detail-kedua").innerHTML = hasilBmiText2;

    // menampilkan hasil
    document.querySelector(".hasil").style.display = "flex";
  }
}
