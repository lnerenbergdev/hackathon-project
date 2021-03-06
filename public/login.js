$(document).ready(function(){

	$("#signIn").click(function() { //singin button listener
		var pw = $("#password").val(); //get password input
		var email = $("#email").val(); //get email input
		$.post("/api/login", { //post to the login api
			password: pw,
			email: email
		}, function(response){
			if(response.status === "success") { //if logged in
				console.log(response);
				window.location = "/";
			}
		});
	});

	$("#addUser").click(function(){
		var name = $("#name").val(); //get username input
		var pw = $("#newPassword").val(); //get password input
		var email = $("#newEmail").val(); //get email input

		$.post("/api/register", { //post to the register api
			name: name,
			password: pw,
			email: email
		}, function(response){
			if(response.status === "success") { //if logged in
			window.location = '/';
         }
		});
	});

	$("#signUp").click(function(){ //click listener to show registration div
		$("#login").css("display", "none");
		$("#newUser").css("display", "block");
	});

});
