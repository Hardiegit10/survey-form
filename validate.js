function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Invalid email address");
        return false;
    }
    return true;
}