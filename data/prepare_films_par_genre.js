/*const fetch = require('node-fetch')
const d3 = require('d3')
const R = require('ramda')*/
const fs = require('fs')

const data = require('./films_par_genre.json');


// CRÉER UN FICHIER POUR L'AXE DES X : LES ANNÉES
var annees = [];
for (var i in data) {
    annees.push(i)
}

console.log(annees);

const save_annees = array_annees => fs.writeFile('../data/entrees_annees.json', JSON.stringify(array_annees, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))

save_annees(annees)


// CRÉER UN FICHIER POUR LES DONNÉES SEULES
var genre_films = [];
for (var i in data) {
    console.log("test")
    genre_films.push(data[i])
}

console.log(genre_films);

const save_entrees_films = array_genre_films => fs.writeFile('../data/entrees_par_genre.json', JSON.stringify(array_genre_films, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))


save_entrees_films(genre_films)