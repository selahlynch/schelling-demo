$(document).ready(function(){
  renderTable();
  $("#render-button").click(function(){
    renderTable();
  });  
}); 

function renderTable(){
  //assuming the dom is laid out how i expect it to be
  var gridSize = $("#grid-size-inp").val();
  tbl = createTable(gridSize);
  var tds = tbl.find("td");
  var numAgents = $("#num-agents-inp").val();
  random_tds = select_n_items(tds, numAgents);
  random_tds.addClass("occupied");
  x = 1+1;
  $("#table-div").html(tbl);
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


function select_n_items(array, num_select)
{
  shuffled_array = shuffle(array);
  sliced_array = shuffled_array.slice(0,num_select);
  return sliced_array;
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};






