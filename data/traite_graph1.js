//const fetch = require('node-fetch')
const d3 = require('d3')
const R = require('ramda')
const fs = require('fs')

const data = require('./graph1.json');


// CRÉER UN FICHIER POUR L'AXE DES X : LES ANNÉES
var annees = [];
for (var i in data) {
    annees.push(i)
}

const save_annees = array_annees => fs.writeFile('../data/graph1_axeX.json', JSON.stringify(array_annees, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))

save_annees(annees)



//R.path(['personalData'], data)



/*
// CRÉER UN FICHIER POUR LES DONNÉES SEULES
var graph1_data = [];
for (var i in data) {
    console.log("test")
    graph1_data.push(data[i])
}

console.log(graph1_data);

const save_data = array_graph1_data => fs.writeFile('../data/graph1_data.json', JSON.stringify(array_graph1_data, null, 2), 'utf-8', err => err ? console.log(err): console.log('Fichier prêt'))


save_data(graph1_data)*/