/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/entrees_annees.json":
/*!**********************************!*\
  !*** ./data/entrees_annees.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [\"2014\",\"2015\",\"2016\",\"2017\",\"2018\"];\n\n//# sourceURL=webpack:///./data/entrees_annees.json?");

/***/ }),

/***/ "./data/entrees_par_genre.json":
/*!*************************************!*\
  !*** ./data/entrees_par_genre.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = [{\"Animations\":\"548761\",\"Documentaires\":\"106116\",\"Fiction\":\"3435164\"},{\"Animations\":\"693270\",\"Documentaires\":\"87976\",\"Fiction\":\"3472612\"},{\"Animations\":\"865689\",\"Documentaires\":\"216198\",\"Fiction\":\"3302362\"},{\"Animations\":\"768627\",\"Documentaires\":\"187072\",\"Fiction\":\"3270279\"},{\"Animations\":\"550774\",\"Documentaires\":\"151267\",\"Fiction\":\"3028766\"}];\n\n//# sourceURL=webpack:///./data/entrees_par_genre.json?");

/***/ }),

/***/ "./data/graph3.json":
/*!**************************!*\
  !*** ./data/graph3.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, default */
/***/ (function(module) {

eval("module.exports = [{\"titre\":\"Voyage vers l'espoir\",\"realisateur\":\"Xavier Koller\",\"type\":\"Fiction\",\"annee\":\"1990\",\"entrees\":\"112287\"},{\"titre\":\"Der Berg\",\"realisateur\":\"Markus Imhoof\",\"type\":\"Fiction\",\"annee\":\"1990\",\"entrees\":\"61826\"},{\"titre\":\"Le Congrès des pingouins\",\"realisateur\":\"Hans-Ulrich Schlumpf\",\"type\":\"Documentaire\",\"annee\":\"1993\",\"entrees\":\"126112\"},{\"titre\":\"Silence brisé\",\"realisateur\":\"Wolfgang Panzer\",\"type\":\"Fiction\",\"annee\":\"1995\",\"entrees\":\"83256\"},{\"titre\":\"Katzendiebe\",\"realisateur\":\"Markus Imboden\",\"type\":\"Fiction\",\"annee\":\"1996\",\"entrees\":\"109520\"},{\"titre\":\"L'art de guérir\",\"realisateur\":\"Franz Reichle\",\"type\":\"Documentaire\",\"annee\":\"1997\",\"entrees\":\"104509\"},{\"titre\":\"Pleine lune\",\"realisateur\":\"Fredi M. Murer\",\"type\":\"Fiction\",\"annee\":\"1998\",\"entrees\":\"72758\"},{\"titre\":\"Beresina\",\"realisateur\":\"Daniel Schmid\",\"type\":\"Fiction\",\"annee\":\"1999\",\"entrees\":\"119924\"},{\"titre\":\"Komiker\",\"realisateur\":\"Markus Imboden\",\"type\":\"Fiction\",\"annee\":\"2000\",\"entrees\":\"157776\"},{\"titre\":\"Azzurro\",\"realisateur\":\"Denis Rabaglia\",\"type\":\"Fiction\",\"annee\":\"2000\",\"entrees\":\"97684\"},{\"titre\":\"Heidi\",\"realisateur\":\"Markus Imboden\",\"type\":\"Fiction\",\"annee\":\"2001\",\"entrees\":\"82283\"},{\"titre\":\"Das Fähnlein der sieben Aufrechten\",\"realisateur\":\"Simon Aeby\",\"type\":\"Fiction\",\"annee\":\"2001\",\"entrees\":\"60489\"},{\"titre\":\"Micmac à la Havane\",\"realisateur\":\"Sabine Boss\",\"type\":\"Fiction\",\"annee\":\"2002\",\"entrees\":\"313617\"},{\"titre\":\"Pourquoi êtes-vous si tristes?\",\"realisateur\":\"Friedrich Kappeler\",\"type\":\"Documentaire\",\"annee\":\"2002\",\"entrees\":\"146137\"},{\"titre\":\"À vos marques, prêts, Charlie !\",\"realisateur\":\"Mike Eschmann\",\"type\":\"Fiction\",\"annee\":\"2003\",\"entrees\":\"560523\"},{\"titre\":\"Mais im Bundeshuus : Le Génie helvétique\",\"realisateur\":\"Jean-Stéphane Bron\",\"type\":\"Documentaire\",\"annee\":\"2003\",\"entrees\":\"105083\"},{\"titre\":\"Elisabeth Kubler-Ross\",\"realisateur\":\"Stefan Haupt\",\"type\":\"Documentaire\",\"annee\":\"2003\",\"entrees\":\"67518\"},{\"titre\":\"Sternenberg\",\"realisateur\":\"Christoph Schaub\",\"type\":\"Fiction\",\"annee\":\"2004\",\"entrees\":\"124839\"},{\"titre\":\"The Ring Thing\",\"realisateur\":\"Marc Schippert\",\"type\":\"Fiction\",\"annee\":\"2004\",\"entrees\":\"67637\"},{\"titre\":\"Je m'appelle Eugen\",\"realisateur\":\"Michael Steiner\",\"type\":\"Fiction\",\"annee\":\"2005\",\"entrees\":\"580183\"},{\"titre\":\"Grounding - les derniers jours de Swissair\",\"realisateur\":\"Michael Steiner, Tobias Fueter\",\"type\":\"Fiction\",\"annee\":\"2005\",\"entrees\":\"377710\"},{\"titre\":\"Snow White\",\"realisateur\":\"Samir\",\"type\":\"Fiction\",\"annee\":\"2005\",\"entrees\":\"86627\"},{\"titre\":\"Les mamies ne font pas dans la dentelle\",\"realisateur\":\"Bettina Oberli\",\"type\":\"Fiction\",\"annee\":\"2006\",\"entrees\":\"596220\"},{\"titre\":\"VITUS\",\"realisateur\":\"Fredi M. Murer\",\"type\":\"Fiction\",\"annee\":\"2006\",\"entrees\":\"271230\"},{\"titre\":\"Handyman\",\"realisateur\":\"Jürg Ebe\",\"type\":\"Fiction\",\"annee\":\"2006\",\"entrees\":\"207490\"},{\"titre\":\"Jeune Homme\",\"realisateur\":\"Christoph Schaub\",\"type\":\"Fiction\",\"annee\":\"2006\",\"entrees\":\"100433\"},{\"titre\":\"Das Fräulein\",\"realisateur\":\"Andrea Staka\",\"type\":\"Fiction\",\"annee\":\"2006\",\"entrees\":\"68340\"},{\"titre\":\"Alpine Saga\",\"realisateur\":\"Erich Langjahr\",\"type\":\"Documentaire\",\"annee\":\"2006\",\"entrees\":\"63829\"},{\"titre\":\"Breakout\",\"realisateur\":\"Mike Eschmann\",\"type\":\"Fiction\",\"annee\":\"2007\",\"entrees\":\"65293\"},{\"titre\":\"La Disparition de Julia\",\"realisateur\":\"Christoph Schaub\",\"type\":\"Fiction\",\"annee\":\"2009\",\"entrees\":\"195569\"},{\"titre\":\"Die Standesbeamtin\",\"realisateur\":\"Micha Lewinsky\",\"type\":\"Fiction\",\"annee\":\"2009\",\"entrees\":\"78365\"},{\"titre\":\"Sennentuntschi\",\"realisateur\":\"Michael Steiner\",\"type\":\"Fiction\",\"annee\":\"2010\",\"entrees\":\"143444\"},{\"titre\":\"La Petite Chambre\",\"realisateur\":\"Stéphanie Chuat, Véronique Reymond\",\"type\":\"Fiction\",\"annee\":\"2010\",\"entrees\":\"78761\"},{\"titre\":\"L'Enfance volée\",\"realisateur\":\"Markus Imboden\",\"type\":\"Fiction\",\"annee\":\"2011\",\"entrees\":\"250046\"},{\"titre\":\"Les enfants de la montagne\",\"realisateur\":\"Alice Schmid\",\"type\":\"Documentaire\",\"annee\":\"2011\",\"entrees\":\"77581\"},{\"titre\":\"Des abeilles et des hommes\",\"realisateur\":\"Markus Imhoof\",\"type\":\"Documentaire\",\"annee\":\"2012\",\"entrees\":\"254827\"},{\"titre\":\"Hiver nomade\",\"realisateur\":\"Manuel von Stürler\",\"type\":\"Documentaire\",\"annee\":\"2012\",\"entrees\":\"69923\"},{\"titre\":\"Paul Grüninger, le juste\",\"realisateur\":\"Alain Gsponer\",\"type\":\"Fiction\",\"annee\":\"2012\",\"entrees\":\"64164\"},{\"titre\":\"L'Enfant d'en haut\",\"realisateur\":\"Ursula Meier\",\"type\":\"Fiction\",\"annee\":\"2012\",\"entrees\":\"61130\"},{\"titre\":\"Achtung, fertig, WK!\",\"realisateur\":\"Oliver Rihs\",\"type\":\"Fiction\",\"annee\":\"2013\",\"entrees\":\"177051\"},{\"titre\":\"Der Goalie bin ig\",\"realisateur\":\"Sabine Boss\",\"type\":\"Fiction\",\"annee\":\"2013\",\"entrees\":\"139432\"},{\"titre\":\"Une cloche pour Ursli\",\"realisateur\":\"Xavier Koller\",\"type\":\"Fiction\",\"annee\":\"2014\",\"entrees\":\"454850\"},{\"titre\":\"Usfahrt Oerlike\",\"realisateur\":\"Paul Riniker\",\"type\":\"Fiction\",\"annee\":\"2014\",\"entrees\":\"81633\"},{\"titre\":\"Der grosse Sommer\",\"realisateur\":\"Stefan Jäger\",\"type\":\"Fiction\",\"annee\":\"2015\",\"entrees\":\"79208\"},{\"titre\":\"Giovanni Segantini: Magie des Lichts\",\"realisateur\":\"Christian Labhart\",\"type\":\"Documentaire\",\"annee\":\"2015\",\"entrees\":\"72449\"},{\"titre\":\"Les Conquérantes\",\"realisateur\":\"Petra Volpe\",\"type\":\"Fiction\",\"annee\":\"2016\",\"entrees\":\"355774\"},{\"titre\":\"Ma vie de courgette\",\"realisateur\":\"Barras Claude\",\"type\":\"Animation\",\"annee\":\"2016\",\"entrees\":\"178299\"},{\"titre\":\"Le merveilleux voyage de Wolkenbruch\",\"realisateur\":\"Michael Steiner\",\"type\":\"Fiction\",\"annee\":\"2017\",\"entrees\":\"240817\"},{\"titre\":\"Papa Moll\",\"realisateur\":\"Manuel Flurin Hendry\",\"type\":\"Fiction\",\"annee\":\"2017\",\"entrees\":\"143168\"},{\"titre\":\"Une dernière touche\",\"realisateur\":\"Rolf Lyssy\",\"type\":\"Fiction\",\"annee\":\"2017\",\"entrees\":\"118668\"}];\n\n//# sourceURL=webpack:///./data/graph3.json?");

/***/ }),

