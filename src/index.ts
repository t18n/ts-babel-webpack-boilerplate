import fetch from 'node-fetch';

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch(function(reason) {
    console.log(reason);
  });
