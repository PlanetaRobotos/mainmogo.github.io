$(function () {
	$('#btnTable').on('click', function (event) {
		event.preventDefault();

		//var UserName = document.getElementById('UserName').value;
		//var UserSurname = document.getElementById('UserSurname').value;
		//var UserEmail = document.getElementById('UserEmail').value;
		//var UserPass = document.getElementById('UserPass').value;

		//var table = document.getElementById('table');

		////var x = table.rows[0].cells;
		////x[0].innerHTML = "rawbibhorpaoruph";

		var table = document.getElementById('table');
		var tbody = table.getElementsByTagName('tbody');
		var tr = document.createElement('tr');
		for (var i = 0; i < 5; i++) {
			var td = document.createElement('td');
			td.innerHTML = "hhhhhh";
			tr.appendChild(td);
		}
		//tbody.appendChild(tr)
		table.appendChild(tr);
	});
});