/***/ "./data/graph4.json":
/*!**************************!*\
  !*** ./data/graph4.json ***!
  \**************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = [{\"Zone\":\"Suisse\",\"Entrées_milliers\":\"11740.4\",\"Suisse\":\"6.4\",\"USA\":\"67.1\",\"UE\":\"23.1\",\"Autres_pays\":\"3.5\"},{\"Zone\":\"Suisse al\",\"Entrées_milliers\":\"7708.4\",\"Suisse\":\"7.7\",\"USA\":\"68.2\",\"UE\":\"21.2\",\"Autres_pays\":\"3\"},{\"Zone\":\"Suisse ro\",\"Entrées_milliers\":\"3730.8\",\"Suisse\":\"3.6\",\"USA\":\"63.8\",\"UE\":\"28.1\",\"Autres_pays\":\"4.5\"},{\"Zone\":\"Suisse it\",\"Entrées_milliers\":\"301.2\",\"Suisse\":\"6.3\",\"USA\":\"79.5\",\"UE\":\"11.8\",\"Autres_pays\":\"2.4\"}];\n\n//# sourceURL=webpack:///./data/graph4.json?");

/***/ }),

/***/ "./src/graph1.js":
/*!***********************!*\
  !*** ./src/graph1.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const entree_genre = __webpack_require__(/*! ../data/entrees_par_genre */ \"./data/entrees_par_genre.json\");\nconst annees = __webpack_require__(/*! ../data/entrees_annees */ \"./data/entrees_annees.json\");\n\n//import \"../dist/prepare_films_par_genre.js\";\n\n\nvar chart = bb.generate({\n  bindto: \"#bubbleChart\",\n  data: {\n    \"x\": \"x\",\n    \"xFormat\": \"%Y\",\n    json: {\n      x: annees,\n      fictions: entree_genre.map(({Fiction}) => Fiction),\n      animations: entree_genre.map(({Animations}) => Animations),\n      documentaires: entree_genre.map(({Documentaires}) => Documentaires)\n    },\n    \"type\": \"bubble\",\n    //labels: true\n  },\n  bubble: {\n    maxR: 80\n  },\n  \"title\": {\n    \"text\": \"1. Nombre d'entrées vendues dans les cinémas en Suisse romande pour des films de toute origine – Par année et par genre\",\n    \"padding\": {\n      \"bottom\": 30\n    }\n  },\n  \"axis\": {\n    \"x\": {\n      \"type\": \"category\"\n    },\n    \"y\": {\n      \"max\": 4500000,\n      \"min\": 140000\n    }\n  },\n  color: {\n    pattern: [\n      \"#00f8cf\",\n      \"#8bbaf9\",\n      \"#df5460\"\n    ],\n    tiles: function() {\n      var pattern = d3.select(document.createElementNS(d3.namespaces.svg, \"pattern\"))\n          .attr(\"patternUnits\", \"userSpaceOnUse\")\n          .attr(\"width\", \"6\")\n          .attr(\"height\", \"6\");\n\n      var g = pattern\n          .append(\"g\")\n          .attr(\"fill-rule\", \"evenodd\")\n          .attr(\"stroke-width\", 1)\n          .append(\"g\")\n          .attr(\"fill\", \"rgb(255, 127, 14)\");\n\n      g.append(\"polygon\").attr(\"points\", \"5 0 6 0 0 6 0 5\");\n      g.append(\"polygon\").attr(\"points\", \"6 5 6 6 5 6\");\n\n      // Should return an array of SVGPatternElement\n      return [\n        pattern.node()\n      ];\n    }\n  },\n  \"padding\": {\n    \"bottom\": 40\n  },\n  \"size\": {\n    \"height\": 500\n  }\n});\n\n\n//# sourceURL=webpack:///./src/graph1.js?");

