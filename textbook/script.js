let urlListGeometry = ["http://view.etext.home2.pearsoncmg.com/ebook/linktoebook16.do?platform=1099&bookid=1011826&pageid="];
function redirectGeometry() {
	let pageNumber = document.getElementById("pageNumberGeom").value;
	urlListGeometry.push(pageNumber);
	finalUrl = urlListGeometry.join("");
	window.open(finalUrl, '_self');
	urlListGeometry = ["http://view.etext.home2.pearsoncmg.com/ebook/linktoebook16.do?platform=1099&bookid=1011826&pageid="];
};
let urlListAlgebraII = ["http://view.etext.home2.pearsoncmg.com/ebook/linktoebook16.do?platform=1099&bookid=1011707&pageid="];
function redirectAlgebraII() {
	let pageNumber = document.getElementById("pageNumberAlgII").value;
	urlListAlgebraII.push(pageNumber);
	finalUrl = urlListAlgebraII.join("");
	window.open(finalUrl, '_self');
	urlListAlgebraII = ["http://view.etext.home2.pearsoncmg.com/ebook/linktoebook16.do?platform=1099&bookid=1011707&pageid="];
};
$(document).ready(function() {
// executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
	$( ".hover-shadow" ).hover(
	function() {
		$(this).addClass('shadow').css('cursor', 'pointer'); 
	}, function() {
		$(this).removeClass('shadow');
	}
);
// document ready  
});