#!/usr/bin/node
const request = require("request");
const movieId = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    const charactersPromises = data.characters.map((characterUrl) => {
      return new Promise((resolve, reject) => {
        request(characterUrl, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            const characterData = JSON.parse(body);
            resolve(characterData.name);
          } else {
            reject(error);
          }
        });
      });
    });
    Promise.all(charactersPromises)
      .then((characterNames) => {
        characterNames.forEach((name) => {
          console.log(name);
        });
      })
      .catch((error) => {
        console.log("Error: Could not retrieve character information.");
      });
  } else {
    console.log("Error: Could not retrieve movie information.");
  }
});
