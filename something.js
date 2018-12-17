(function( el, render ) {
	// Wait until container is already rendered
	document.addEventListener('DOMContentLoaded', main, false);
	
	// Entrypoint for the whole code
	function main() {
		// Get the container element
		var container = document.querySelector('#wpbody');
		// Render it with ReactDOM.render / wp.element.render
		render( el( MainComponent ), container);
	}

	function MainComponent() {
		return el( 'div', {}, 'Le content' );
	}
} )( wp.element.createElement, wp.element.render );
