var word = document.getElementById("word")
var definition = document.getElementById("definition")
var wiki = document.getElementById("wiki")
var btn = document.getElementById("btn")





















const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '033a44f5a1msh4a280015909e194p1a76eejsn3b75229decc0',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    