/***/ }),

/***/ "./src/graph3.js":
/*!***********************!*\
  !*** ./src/graph3.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst succes = __webpack_require__(/*! ../data/graph3.json */ \"./data/graph3.json\");\n\n\nvar chart = bb.generate({\n    bindto: \"#scatterChart\",\n    \"data\": {\n        \"x\": \"x\",\n        \"xFormat\": \"%Y\",\n        json: {\n          x: succes.map(({annee}) => annee),\n          Entrées: succes.map(({entrees}) => entrees)\n        },\n        \"type\": \"scatter\"\n    },\n    \"point\": {\n        pattern: [\n          `<g>\n              <path fill=\"white\" transform=\"translate(-28, -22)\" d=\"M41.9,27c-0.1-0.2-0.4-0.3-0.7-0.2l-1.6,0.9L39.2,28v2.2l0.4,0.2c0,0,0,0,0,0l1.6,0.9c0.1,0.1,0.2,0.1,0.3,0.1\n              c0.3,0,0.5-0.2,0.5-0.5v-1.9l0-1.9C41.9,27.1,41.9,27.1,41.9,27z\"/>\n  \n              <path transform=\"translate(-28, -22)\" d=\"M32.5,26.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C30.2,25.3,31.2,26.3,32.5,26.3z M32.5,23.1\n              c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9c-0.5,0-0.9-0.4-0.9-0.9C31.5,23.5,31.9,23.1,32.5,23.1z\"/>\n  \n              <path transform=\"translate(-28, -22)\" d=\"M38.2,26.4c-0.4,0.2-0.8,0.3-1.2,0.3c-0.5,0-1-0.2-1.5-0.4h-1.6c-0.4,0.3-0.9,0.4-1.5,0.4c-0.4,0-0.8-0.1-1.2-0.3\n              c-0.3,0.2-0.6,0.6-0.6,0.9v3.4c0,0.6,0.5,1.1,1.1,1.1h5.8c0.6,0,1.1-0.5,1.1-1.1v-3.4C38.8,26.9,38.5,26.6,38.2,26.4z\"/>\n  \n              <path transform=\"translate(-28, -22)\" d=\"M37,26.3c1.3,0,2.3-1,2.3-2.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3C34.7,25.3,35.7,26.3,37,26.3z M37,23.1\n              c0.5,0,0.9,0.4,0.9,0.9c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9C36.1,23.5,36.5,23.1,37,23.1z\"/>\n          </g>`\n        ]\n    },\n    \"size\": {\n        \"height\": 550\n    },\n    \"axis\": {\n        \"y\": {\n            \"min\": 50000,\n            \"max\": 620000,\n            \"show\": true,\n            \"tick\": {\n                \"format\": function(x) {\n                    return x/1000 + \"K\";\n                 }\n            }\n        },\n        \"x\": {\n            \"min\": 1990,\n            \"max\": 2017,\n            \"tick\": {\n                \"multiline\": true,\n                \"outer\": true,\n                \"count\": 28\n            }\n        }\n    },\n    \"legend\": {\n        \"show\": false\n    },\n      \"tooltip\": {\n        contents: ([{ index, value, }]) => {\n            const { annee, titre, type, realisateur } = succes[index]\n             return `<div style=\"background-color:#474083;\n             padding:20px;\n             padding-bottom: 8px !important;\n             font-family:sans-serif;\n             border-radius: 30px;\">\n             <p>${value} entrées ont été vendues <br> pour le film <b>\"${titre}\"</b><br>\n             de type <b>${type}</b>, réalisé par <br> ${realisateur} en <b>${annee}</b></p>`\n          }\n      }\n});\n\n//# sourceURL=webpack:///./src/graph3.js?");

