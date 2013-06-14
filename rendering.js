function render_grid(grid){
  var gridSize = grid.length;
  var table = createTable(gridSize);
  for(var i = 0; i < gridSize; i++){
    for(var j = 0; j < gridSize; j++){
      this_td = table.find('tr').eq(i).children('td').eq(j);
      if (grid[i][j]){
        this_td.addClass('occupied');
      }
      else{
        this_td.removeClass('occupied');
      }
    }
  }
  return table;
}


function createTable(tableSize)
{
//not making any assumptions about DOM layout
  var table = $('<table></table>');
  for(i=0; i<tableSize; i++){
    var row = $('<tr></tr>');
    for(j=0; j<tableSize; j++){
      var cell = $('<td></td>');
      row.append(cell);
    }
    table.append(row);    
  }
  return table;
}








