

var grid = ["e0","e1","e2","e3","e4","e5","e6","e7","e8"];

$(document).ready(function() {
var players = 0;

function playerSwitch() {
  if (players === 0) {
    players = 1;
  } else {
    players = 0;
  }
}

function arrayWrite(gridNum) {
  if (players === 0) {
    grid[gridNum] = "X";
  } else {
    grid[gridNum] = "O";
  }
}

function gridWrite(gridNum) {
  document.getElementById(gridNum).innerHTML = grid[gridNum];
}

  $(".square").click(function() {
    var squareId = $(this).attr('id');
    arrayWrite(squareId);
    gridWrite(squareId);
    playerSwitch();
  });






});
