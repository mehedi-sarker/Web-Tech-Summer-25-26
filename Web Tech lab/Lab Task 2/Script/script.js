
let attempts = 0;
let locked = false;

function validateForm() {

    if (locked) {
        document.getElementById("message").innerHTML =
            "Account is locked. Please wait 5 minutes.";
        return false;
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   
    if (username == "" || password == "") {
        alert("Username and Password must be filled out");
        return false;
    }

  
    if (username == "AIUB" && password == "$_student") {

        document.getElementById("message").innerHTML =
            "Successfully Logged In";

        attempts = 0;

        return false; 
    }
    else {

        attempts++;

        if (attempts == 1) {
            document.getElementById("message").innerHTML =
                "You have 3 attempts left.";
        }
        else if (attempts == 2) {
            document.getElementById("message").innerHTML =
                "You have 2 attempts left.";
        }
        else if (attempts == 3) {

            document.getElementById("message").innerHTML =
                " You are locked for 5 minutes.";

            locked = true;
}

        return false;
    }
}