$(function() {

	let header = $('#header'),
		introH = $('#intro').innerHeight();
	scrollOffset = $(window).scrollTop();

	// fixed  header
	checkScroll(scrollOffset);
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if(scrollOffset >= introH) {
			header.addClass('fixed');
		} else {
			header.removeClass("fixed");
		}
	}


	// smooth scroll
	$("[data-scroll]").on('click', function(event) { //   [la la la la ] it is an atribute!!!
		event.preventDefault();

		let $this = $(this),
			elemId = $this.data('scroll'),
			elemOffset = $(elemId).offset().top;

		$('#nav a').removeClass("active");
		$this.addClass('active');

		$("#nav").removeClass('active');
		$("#nav-toggle").removeClass('active');

		$('html, body').animate({
			scrollTop: elemOffset
		}, 500);
	});


	// menu nav-toggle
	$("#nav-toggle").on('click', function(event) {
		event.preventDefault();

		$("#nav").toggleClass('active');
		$(this).toggleClass('active');
	});



	// collapse
	$('[data-collapse]').on('click', function(event) {
		event.preventDefault();

		let $this = $(this);

		$this.toggleClass('active');
	});



	// slider
	$('[data-slider]').slick({
		infinite: true,
		fade: false,
		sliderToShow: 1,
		sliderToScroll: 1
	});

	// win form

	//$('#btnTable').on('click', function (event) {
	//	event.preventDefault();

	//	//var UserName = document.getElementById('UserName').value;
	//	//var UserSurname = document.getElementById('UserSurname').value;
	//	//var UserEmail = document.getElementById('UserEmail').value;
	//	//var UserPass = document.getElementById('UserPass').value;

	//	//var table = document.getElementById('table');
	//	alert("YYYYYY");

	//	////var x = table.rows[0].cells;
	//	////x[0].innerHTML = "rawbibhorpaoruph";

	//	//var table = document.getElementById('table');
	//	//var tr = document.createElement('tr');
	//	//for (var i = 0; i < 5; i++) {
	//	//	var td = document.createElement('td');
	//	//	tr.appendChild(td);
	//	//}
	//	//table.appendChild(tr);
	//});
});