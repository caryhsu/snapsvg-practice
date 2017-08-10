
var paper = Snap("#svg");

var block = paper.rect(100, 100, 100, 100, 20, 20);
block.attr({
    fill: "rgb(236, 240, 241)",
    stroke: "#1f2c39",
    strokeWidth: 3
});

block.drag();
