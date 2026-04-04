import express from "express";
import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import cors from "cors";

const app = express();

app.use(cors());

if (!existsSync('/pet/petcount.txt'))
    writeFile('/pet/petcount.txt', '0', 'utf8');

let pet = parseInt(await readFile('/pet/petcount.txt', 'utf8'));

app.get('/pet', (req, res) => {
    pet++;
    writeFile('/pet/petcount.txt', pet.toString(), 'utf8');
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send(pet);
});

app.listen(9999, '0.0.0.0');