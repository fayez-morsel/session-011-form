// validation name 
document.getElementById("submit").addEventListener("click", function () {
  const nameInput = document.getElementById("name").value.trim();
  const errorName = document.querySelector(".error-name");

  if (nameInput === "") {
    errorName.textContent = "Name cannot be empty.";
    return;
  }
  if (/\d/.test(nameInput)) {
    errorName.textContent = "Name connot contain numbers.";
    return;
  }
  if (nameInput.length < 5 || nameInput.length > 12) {
    errorName.textContent = "Name must be between 5 and 12 characters.";
    return;
  }
  errorName.textContent = "";
});
