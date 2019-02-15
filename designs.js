

// This fuction create the grid and add the listener to each element

function makeGrid(rows, col) {

  var grid = document.createElement('table');
  for (var r=0; r<rows; r++){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0; c< col; c++){
      var cell = tr.appendChild(document.createElement('td'));
      var x = r.toString();
      var y = c.toString();
      var ID = x + y;
      cell.id = ID;
      //add listener and paint different color
      cell.addEventListener("click", function(){
        var pickAColor = document.getElementById("colorPicker").value;
        document.getElementById(event.srcElement.id).style.background = pickAColor;})
      }
    }
  document.body.appendChild(grid);
  }

  // this fuction collect the user grid input and execute the grid function
function getUserInput(){
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  makeGrid(height,width);
}
