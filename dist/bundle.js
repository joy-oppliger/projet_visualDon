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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const entree_genre = __webpack_require__(/*! ../data/entrees_par_genre */ \"./data/entrees_par_genre.json\");\nconst annees = __webpack_require__(/*! ../data/entrees_annees */ \"./data/entrees_annees.json\");\n\n//import \"../dist/prepare_films_par_genre.js\";\n\n\nvar chart = bb.generate({\n  bindto: \"#bubbleChart\",\n  data: {\n    \"x\": \"x\",\n    \"xFormat\": \"%Y\",\n    json: {\n      x: annees,\n      fictions: entree_genre.map(({Fiction}) => Fiction),\n      animations: entree_genre.map(({Animations}) => Animations),\n      documentaires: entree_genre.map(({Documentaires}) => Documentaires)\n    },\n    \"type\": \"bubble\",\n    //labels: true\n  },\n  bubble: {\n    maxR: 80\n  },\n  \"title\": {\n    \"text\": \"1. Nombre d'entrées vendues dans les cinémas en Suisse romande pour des films de toute origine – Par année et par genre\",\n    \"padding\": {\n      \"bottom\": 30\n    }\n  },\n  \"axis\": {\n    \"x\": {\n      \"type\": \"category\"\n    },\n    \"y\": {\n      \"max\": 4500000,\n      \"min\": 140000\n    }\n  },\n  color: {\n    pattern: [\n      \"#00f8cf\",\n      \"#8bbaf9\",\n      \"#df5460\"\n    ],\n    tiles: function() {\n      var pattern = d3.select(document.createElementNS(d3.namespaces.svg, \"pattern\"))\n          .attr(\"patternUnits\", \"userSpaceOnUse\")\n          .attr(\"width\", \"6\")\n          .attr(\"height\", \"6\");\n\n      var g = pattern\n          .append(\"g\")\n          .attr(\"fill-rule\", \"evenodd\")\n          .attr(\"stroke-width\", 1)\n          .append(\"g\")\n          .attr(\"fill\", \"rgb(255, 127, 14)\");\n\n      g.append(\"polygon\").attr(\"points\", \"5 0 6 0 0 6 0 5\");\n      g.append(\"polygon\").attr(\"points\", \"6 5 6 6 5 6\");\n\n      // Should return an array of SVGPatternElement\n      return [\n        pattern.node()\n      ];\n    }\n  },\n  \"padding\": {\n    \"bottom\": 40\n  },\n  \"size\": {\n    \"height\": 500\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });