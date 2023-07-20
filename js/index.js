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
  let klasifikasiBerat;
  bmi = bmi.toFixed(2);

  if (bmi < 18.5) {
    klasifikasiBerat = "Anda kekurangan berat badan";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    klasifikasiBerat = "Anda memiliki berat badan ideal";
  } else if (bmi > 25 && bmi <= 29.9) {
    klasifikasiBerat = "Anda memiliki berat badan berlebih";
  } else {
    klasifikasiBerat = "Anda miliki berat badan berlebih atau obesitas";
  }
  let klasifikasiBeratView = `<h3>${klasifikasiBerat}</h3>
  `;

  let out = `<p>BMI adalah ${bmi}</p>
  `;
  document.querySelector(".bmi").innerHTML = out;
  document.querySelector(".klasifikasi-berat").innerHTML = klasifikasiBeratView;

  document.querySelector(".hasil").style.display = "flex";
}

// kasih display none untuk result
