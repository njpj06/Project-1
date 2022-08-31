//Assigning ID's from HTML to variables
var word = document.getElementById("word");
var definition = document.getElementById("definition");
var btn = document.getElementById("btn");

//Assigning constant for Words API key to use for fetch command
const wordOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "033a44f5a1msh4a280015909e194p1a76eejsn3b75229decc0",
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
    },
};

//Assigning constant for Dictionary API call to use GET method
const dictionaryOptions = {
    method: "GET",
};
 
//API call to the Words API
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", wordOptions)
    .then((response) => response.json())
    .then((response) => {
        console.log(response.word);
            //API call to Dictionary API
            fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${response.word}?key=ba8ba0ae-582d-43a4-8472-0c05e1fbde80`, dictionaryOptions)
            .then((response) => response.json()
            .then((response) => {
                console.log(response);
                //Assigning definition from dictionary API to a constant
                const data = response[0].shortdef;
                //Displaying definition on page, or displaying message if there is none
                definition.innerText = data;
                    if (!data === true) {
                    definition.innerText = "No definition for this one! 😔"
                };
            })),
            //Randomly generated word displaying on page
    word.innerText = response.word;
    })

            

