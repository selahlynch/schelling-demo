$(document).ready(function(){
  $("button").click(function(){
    var gridSize = $("#grid-size").val();
    tbl = createTable(gridSize)
    $("#table-div").text("Putting table here of size " + gridSize + " :)");
    $("#table-div").append(tbl);
  });
}); 


function createTable(tableSize)
{
  var table = $('<table></table>');
  for(i=0; i<tableSize; i++){
    var row = $('<tr></tr>');
    for(j=0; j<tableSize; j++){
      var cell = $('<td></td>').text(" " + i + j);
      row.append(cell);
    }
    table.append(row);    
  }
  return table;
}











