$(document).ready(function(){

  var user_grid_size = $("#grid-size-inp").val();
  var user_num_agents = $("#num-agents-inp").val();
  var user_agent_threshold = $("#agent_threshold-inp").val();

  $("#table-div").html(render_grid(grid));
  $("#render-button").click(function(){
    increment_agents(agent_array, grid)
    $("#table-div").html(render_grid(grid));
  });  
}); 














