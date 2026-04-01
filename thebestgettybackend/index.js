import express from "express";
import fs from "fs/promises";

const app = express();
let pet = parseInt(await fs.readFile('petcount.txt', 'utf8'));

app.get('/pet', (req, res) => {
    pet++;
    fs.writeFile('petcount.txt', pet.toString());
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send(pet);
});

app.listen(8080, '0.0.0.0');