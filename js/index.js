let form = document.forms["form-bmi"];

form.addEventListener("submit", getValues);

function getValues(event) {
  event.preventDefault();

  const jenisKelamin = this.jenisKelamin.value;
  // console.log(jenisKelamin);
  const berat = this.beratBadan.value;
  //   console.log(berat);
  const usia = this.usia.value;
  //   console.log(usia);
  const tinggi = this.tinggiBadan.value / 100;
  //   console.log(tinggi);

  let bmi = berat / (tinggi ^ 2);
  // console.log(bmi);
  let klasifikasiBerat,
    klasifikasiBeratDetail,
    hasilBmiText,
    hasilBmiText1,
    hasilBmiText2;
  bmi = bmi.toFixed(2);

  if (bmi < 18.5) {
    klasifikasiBerat = "Berat Badan Kurang";
    klasifikasiBeratDetail = "Anda kekurangan berat badan";
    hasilBmiText = "Hasil BMI dibawah 18.5";
    hasilBmiText1 =
      "<p>Anda berada dalam kategori underweight atau kekurangan berat badan.</p><p> Cara terbaik untuk menaikkan berat badan adalah dengan mengonsumsi makanan yang kaya nutrisi dan berolahraga. </p><p> Jika BMI Anda berada dalam katerogi ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.</p>";
    hasilBmiText2 =
      "<h2> Beberapa penyakit yang berasal dari kurangnya berat badan</h2>              <ul><li>Anemia</li><li>Malnutrisi</li><li>Infertilitas</li><li>Osteoporosis</li><li>Sistem Imun Rendah</li></ul>";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    klasifikasiBerat = "Berat Badan Normal (Ideal)";
    klasifikasiBeratDetail = "Anda memiliki berat badan ideal";
    hasilBmiText = "Hasil BMI diantara 18.5 dan 25";
  } else if (bmi > 25 && bmi <= 29.9) {
    klasifikasiBerat = "Kelebihan Berat Badan";
    klasifikasiBeratDetail = "Anda memiliki berat badan berlebih";
    hasilBmiText = "Hasil BMI diantara 25 dan 30";
  } else {
    klasifikasiBerat = "Kegemukan (Obensitas)";
    klasifikasiBeratDetail = "Anda miliki berat badan berlebih atau obesitas";
    hasilBmiText = "Hasil BMI 30";
  }
  let out = `<p>BMI adalah ${bmi}</p>
  `;
  let klasifikasiBeratView = `<h3>${klasifikasiBerat}</h3>
  `;
  let klasifikasiBeratDetailView = `<h3>${klasifikasiBeratDetail}</h3>
  `;
  let hasilBmiText1View = `<P>${hasilBmiText1}</p>`;
  console.log(hasilBmiText1View);

  document.querySelector(".bmi").innerHTML = out;
  document.querySelector(".klasifikasi-berat").innerHTML = klasifikasiBeratView;
  document.querySelector(".klasifikasi-berat-detail").innerHTML =
    klasifikasiBeratDetailView;
  document.querySelector(".detail-pertama").innerHTML = hasilBmiText1;
  document.querySelector(".detail-kedua").innerHTML = hasilBmiText2;

  document.querySelector(".hasil").style.display = "flex";
}

// kasih display none untuk result
