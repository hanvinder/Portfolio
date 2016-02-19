(function () {

    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementById("project") != null) {
        console.log("Projects Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
		var Name = document.getElementById("Name");
		var surname = document.getElementById("surname");
        var email = document.getElementById("email");
        var telephone = document.getElementById("telephone");
        var textarea= document.getElementById("textarea");
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