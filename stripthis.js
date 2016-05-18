function initialise() {

	// $(window).bind('blur', function() {
		// console.log("lost focus");
	// });

	if ($.cookie('stripthis') == 1) {
		stripCSS();
	}

	$(window).bind('keypress', function(e) {
		if (e.ctrlKey && e.shiftKey && e.charCode == 11) {
			console.log("Ctrl+Shift+K pressed");
			stripCSS();
			$.cookie('stripthis', 1, {expires: 100, path: "/"});
			return;
		}

		if (e.ctrlKey && e.shiftKey && e.charCode == 19) {
			console.log("Ctrl+Shift+S pressed");
			location.reload();
			$.cookie('stripthis', 0, {expires: 100, path: "/"});
			return;
		}


	});

}

function stripCSS() {

	console.log("Stripping CSS");
	$('link[rel=stylesheet]').remove();

	$('link[rel="shortcut icon"], link[rel="icon"]').remove();

	// Create blank favicon
	$('<link>').appendTo('head').attr('rel', 'shortcut icon')
				    .attr('type', 'image/x-icon')
				    .attr('href', 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=');

	// remove title
	$('title').text("(empty)");

	$('h1').css('font-size', '1.2em');
	$('h2').css('font-size', '1.1em');
	$('img').attr('src', '_blank')
		.attr('width', '0')
		.attr('height', '0')
		.removeAttr('alt');

	$("iframe[src*='youtube']").remove();

	// share this fb/twitter buttons
	$("span[class^='st_']").remove()
}

initialise();

