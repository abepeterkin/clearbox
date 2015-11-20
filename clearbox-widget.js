$('#clearbox-widget').html("<textarea style=\"position:relative;resize:none;\" rows=\"4\" cols=\"50\" id=\"clearbox-text\"></textarea>"
	+ '<br>'
	+ '<button type=\"button\" id=\"clearbox-clear\">Clear</button>'
	+ '<button type=\"button\" id=\"clearbox-undo\" disabled>Undo Clear</button>');
	
var textArea = $("#clearbox-text");
var clear = $("#clearbox-clear");
var undo = $("#clearbox-undo");
var cleared = "";
	
clear.on( 'click', function() {
	textArea.focus();
	cleared = textArea.val();
	clear.prop('disabled', true);
	textArea.animate({left: '30px', color: '#333'}, 50);
	textArea.animate({left: '0px', right: '30px', color: '#666'}, 100);
	textArea.animate({left: '30px', right: '0px', color: '#999'}, 100);
	textArea.animate({left: '0px', right: '30px', color: '#e5e5e5'}, 100);
	textArea.animate({right: '0px', color: '#fff'}, 50, function() {	
		undo.prop('disabled', false);
		textArea.val('');
		textArea.css('color', '#000');
	});
});
	
undo.on( 'click', function() {
	textArea.focus();
	$(this).prop('disabled', true);
	textArea.animate({'background-color': '#000'}, 100, function() {
		textArea.val(cleared);
		cleared = '';
		clear.prop('disabled', false);
	});
	textArea.animate({'background-color': '#fff'}, 100);
});
	
	
textArea.on('keyup', function() {
	if ($(this).val() === '') {
		clear.prop('disabled', true);
	} else {
		clear.prop('disabled', false);
	}
});