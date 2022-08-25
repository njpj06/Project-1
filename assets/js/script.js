var word = document.getElementById("word");
var definition = document.getElementById("definition");
var wiki = document.getElementById("wiki");
var btn = document.getElementById("btn");
var random = document.getElementById("");

function reqListener() {
  console.log(this.responseText);
}
const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open(
  "GET",
  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/?key=ba8ba0ae-582d-43a4-8472-0c05e1fbde80"
);
req.send();

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "033a44f5a1msh4a280015909e194p1a76eejsn3b75229decc0",
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
