$(function() {

	$('.select-custom').styler({
		selectSmartPositioning: false
	});

	$('#departure-date').datepicker({
		showOptions: { direction: "down" },
		dateFormat: "dd.mm.yy"
	});

	$( "#return-date" ).datepicker({
		showOptions: { direction: "down" },
		dateFormat: "dd.mm.yy"
	});

	$('#roundtrip-checkbox').on('change', function() {
		if (this.checked) {
			$("#return-date" ).datepicker( "option", "disabled", true );
			$("#return-date" ).val("");
		} else {
			$("#return-date" ).datepicker( "option", "disabled", false );
		}
	})

	$('.search-form-change_btn').on('click', function() {
		var arrivalCity = $('#arrival-city').val();
		$('#arrival-city').val($('#departure-city').val());
		$('#departure-city').val(arrivalCity);
	})

	$('.help-block').on('click', function(e) {
		e.preventDefault();
		$(this).siblings($('#departure-city')).val(e.target.innerHTML);
	})


});
