import $ from './jquery.js';
console.log($);
require('style-loader!css-loader!../css/style.css');
// require("file-loader!../img/bg.jpg");

import {tmpl} from "./tmpl.js";
import {Model} from "./model.js";
import {View} from "./view.js";
import {Controller} from "./controller.js";



$(function() {

  var firstToDoList = ['learn js', 'learn html', 'learn css'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);

});
