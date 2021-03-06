// Default slide settings
Reveal.initialize({
	// The "normal" size of the presentation, aspect ratio will be preserved when the presentation is scaled to fit different resolutions
		width: 1150,
		height: 700,
	// Factor of the display size that should remain empty around the content
		margin: 0.1,
	// Bounds for smallest/largest possible scale to apply to content
		minScale: 0.2,
		maxScale: 1.5,
	// Display controls in the bottom right corner
		controls: false,
	// Display a presentation progress bar
		progress: true,
	// Display the page number of the current slide
		slideNumber: true,
	// Push each slide change to the browser history
		history: false,
	// Enable keyboard shortcuts for navigation
		keyboard: true,
	// Enable the slide overview mode
		overview: false,
	// Vertical centering of slides
		center: true,
	// Enables touch navigation on devices with touch input
		touch: true,
	// Loop the presentation
		loop: false,
	// Change the presentation direction to be RTL
		rtl: false,
	// Turns fragments on and off globally
		fragments: true,
	// Flags if the presentation is running in an embedded mode,
	// i.e. contained within a limited portion of the screen
		embedded: false,
	// Flags if we should show a help overlay when the question mark
	// key is pressed
		help: true,
	// Number of milliseconds between automatically proceeding to the
	// next slide, disabled when set to 0, this value can be overwritten
	// by using a data-autoslide attribute on your slides
		autoSlide: 0,
	// Stop auto-sliding after user input
		autoSlideStoppable: true,
	// Enable slide navigation via mouse wheel
		mouseWheel: true,
	// Hides the address bar on mobile devices
		hideAddressBar: true,
	// Opens links in an iframe preview overlay
		previewLinks: false,
	// Transition style
		transition: 'slide', // none/fade/slide/convex/concave/zoom
	// Transition speed
		transitionSpeed: 'default', // default/fast/slow
	// Transition style for full page slide backgrounds
		backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom
	// Number of slides away from the current that are visible
		viewDistance: 3,
});

// Add ability to print slides
var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? '../../reveal.js/css/print/pdf.css' : '../../reveal.js/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );

// Add ability to click through slides
window.addEventListener("mousedown", handleClick, false);
window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);

function handleClick(e) {
	e.preventDefault();
	if(e.button === 0 && (e.target.tagName != "A" && e.target.parentNode.tagName != "A")) Reveal.next();
	if(e.button === 2) Reveal.prev();
}
