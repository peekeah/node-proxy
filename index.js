const express = require('express');
const axios = require('axios');
require('dotenv').config();


const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const REDIRECT_URL = process.env.REDIRECT_URL;

app.get('/*', async(req, res) => {
    try {
        const response = await axios.get(REDIRECT_URL + req.url);
        res.send(response.data);
    } catch (err) {
        res.status(403).send({ status: false, message: 'not found'});
    }
});

app.post('/*', async(req, res) => {
    try {
        const response = await axios.post(REDIRECT_URL + req.url, req.body);
        res.send(response.data);
    } catch (err) {
        res.status(403).send({ status: false, message: 'not found'});
    }
});

app.listen(PORT, () => console.log(`server is started on ${PORT}`));