const submitBtn = document.getElementById("submit");
const nameIn = document.getElementById("name");
const emailIn = document.getElementById("email");
const pass1In = document.getElementById("pass1In");
const passConIn = document.getElementById("passConIn");
/////////////////////////////////
submitBtn.addEventListener("click", () => {
  console.log(nameIn.value, emailIn.value, pass1In.value, passConIn.value);
});
