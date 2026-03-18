
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var messageInput = document.getElementById("message");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var phoneError = document.getElementById("phoneError");
var messageError = document.getElementById("messageError");

// Live validation while typing
nameInput.addEventListener("input", function() {
    if(!/^[A-Za-z\s]+$/.test(nameInput.value.trim())){
        nameError.textContent = "Name should contain only letters and spaces.";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("input", function() {
    if(!emailInput.value.includes("@") || !emailInput.value.endsWith(".com")){
        emailError.textContent = "Email must include '@' and end with '.com'.";
    } else {
        emailError.textContent = "";
    }
});

phoneInput.addEventListener("input", function() {
    if(!/^\d{10}$/.test(phoneInput.value.trim())){
        phoneError.textContent = "Phone number must be exactly 10 digits.";
    } else {
        phoneError.textContent = "";
    }
});

messageInput.addEventListener("input", function() {
    if(messageInput.value.trim().split(/\s+/).length < 10){
        messageError.textContent = "Message must be at least 10 words.";
    } else {
        messageError.textContent = "";
    }
});

// Form submission
document.getElementById("enquiryForm").addEventListener("submit", function(event){
    event.preventDefault();

    // Check all validations one last time
    if(
        /^[A-Za-z\s]+$/.test(nameInput.value.trim()) &&
        emailInput.value.includes("@") && emailInput.value.endsWith(".com") &&
        /^\d{10}$/.test(phoneInput.value.trim()) &&
        messageInput.value.trim().split(/\s+/).length >= 10
    ){
        localStorage.setItem("Name", nameInput.value.trim());
        localStorage.setItem("Email", emailInput.value.trim());
        localStorage.setItem("Phone", phoneInput.value.trim());
        localStorage.setItem("Message", messageInput.value.trim());

        alert("Enquiry Stored Successfully!");
        document.getElementById("enquiryForm").reset();
    } else {
        alert("Please fix the errors before submitting.");
    }
});
