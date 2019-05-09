const data_1 = require('../data/test.json');
const annees = require('../data/entrees_annees');

//import "../dist/prepare_films_par_genre.js";


var chart = bb.generate({
    bindto: "#bubbleChart",
    "data": {
        "x": "x",
        "xFormat": "%Y",
        "columns": [
            annees,
            //["x", "2014", "2015", "2016", "2017", "2018"],
            data_1[0],
            data_1[1],
            data_1[2]
        ],
        "type": "bubble"
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
        },
        "y": {
            "max": 4500000,
            "min": -10000
        }
    },
    color: {
        pattern: [
            "#df5460",
            "#f1c957",
            "#48ebf7"
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
    bubble: {
        maxR: 60
    },
    "padding": {
        "bottom": 40
    },
    "size": {
        "height": 500
    }
});
