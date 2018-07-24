/* STEPS
 * 1. Create HTML content
 * 2. Add list item when input is submitted
 * 3. Delete list item when delete button is clicked
 * 4. Strike through list item when item is clicked
 * 5. Show/hide input when show/hide button is clicked
 * 5. Style todo list
 * 6. Add animation
 */

// Define variables
var $input 	= $( "input" ),
	$ul		= $( "ul" );

// When enter key is pressed in input
$input.keypress( function(event) {
	
	// Check if enter key is pressed
	if ( event.which === 13 ) {

		// Add new to-do item to list
		$ul.append("<li><span>" + $( this ).val() + "</span> <button>Delete</button></li>");

		// Clear input
		$( this ).val( "" );
	}
});

// When delete button is clicked
$ul.on( "click", "li > button", function() {

	// Remove list item
	$( this ).parent().remove();
});


// When list item is clicked
$ul.on( "click", "li", function() {

	// Toggle strikethrough
	$( this ).children( "span" ).toggleClass( "crossed-off" );
});

// When input toggle button is clicked
$( "#input-toggle" ).click( function() {

	// Show/hide input box
	$input.toggle();
});