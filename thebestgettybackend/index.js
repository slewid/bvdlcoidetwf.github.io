import express from "express";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";

const app = express();

if (!existsSync('petcount.txt'))
    writeFile('petcount.txt', '0', 'utf8');

let pet = parseInt(await readFile('petcount.txt', 'utf8'));

app.get('/pet', (req, res) => {
    pet++;
    writeFile('petcount.txt', pet.toString(), 'utf8');
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send(pet);
});

app.listen(9999, '0.0.0.0');