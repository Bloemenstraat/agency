const app = require('../app');
const express = require('express');

const biensRouter = express.Router();

const biens = [
{
    image: 'localhost:5000/public/sidi-yahia.jpg',
    prix: 200000,
    surface: 200,
    pieces: 3,
    emplacement: 'Sidi Yahia',
    type: 'vente'
},
{
    image: 'localhost:5000/public/Min_large.jpg',
    prix: 4000000,
    surface: 10,
    pieces: 1,
    emplacement: 'Harrach',
    type: 'vente'
},
{
    image: 'localhost:5000/public/1st-floor-balcony.jpg',
    prix: 10000,
    surface: 100,
    pieces: 50,
    emplacement: 'Hydra',
    type: 'location'
},
{
    image: 'localhost:5000/public/benkhelifa_ID_6314.jpg',
    prix: 200000000,
    surface: 15,
    pieces: 24,
    emplacement: 'El Biar',
    type: 'vente'
},
{
    image: 'localhost:5000/public/29918960.jpg',
    prix: 400,
    surface: 300,
    pieces: 1,
    emplacement: 'Biskra',
    type: 'location'
}
];

biensRouter.use('/rent', (req, res) => {
    const rent = biens.filter((e) => {
        return e.type == 'location';
    });

    res.status(200).send(rent);
});

biensRouter.use('/buy', (req, res) => {
    const vente = biens.filter((e) => {
        return e.type == 'vente';
    });

    res.status(200).send(vente);
});

module.exports = biensRouter;