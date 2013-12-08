jQuery(function($){
	var $data = $('#data'),
		$submit = $('#submit'),
		$mainForm = $('#mainForm'),
		url = $mainForm.attr('action');

	$submit.on('click', function(ev) {
		// This doesn't work yet.
		// More info: https://github.com/seejohnrun/haste-server/issues/47

		ev.preventDefault();
		console.log(url);
		$.ajax({
			dataType : "jsonp",
			url : url,
			data : "hi",
			cache : true, // For debugging - maybe haste-server doesn't like this?
			success: function(response) {
				alert('success!')
			}
		});
	});

});

