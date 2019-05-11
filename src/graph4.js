const data = require('../data/graph4.json');


var chart = bb.generate({
  bindto: "#donutChart",
  data: {
    json: {
      USA: data.map(({USA}) => USA),
      UE: data.map(({UE}) => UE),
      Suisse: data.map(({Suisse}) => Suisse),
      Autres: data.map(({Autres_pays}) => Autres_pays)
    },
    "type": "donut",
    //labels: true
  },
  bubble: {
    maxR: 80
  },
  legend: {
      color: "blue"
  },
  "axis": {
    "x": {
      "type": "category"
    },
    "y": {
      "max": 4500000,
      "min": 140000
    }
  },
  color: {
    pattern: [
      "#8bbaf9",
      "#df5460",
      "#5d54aa",
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
  },
  "tooltip": {
    show: false
  },
  "donut": {
    "label": {
        "threshold": 0
    }
  }
});
