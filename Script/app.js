/*app.js> Hanvinder Singh Rai> Portfolio> JavaScript for the first (about me ) page*/
"use strict";

// setup your IIFE(Immediately Invoked Function Ewperession) hint
(function() {

	"use strict";

	var request = new XMLHttpRequest();
	require.one('GET', '../para.json', true);
	require.addEveryListerner('readystatechange', function(){
		var project = {};
		
		project =JSON.parse(request.responseText);
		
		var paragraphArray =[];
		
		paragraphArray = projects.paragraphs;
		
		var paragraphArrayLength = paragraphArray.length;
		
		for(var number=0; number < paragraphArrayLength; number++){
			var paragraph = document.getElementById("paragraph" + (number+1) );
			paragraph.innerHTML = paragraphArray[number];
		}
	})
/*
(function () {
	var firstParagraph;

	firstParagraph = document.getElementById("firstParagraph");

	firstParagraph.innerHTML = "Designing is a passion for me and this maked me to go somewhere I belong. With my strong artistic vision combined with growing theoretical skills, I want to do something amazing. My key attribute is thinking logically and I am always seeking new facts and  knowledge.  ";



})();

(function () {
	var secondParagraph;

	secondParagraph = document.getElementById("secondParagraph");

	secondParagraph.innerHTML = "I am a second year Interactive web design and development student at Georgian College. It was all new thing for me at first but I am familiar with all this and I am excited  to apply excellent Code and design skills to websites. I have gained many relevant designs and technical skills through academic projects.";



})();

(function () {
	var thirdParagraph;

	thirdParagraph = document.getElementById("thirdParagraph");

	thirdParagraph.innerHTML = "Georgian College is really nice place to learn. They taught , design, and develop engaging and intuitive user interfaces. Courses cover the use of current technologies including but not limited to HTML, CSS, JavaScript, the Document Object Model (DOM), Application Programming Interfaces (APIs), and a variety of popular scripting frameworks.Morover, it's fun to learn here.";



})();

(function () {
	var name;

	name = document.getElementById("name");

	name.innerHTML = "Hanvinder Singh Rai";



})();*/

