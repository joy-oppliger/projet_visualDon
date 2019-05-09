const entree_genre = require('../data/entrees_par_genre');
const annees = require('../data/entrees_annees');

//import "../dist/prepare_films_par_genre.js";


var chart = bb.generate({
  bindto: "#bubbleChart",
  data: {
    "x": "x",
    "xFormat": "%Y",
    json: {
      x: annees,
      fictions: entree_genre.map(({Fiction}) => Fiction),
      animations: entree_genre.map(({Animations}) => Animations),
      documentaires: entree_genre.map(({Documentaires}) => Documentaires)
    },
    "type": "bar",
    labels: true
  },
  "title": {
    "text": "1. Nombre d'entrées vendues dans les cinémas en Suisse romande pour des films de toute origine – Par année et par genre",
    "padding": {
      "bottom": 30
    }
  },
  "axis": {
    "x": {
      "type": "category"
    }/*,
    "y": {
      "max": 4500000,
      "min": 140000
    }*/
  },
  color: {
    pattern: [
      "#00f8cf",
      "#8bbaf9",
      "#df5460"
    ],
    tiles: function() {
      var pattern = d3.select(document.createElementNS(d3.namespaces.svg, "pattern"))
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", "6")
          .attr("height", "6");

      var g = pattern
          .append("g")
          .attr("fill-rule", "evenodd")
          .attr("stroke-width", 1)
          .append("g")
          .attr("fill", "rgb(255, 127, 14)");

      g.append("polygon").attr("points", "5 0 6 0 0 6 0 5");
      g.append("polygon").attr("points", "6 5 6 6 5 6");

      // Should return an array of SVGPatternElement
      return [
        pattern.node()
      ];
    }
  },
  "padding": {
    "bottom": 40
  },
  "size": {
    "height": 500
  }
});
