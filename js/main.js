$(document).ready(function() {

	// Placeholder text fix for all browsers
	$('input, textarea').placeholder();

	// Form validation
	$('#form-invite').validate({
		// Validation rules
		rules: {
			"entry.785330106":	{required: true, email: true}
		},

		invalidHandler: function(form) {

		},

		// Disable error messages
		errorPlacement: function(error,element) {
			return true;
		}
		
	});

	// When a valid email is entered, add 'valid' class to input group
	$('.input-field').on('change keydown input paste propertychange', function() {
		var inputField = $(this);
		var inputGroup = inputField.parent('.input-group');
		var form = inputField.parents('form');
		var submitButton = inputField.siblings('a[data-input-type="submit"]').find('span');
		if ( form.valid() ) {
			submitButton.add(inputGroup).addClass('valid').removeClass('submitted');
		}
		else {
			submitButton.add(inputGroup).removeClass('valid submitted');
		}
	});

	// If user submits form by pressing enter, submit form
	$('.input-field').on('keypress', function(e) {
		var inputGroup = $(this).parent('.input-group');
		if ( e.which === 13 ) {
			e.preventDefault();
			if ( inputGroup.hasClass('submitted') ) {
				return false
			}
			else {
				$('a[data-input-type="submit"]').trigger('click');
			}
		}
	});

	// Form submit button trigger
	$('a[data-input-type="submit"]').click(function(e){
		e.preventDefault();
		var inputGroup = $(this).parent('.input-group');
		var form = inputGroup.parent('form');
		// if input group hasclass valid
		if ( inputGroup.hasClass('valid') ) {
			// submit form
			form.ajaxSubmit();
			// remove 'valid' class and add 'submitted' class to input group
			inputGroup.removeClass('valid').addClass('submitted');
		}
	});

	// Add input-filled class when user cursor is in input field
	$('.input-field').on('focus', function() {
		var inputField = $(this);
		var inputGroup = inputField.parent('.input-group');
		if ( inputField.val().length !== 0 ) {
			inputGroup.addClass('input-filled');
		}
	});

	// Remove input-filled class if input field is empty when user clicks out of it
	$('.input-field').on('blur', function() {
		var inputField = $(this);
		var inputGroup = inputField.parent('.input-group');
		if ( inputField.val().length === 0 ) {
			inputGroup.removeClass('input-filled');
		}
	});

	// Remove overlay when user clicks on it
	$('.input-overlay').click(function(e) {
		e.preventDefault();
		$(this).parent('.input-group').addClass('input-filled');
		// Wait for CSS transition for 'visible' to complete
		setTimeout(function() {
			$('input[data-input="email"]').focus();	
		}, 500);
		
	});






});