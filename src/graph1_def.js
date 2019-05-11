const data = require('../data/graph1.json');
const R = require('Ramda');

var filter_type = "entrées";
var filter_zone = "suisse";


$(".filter").on('click', () => {
  filter_type = $(event.currentTarget).val();
  $(".filter").removeClass("active");
  $(event.currentTarget).addClass("active");

  chart.unload();
  
  filtered_data = data.filter(d => d.type == filter_type);
  filtered_data_2 = filtered_data.filter(d => d.zone == filter_zone);

  chart.load({
    json: {
      fictions: filtered_data_2.map(({fictions}) => fictions),
      animations: filtered_data_2.map(({animations}) => animations),
      documentaires: filtered_data_2.map(({documentaires}) => documentaires)
    }});
});

$('#select').on('change', evt => {
  filter_zone = $("#select option:selected").val();
  test = $("#select option:selected").val();
  console.log(filter_zone);
  console.log(test);

  chart.unload();

  // RECHERCHE LE PAYS EN FONCTION DU CODE SELECTIONNÉ
  filtered_data = data.filter(d => d.type == filter_type);
  filtered_data_2 = filtered_data.filter(d => d.zone == filter_zone);
  

  chart.load({
    json: {
      fictions: filtered_data_2.map(({fictions}) => fictions),
      animations: filtered_data_2.map(({animations}) => animations),
      documentaires: filtered_data_2.map(({documentaires}) => documentaires)
    }});
});


let filtered_data = data.filter(d => d.type == filter_type);
let filtered_data_2 = filtered_data.filter(d => d.zone == filter_zone);


var chart = bb.generate({
  bindto: "#pieChart",
  data: {
    json: {
      fictions: filtered_data_2.map(({fictions}) => fictions),
      animations: filtered_data_2.map(({animations}) => animations),
      documentaires: filtered_data_2.map(({documentaires}) => documentaires)
    },
    "type": "pie",
    //labels: true
  },
  bubble: {
    maxR: 80
  },
  "pie": {
    "label": {
      "threshold": 0
    }
  },
  "tooltip": {
    contents: ([{ value, }]) => {
      if(filter_type=="entrées") {
            return `<div style="background-color:#80abe8;
            padding:20px;
            padding-bottom: 8px !important;
            font-family:sans-serif;
            border-radius: 30px;">
            <p>${Math.round(value/1000)}K entrées`
        } else {
          return `<div style="background-color:#80abe8;
          padding:20px;
          padding-bottom: 8px !important;
          font-family:sans-serif;
          border-radius: 30px;">
          <p>${value} films`
        }
      }
  },
  color: {
    pattern: [
      "#5d54aa",
      "#df5460",
      "#ff9978"
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
          .attr("fill", "black");

      g.append("polygon").attr("points", "5 0 6 0 0 6 0 5");
      g.append("polygon").attr("points", "6 5 6 6 5 6");

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




let zone = R.uniq(data.map(d => d.zone));

console.log(zone);


for (i=1; i<zone.length; i++) {
  let newOption = `<option value=${zone[i]}>Suisse `+zone[i]+'</option>';
  $('#select').append(newOption);
}