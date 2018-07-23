/* STEPS
 * 1. Create HTML content
 * 2. Add list item when input is submitted
 * 3. Delete list item when delete button is clicked
 * 4. Strike through list item when item is clicked
 * 5. Show/hide input when show/hide button is clicked
 * 5. Style todo list
 * 6. Add animation
 */

// Add keypress event listener to input
$( "input" ).keypress( function(event) {
	
	// Check if enter key is pressed
	if ( event.which === 13 ) {
		// Get new to-do item
		var newToDo = $( "input" ).val();

		// Add new to-do item to list
		$( "ul" ).append("<li>" + newToDo + "</li>");

		// Clear input
		$( "input" ).val( "" );
	}
});