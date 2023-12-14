const express = require('express');
const questions = require('./questions.json');
const cors = require('cors');

// On require le fichier des routes pour notre table movies
const moviesRouter = require('./routes/movies');

// On créenotre application express
const app = express();

// On prend en charge les intéractions avec les données type JSON
app.use(express.json());

// On détaille les options pour les cors
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}  

// On utilise les cors sur l'ensemble de l'application
app.use(cors(corsOptions));

// On utilise notre fichier de route moviesRouter pour tous les endpoints avec /movies au début
app.use('/movies', moviesRouter);


// Première route de type GET pour le endpoint localhost:3000/
app.get('/', (req, res) => {
    console.log('Première route ok');
    res.status(200).send('C\'est bon !');
})

// Lister les questions vie une req GET
// app.get('/questions', (req, res) => {
//     res.status(200).json(questions);
// })

// Afficher une question précise 
// app.get('/question/:id', (req, res) => {
//     const { id } = req.params;
//     let question = questions.find(x => x.id == id);
//     question ? res.status(200).json(question) : res.status(404).send('Question introuvable');
// })

// Créer une nouvelle question avec POST 
// app.post('/question', (req, res) => {
//     const question = req.body;

//     questions.push(question);
//     res.status(200).json(questions);
// })

// On vient écouter les requetes sur le port 3000
app.listen('3000', () => {
    console.log('app is listening on port 3000');
})