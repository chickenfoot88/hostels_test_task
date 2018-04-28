$(function() {


// custom select
	$('.select-custom').styler({
		selectSmartPositioning: false
	});

//datepicker
	$('#departure-date').datepicker({
		showOptions: { direction: "down" },
		dateFormat: "dd.mm.yy"
	});

	$( "#return-date" ).datepicker({
		showOptions: { direction: "down" },
		dateFormat: "dd.mm.yy"
	});

	function disableDatepicker(checkbox) {
		if (!checkbox.checked) {
			$("#return-date" ).datepicker( "option", "disabled", true );
			$("#return-date" ).val("");
			$(".search-form-datepicker-wrapper-return").addClass('disabled');
		} else {
			$("#return-date" ).datepicker( "option", "disabled", false );
			$(".search-form-datepicker-wrapper-return").removeClass('disabled');
		}
	};

	$(document).ready(function() {
		disableDatepicker($('#roundtrip-checkbox')[0]);
	});

	$('#roundtrip-checkbox').on('change', function() {
		disableDatepicker(this);
	});

//changing cities
	$('.search-form-change_btn').on('click', function() {
		var arrivalCity = $('#arrival-city').val();
		$('#arrival-city').val($('#departure-city').val());
		$('#departure-city').val(arrivalCity);
	})

//append city to input
	$('.help-block').on('click', function(e) {
		e.preventDefault();
		if(e.target.tagName == 'A'){
			$(this).siblings($('#departure-city')).val(e.target.innerHTML);
		}
	})

// mobile menu
	$(".sf-menu").after('<div id="my-menu">');
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu").removeClass('top-menu');

	$("#my-menu").mmenu({
		extensions : ['theme-white', 'effect-menu-slide', 'pagedim-black' ],
			navbar: {
				title: "Menu"
			}
	});

	var mmenuApi = 	$("#my-menu").data("mmenu");

	mmenuApi.bind("open:finish", function() {
		$(".hamburger").addClass("is-active");
	}).bind("close:before", function() {
		$(".hamburger").removeClass("is-active");
	});

	$(window).resize(function () {
		if ($(window).width() > 768) {
			mmenuApi.close();
		}
	});

	$('ul.sf-menu').superfish({
		animation:   {opacity:'show',height:'show'},
	});

});
