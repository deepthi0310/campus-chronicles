// function togglePasswordVisibility() {
//     var passwordInput = document.getElementById("password");
//     var togglePassword = document.querySelector(".toggle-password");

//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         togglePassword.classList.add("hide-password");
//     } else {
//         passwordInput.type = "password";
//         togglePassword.classList.remove("hide-password");
//     }
// }

document.querySelector("button").addEventListener("click", function(event) {
    var emailInput = document.querySelector('input[type="email"]').value;
    var passwordInput = document.getElementById("password").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); 
        return;
    }
    
    var passwordRegex = /.{6,}/;

    if (!passwordRegex.test(passwordInput)) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault(); 
    }
});
