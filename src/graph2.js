const data = require('../data/graph2.json');

var filter_duree = "longs";

let filtered_data = data.filter(d => d.durée == filter_duree);

var chart = bb.generate({
  bindto: "#barChart",
  data: {
    "x": "x",
    "xFormat": "%Y",
    json: {
      x: data.map(({année}) => année),
      fictions: filtered_data.map(({fictions}) => fictions),
      animations: filtered_data.map(({animations}) => animations),
      documentaires: filtered_data.map(({documentaires}) => documentaires)
    },
    "type": "bar"
  },/*
  "tooltip": {
    contents: ([{ index, value, }]) => {
      const { animations, fictions, documentaires } = filtered_data[index]
      if(filter_duree=="longs") {
            return `<div style="background-color:#80abe8;
            padding:20px;
            padding-bottom: 8px !important;
            font-family:sans-serif;
            border-radius: 30px;">
            <p>${value} longs-métrages`
        } else {
          return `<div style="background-color:#80abe8;
          padding:20px;
          padding-bottom: 8px !important;
          font-family:sans-serif;
          border-radius: 30px;">
          <p>${value} courts-métrages`
        }
      }
  },*/
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


$(".sort").on('click', () => {
  filter_duree = $(event.currentTarget).val();
  $(".sort").removeClass("active");
  $(event.currentTarget).addClass("active");

  let lastselected = data.filter(d=> d.duree == 'longs');
  
  nouvelle_data = data.filter(d => d.durée == filter_duree);

  let test = nouvelle_data.map(d => d.fictions);

  console.log(test);

  chart.load({
    json: {
      x: data.map(({année}) => année),
      fictions: nouvelle_data.map(d => d.fictions),
      animations: nouvelle_data.map(d => d.animations),
      documentaires: nouvelle_data.map(d => d.documentaires)
    }
  });

  chart.unload({
    ids: lastselected
  });
});
