(function () {

    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementById("projects") != null) {
        console.log("Projects Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var checkMeOut= document.getElementById("checkMeOut");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre

        
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
			 console.log("Name: " + Name.value);
			  console.log("Surname: " + surname.value);
            console.log("Email: " + email.value);
            console.log("Telephone: " + telephone.value);
			console.log("Message: " + textarea.value);
        });
        
        
    } // end else if
	})();