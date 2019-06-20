

var grid = ["e0","e1","e2","e3","e4","e5","e6","e7","e8"];

$(document).ready(function() {
var players = 1;
var turns = 0;

function playerSwitch() {
  if (players === 1) {
    players = 2;
  } else {
    players = 1;
  }
}

function arrayWrite(gridNum) {
  if (grid[gridNum] === "X" || grid[gridNum] === "O") {
    playerSwitch();
    turns--;
  } else {
    if (players === 1) {
      grid[gridNum] = "X";
    } else {
      grid[gridNum] = "O";
    }
  }
}

function reset() {
  for (var i = 0; i < grid.length; i++) {
    grid[i] = "[ ]";
    gridWrite(i);
  }
  turns = 0;
}

function gridWrite(gridNum) {
  document.getElementById(gridNum).innerHTML = grid[gridNum];
}


function winCheck(x,y,z) {
  if (grid[x] === grid[y] && grid[x] === grid[z] && grid[x] != "[ ]") {
    alert(grid[x] + " Wins!");
    reset();
  }
}
//horzontal
function win() {
  winCheck(0,1,2);
  winCheck(3,4,5);
  winCheck(6,7,8);
  winCheck(0,3,6);
  winCheck(1,4,7);
  winCheck(2,5,8);
  winCheck(0,4,8);
  winCheck(2,4,6);
//   if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] != "[ ]") {
//     alert(grid[0] + " Wins!");
//     reset();
//   }
//   if (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] != "[ ]") {
//     alert(grid[3] + " Wins!");
//     reset();
//   }
//   if (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] != "[ ]") {
//     alert(grid[6] + " Wins!");
//     reset();
//   }
// //vertical
//   if (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] != "[ ]") {
//     alert(grid[0] + " Wins!");
//     reset();
//   }
//   if (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] != "[ ]") {
//     alert(grid[1] + " Wins!");
//     reset();
//   }
//   if (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] != "[ ]") {
//     alert(grid[2] + " Wins!");
//     reset();
//   }
// //diagnol
//   if (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] != "[ ]") {
//     alert(grid[0] + " Wins!");
//     reset();
//   }
//   if (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] != "[ ]") {
//     alert(grid[2] + " Wins!");
//     reset();
//   }
  if (turns === 9) {
    alert("Draw");
    reset();
  }




}
  $(".square").click(function() {
    var squareId = $(this).attr('id');
    turns++;
    arrayWrite(squareId);
    gridWrite(squareId);
    playerSwitch();
    win();
  });






});
