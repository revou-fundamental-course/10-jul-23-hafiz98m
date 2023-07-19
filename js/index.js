let form = document.forms["form-bmi"];

form.addEventListener("submit", getValues);

function getValues(event) {
  event.preventDefault();
  let jenisKelamin = this.jenis - kelamin.value;
  console.log(jenisKelamin);
}
