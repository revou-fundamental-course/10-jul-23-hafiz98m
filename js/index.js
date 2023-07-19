let form = document.forms["form-bmi"];

form.addEventListener("submit", getValues);

function getValues(event) {
  event.preventDefault();

  const jenisKelamin = this.jenisKelamin.value;
  console.log(jenisKelamin);
  const berat = this.beratBadan.value;
  //   console.log(berat);
  const usia = this.usia.value;
  //   console.log(usia);
  const tinggi = this.tinggiBadan.value / 100;
  //   console.log(tinggi);

  let bmi = berat / (tinggi ^ 2);
  console.log(bmi);

  let out = `<p>BMI adalah ${bmi}</p>
  `;

  document.querySelector(".hasil").innerHTML = out;
}
