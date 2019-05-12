const succes = require('../data/graph3.json');

var chart = bb.generate({
    bindto: "#scatterChart",
    "data": {
        "x": "x",
        "xFormat": "%Y",
        json: {
          x: succes.map(({annee}) => annee),
          Entrées: succes.map(({entrees}) => entrees)
        },
        "type": "scatter"
    },
    "point": {
        pattern: [
          `<g>
              <path transform="translate(-28, -22)" d="M41.9,27c-0.1-0.2-0.4-0.3-0.7-0.2l-1.6,0.9L39.2,28v2.2l0.4,0.2c0,0,0,0,0,0l1.6,0.9c0.1,0.1,0.2,0.1,0.3,0.1
              c0.3,0,0.5-0.2,0.5-0.5v-1.9l0-1.9C41.9,27.1,41.9,27.1,41.9,27z"/>
  
              <path transform="translate(-28, -22)" d="M32.5,26.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C30.2,25.3,31.2,26.3,32.5,26.3z M32.5,23.1
              c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9C31.5,23.5,31.9,23.1,32.5,23.1z"/>
  
              <path transform="translate(-28, -22)" d="M38.2,26.4c-0.4,0.2-0.8,0.3-1.2,0.3c-0.5,0-1-0.2-1.5-0.4h-1.6c-0.4,0.3-0.9,0.4-1.5,0.4c-0.4,0-0.8-0.1-1.2-0.3
              c-0.3,0.2-0.6,0.6-0.6,0.9v3.4c0,0.6,0.5,1.1,1.1,1.1h5.8c0.6,0,1.1-0.5,1.1-1.1v-3.4C38.8,26.9,38.5,26.6,38.2,26.4z"/>
  
              <path transform="translate(-28, -22)" d="M37,26.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C34.7,25.3,35.7,26.3,37,26.3z M37,23.1
              c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9C36.1,23.5,36.5,23.1,37,23.1z"/>
          </g>`
        ]
    },
    "size": {
        "height": 550,
    },
    "padding": {
        "left": 220,
        "right": 220
    },
    "axis": {
        "y": {
            "min": 50000,
            "max": 620000,
            "show": true,
            "tick": {
                "format": function(x) {
                    return x/1000 + "K";
                 }
            }
        },
        "x": {
            "min": 1989.5,
            "max": 2017.5,
            "tick": {
                "multiline": true,
                "outer": true,
                "count": 28
            }
        }
    },
    "legend": {
        "show": false
    },
      "tooltip": {
        contents: ([{ index, value, }]) => {
            const { annee, titre, type, realisateur } = succes[index]
             return `<div style="background-color:#474083;
             padding:20px;
             padding-bottom: 8px !important;
             font-family:sans-serif;
             border-radius: 30px;">
             <p>${value} entrées ont été vendues <br> pour le film <b>"${titre}"</b><br>
             de type <b>${type}</b>, réalisé par <br> ${realisateur} en <b>${annee}</b></p>`
          }
      }
});

