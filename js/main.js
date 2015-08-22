$(document).ready(function() {

	// Placeholder text fix for all browsers
	$('input, textarea').placeholder();

	// Form validation
	$('#form-invite').validate({
		//Validation rules
		rules: {
			"entry.785330106":	{required: true, email: true}
		},
		
		//Disable error messages
		errorPlacement: function(error,element) {
			return true;
		}
		
	});
});