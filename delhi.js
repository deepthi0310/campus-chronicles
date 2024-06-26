
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
document.querySelector("#login").addEventListener("click", function () {

    let username = document.querySelector('#useremail').value;
    let userPassword = document.querySelector('#userpass').value;

    if (username && userPassword) {

        let localStorageData = localStorage.getItem("userDetails");

        if (localStorageData) {

            localStorageData = JSON.parse(localStorageData);

            if (username === localStorageData.email && userPassword === localStorageData.password) {

                window.location.href = "home.html";
            } else {
                alert("username/password is incorrect");
            }

        }
        else {
            alert("please signup first, and login");
            window.location.href = "index.html"
        }



    } else {
        alert("please enter all the details.");
    }


})