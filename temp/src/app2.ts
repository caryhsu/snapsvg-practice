
function draw(paper : Snap.Paper) {
    var block = paper.rect(100, 100, 100, 100, 20, 20);
    block.attr({
        fill: "yellow",
        stroke: "#1f2c39",
        strokeWidth: 3
    });
    block.drag();
}
