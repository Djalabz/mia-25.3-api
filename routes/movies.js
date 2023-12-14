const express = require('express');
const router = express.Router();

const db = require('../config/db');

// On liste tous les films de la table Movies
router.get('/', (req, res) => {
    const sql = "SELECT * FROM Movies";

    db.query(sql, (err, results) => {
        if (err) {
            console.log('Erreur lors de l\'affichage des films');
            res.status(500).json({ message : err })
        } else {
            res.status(200).json(results);
        }
    } )
})

// Ajouter un film à la table Movies
router.post('/add', (req, res) => {
    const { imdbID, title, year, poster } = req.body;

    console.log(req.body);

    const sql = "INSERT INTO Movies(imdbID, title, year, poster) VALUES(?, ?, ?, ?)";

    db.query(sql, [imdbID, title, year, poster], (err, results) => {
        if (err) {
            console.log('Erreur lors de l\'ajout d\'un film');
            res.status(500).json({ message : err })
        } else {
            res.status(200).json(results);
        }
    })
})


module.exports = router;