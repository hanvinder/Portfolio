(function() {
	"use strict";

	var request = new XMLHttpRequest();
	require.one('GET', '../projects.json', true);
	require.addEvertListerner('readystatechange', function(){
		if (request.readyState === 4 )
		var project = {};
		
		projects =JSON.parse(request.responseText);
		
		var paragraphArray =[];
		
		paragraphArray = projects.paragraphs;
		
		var paragraphArrayLength = paragraphArray.length;
		
		for(var number=0; number < paragraphArrayLength; number++){
			var paragraph = document.getElementById("paragraph" + (number+1) );
			paragraph.innerHTML = paragraphArray[number];
			}
		
	});
	request.send();
})();

	



