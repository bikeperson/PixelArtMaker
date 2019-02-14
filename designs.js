// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(rows, col, pickAColor ) {

  var grid = document.createElement('table');
  for (var r=0; r<rows; r++){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0; c< col; c++){
      var cell = tr.appendChild(document.createElement('td'));
      var x = r.toString();
      var y = c.toString();
      var ID = x + y;
      cell.id = ID
      cell.addEventListener("click", function(){
        document.getElementById(event.srcElement.id).style.background = pickAColor;})
      }
    }
  document.body.appendChild(grid);
  }

function getUserInput(){
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  var pickAColor = document.getElementById("colorPicker").value;
  makeGrid(height,width,pickAColor);
}

// Your code goes here!
