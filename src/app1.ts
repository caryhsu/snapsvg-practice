/// <reference path="../node_modules/@types/raphael/index.d.ts" />

var w = window.innerWidth;
var h = window.innerHeight;
var paper = Snap("#svg");

// Lets create big circle in the middle:
var bigCircle = paper.circle(150, 150, 100);