/***/ }),

/***/ "./src/graph4.js":
/*!***********************!*\
  !*** ./src/graph4.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const data = __webpack_require__(/*! ../data/graph4.json */ \"./data/graph4.json\");\n\n\nvar chart = bb.generate({\n  bindto: \"#donutChart\",\n  data: {\n    json: {\n      Suisse: data.map(({Suisse}) => Suisse),\n      USA: data.map(({USA}) => USA),\n      UE: data.map(({UE}) => UE),\n      Autres: data.map(({Autres_pays}) => Autres_pays)\n    },\n    \"type\": \"donut\",\n    //labels: true\n  },\n  bubble: {\n    maxR: 80\n  },\n  legend: {\n      color: \"blue\"\n  },\n  \"axis\": {\n    \"x\": {\n      \"type\": \"category\"\n    },\n    \"y\": {\n      \"max\": 4500000,\n      \"min\": 140000\n    }\n  },\n  color: {\n    pattern: [\n      \"#ff9978\",\n      \"#8bbaf9\",\n      \"#df5460\",\n      \"#5d54aa\"\n    ],\n    tiles: function() {\n      var pattern = d3.select(document.createElementNS(d3.namespaces.svg, \"pattern\"))\n          .attr(\"patternUnits\", \"userSpaceOnUse\")\n          .attr(\"width\", \"6\")\n          .attr(\"height\", \"6\");\n\n      var g = pattern\n          .append(\"g\")\n          .attr(\"fill-rule\", \"evenodd\")\n          .attr(\"stroke-width\", 1)\n          .append(\"g\")\n          .attr(\"fill\", \"black\");\n\n      g.append(\"polygon\").attr(\"points\", \"5 0 6 0 0 6 0 5\");\n      g.append(\"polygon\").attr(\"points\", \"6 5 6 6 5 6\");\n\n      // Should return an array of SVGPatternElement\n      return [\n        pattern.node()\n      ];\n    }\n  },\n  \"padding\": {\n    \"bottom\": 40\n  },\n  \"size\": {\n    \"height\": 500\n  },\n  \"tooltip\": {\n    show: false\n  },\n  \"donut\": {\n    \"label\": {\n        \"threshold\": 0\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/graph4.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_graph1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/graph1 */ \"./src/graph1.js\");\n/* harmony import */ var _src_graph1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_graph1__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_graph4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/graph4 */ \"./src/graph4.js\");\n/* harmony import */ var _src_graph4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_graph4__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_graph3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/graph3 */ \"./src/graph3.js\");\n/* harmony import */ var _src_graph3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_graph3__WEBPACK_IMPORTED_MODULE_2__);\n\n//import \"../src/graph2\";\n//import \"../src/graph1_def\";\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });