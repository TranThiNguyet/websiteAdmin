function validate() {

    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin123") {

        alert("Login successfully");
        window.location.href = "file:///D:/ThietKeVaLapTrinhWeb/websiteAdmin/index.html"; // Redirecting to other page.

    } else {

        alert("Invalid username or password");

    }

    return false;

}