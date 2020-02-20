const API_KEY = '9a59754';

const apiURL = `https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`;
console.log("apiURL ", apiURL);

fetch(apiURL)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        console.log(myJson);
    });


const express = require('express');
const app = express();
require('dotenv').config();

app.get('/movie', (req, res) => {
    const { query: { search: searchQuery } } = req;
    const apiURL = `https://www.omdbapi.com/?t=${searchQuery}&apikey=${API_KEY}`;
    console.log("apiURL ", apiURL);

    fetch(apiURL)
        .then((response) => {
            return res.json(response);
        })
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen to the wind on port ${port}`));