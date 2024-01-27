let password = document.querySelector("#pass");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let confirmation = document.getElementById("confirmation");

let confirmationError = document.querySelector(".confirmation-error");
let passError = document.querySelector(".pass-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");

confirmation.addEventListener("input" , (event) => {
    if (confirmation.value != password.value) {
        confirmation.style.borderColor = "red";
        confirmationError.innerHTML = "passwords don't match"
    } else {
        confirmation.style.borderColor = "#fff";
        confirmationError.innerHTML = ""
    }
});

password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passError.textContent = "";
    } else {
        passError.textContent = "password must be at least 8 characters"
    }
})

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "email format is jesus@holymail.com"
    }
})

phone.addEventListener("input", (event) => {
    if (phone.validity.valid) {
        phoneError.textContent = "";
    } else {
        phoneError.textContent = "phone number should consist of 7 digits plus a 3 digit area code"
    }
})