let isNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isPhoneValid = false;

document.getElementById("submit").addEventListener("click", function () {
  // name
  const nameInput = document.getElementById("name").value.trim();
  const errorName = document.querySelector(".error-name");
  isNameValid = false;

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
  isNameValid = true;
});

document.getElementById("submit").addEventListener("click", function () {
  //   last name
  const lastNameInput = document.getElementById("last-name").value.trim();
  const errorLastName = document.querySelector(".error-last-name");
  isLastNameValid = false;

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
  isLastNameValid = true;
});

document.getElementById("submit").addEventListener("click", function () {
  //   email
  const emailInput = document.getElementById("email").value.trim();
  const errorEmail = document.querySelector(".error-email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid = false;

  if (emailInput === "") {
    errorEmail.textContent = "Email cannot be empty.";
    return;
  }
  if (!emailRegex.test(emailInput)) {
    errorEmail.textContent = " Please enter a valid email address.";
    return;
  }
  errorEmail.textContent = "";
  isEmailValid = true;
});

document.getElementById("submit").addEventListener("click", function () {
  //   phone
  const phoneInput = document.getElementById("phone").value.trim();
  const errorPhone = document.querySelector(".error-phone");
  const lbPhoneRegex = /^(03|70|71|76|78|79|81|82|83|84|85|88)\d{6}$/;
  isPhoneValid = false;

  if (phoneInput === "") {
    errorPhone.textContent = "Phone cannot be epmty.";
    return;
  }
  if (!/^\d+$/.test(phoneInput)) {
    errorPhone.textContent = "Phone must contain numbers only.";
    return;
  }
  if (!lbPhoneRegex.test(phoneInput)) {
    errorPhone.textContent = "Please enter a valid Lebanese phone number.";
    return;
  }
  errorPhone.textContent = "";
  isPhoneValid = true;
});

document.getElementById("submit").addEventListener("click", function () {
  if (isNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
    const form = document.querySelector("form");
    form.innerHTML = `
      <div class="success-message">
        <span class="checkmark">✅</span>
        <h2>Thank you for your submission!</h2>
      </div>
    `;
  }
});

window.onload = function () {
  document
    .querySelectorAll('input[type="text"]')
    .forEach((input) => (input.value = ""));
};
