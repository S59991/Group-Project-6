$(function () {

	$("#btnRegister").click(function () {

		location.href = "register.html"
	});

	$("#frmLogin").submit(function (e) {
		e.preventDefault();
		e.stopPropagation();
		var email = $("#inputEmail").val();
		var pass = $("#inputPassword").val();

		var datalist = "inputEmail=" + email + "&inputPassword=" + pass;


		$.ajax({
			type: "post",
			url: "jdbc:mysql://192.168.1.11:3306/projectfe/first",
			data: datalist,
			cache: false,
			success: function (mydata) {
				var myData = JSON.parse(mydata);
				if (myData.status === 1) {
					sessionStorage.ttoken = email;
					location.href = "index.html";
				}
				else {
					alert("Wrong Username or Password");

				}

			},
			Error: function () {
				console.log("ajax error!");
				alert("Please contect admin!");
			}

		});

	});

});