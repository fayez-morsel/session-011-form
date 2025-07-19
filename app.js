document.getElementById("submit").addEventListener("click", function () {
  // name
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

  //   last name
  const lastNameInput = document.getElementById("last-name").value.trim();
  const errorLastName = document.querySelector(".error-last-name");

  if (lastNameInput === "") {
    errorLastName.textContent = "Last Name cannot be empty.";
    return;
  }
  if (/\d/.test(lastNameInput)) {
    errorLastName.textContent = "Last Name connot contain numbers.";
    return;
  }
  if (lastNameInput.length < 5 || lastNameInput.length > 12) {
    errorLastName.textContent =
      "Last Name must be between 5 and 12 characters.";
    return;
  }
  errorLastName.textContent = "";

  //   email
  const emailInput = document.getElementById("email").value.trim();
  const errorEmail = document.querySelector(".error-email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput === "") {
    errorEmail.textContent = "Email cannot be empty.";
    return;
  }
  if(!emailRegex.test(emailInput)){
    errorEmail.textContent = " Please enter a valid email address.";
    return;
  }
  errorEmail.textContent = "";
});
