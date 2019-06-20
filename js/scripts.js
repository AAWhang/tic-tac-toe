

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

 function imgWrite(gridVal) {
   if (gridVal === "[ ]") {
     return "<img src='img/empty.png'>";
   }
   if (gridVal === "X") {
     return "<img src='img/X.png'>";
   }
   if (gridVal === "O") {
     return "<img src='img/O.png'>";
   }
 }

function gridWrite(gridNum) {
  document.getElementById(gridNum).innerHTML = imgWrite(grid[gridNum]);
}


function winCheck(x,y,z) {
  if (grid[x] === grid[y] && grid[x] === grid[z] && grid[x] != "[ ]") {
    setTimeout(function() { alert(grid[x] + " Wins!"); reset();}, 100);
  }
}
function drawCheck() {
  if (turns === 9) {
    alert("Draw");
    reset();
  }
}
function win() {
  winCheck(0,1,2);
  winCheck(3,4,5);
  winCheck(6,7,8);
  winCheck(0,3,6);
  winCheck(1,4,7);
  winCheck(2,5,8);
  winCheck(0,4,8);
  winCheck(2,4,6);
  setTimeout(function() { drawCheck();}, 100);
  // horzontal
  // if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] != "[ ]") {
  //   alert(grid[0] + " Wins!");
  //   reset();
  // }
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
}
function player(squareId) {
  turns++;
  arrayWrite(squareId);
  gridWrite(squareId);
  playerSwitch();
  win();
  return;
}

function cpuE() {
  var squareId = Math.floor((Math.random() * 9));
  while (grid[squareId] === "X" || grid[squareId] === "O" && turns < 9) {
    var squareId = Math.floor((Math.random() * 9));
  }
  turns++;
  arrayWrite(squareId);
  gridWrite(squareId);
  playerSwitch();
  win();
  return;
}

function mvs(x,y,z,oi) {
  if (grid[x] === "X" && grid[y] === "X" && grid[z] === "[ ]" ) {
    return z;
  } else {
    return oi;
  }
}

function cpuH() {
  var squareId = 50;
  squareId = mvs(0,1,2,squareId);
  squareId = mvs(0,2,1,squareId);
  squareId = mvs(0,4,8,squareId);
  squareId = mvs(0,8,4,squareId);
  squareId = mvs(0,3,6,squareId);
  squareId = mvs(0,6,3,squareId);
  squareId = mvs(3,4,5,squareId);
  squareId = mvs(3,5,4,squareId);
  squareId = mvs(6,7,8,squareId);
  squareId = mvs(6,8,7,squareId);
  squareId = mvs(1,4,7,squareId);
  squareId = mvs(1,7,4,squareId);
  squareId = mvs(2,4,6,squareId);
  squareId = mvs(2,6,4,squareId);
  squareId = mvs(2,5,8,squareId);
  squareId = mvs(2,8,5,squareId);
  if (squareId === 50) {
    squareId = Math.floor((Math.random() * 9));
    while (grid[squareId] === "X" || grid[squareId] === "O" && turns < 9) {
      var squareId = Math.floor((Math.random() * 9));
    }
  }
  turns++;
  arrayWrite(squareId);
  gridWrite(squareId);
  playerSwitch();
  win();
  return;
}

  $(".square").click(function() {
    if (players === 1) {
      var squareId = $(this).attr('id');
      player(squareId);
    }else if (players === 2) {
      if (document.getElementById('game1').checked) {
        var squareId = $(this).attr('id');
        player(squareId);
      } else if (document.getElementById('game2').checked)  {
        cpuE();
      }else if (document.getElementById('game3').checked)  {
        cpuH();
      }
    }
  });

  $("#reset").click(function() {
    reset();
    playerSwitch();
  });




});
