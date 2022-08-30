var word = document.getElementById("word");
var definition = document.getElementById("definition");
var btn = document.getElementById("btn");

const wordOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "033a44f5a1msh4a280015909e194p1a76eejsn3b75229decc0",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
};

const dictionaryOptions = {
    method: "GET",
};
  
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", wordOptions)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.word);
            fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${response.word}?key=ba8ba0ae-582d-43a4-8472-0c05e1fbde80`, dictionaryOptions)
            .then((response) => response.json()
            .then(definition.innerText = response))
            .then((response) => console.log(response))
            word.innerText = response.word;
            })
            

