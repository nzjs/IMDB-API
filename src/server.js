const API_KEY = '9a59754';
console.log("API_KEY ", API_KEY);

const express = require('express');
const app = express();
const fetch = require('node-fetch');
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

const port = 3000;
app.listen(port, () => console.log(`Listen to the wind on port ${port}`));


