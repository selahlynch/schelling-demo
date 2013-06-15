$(document).ready(function(){


  $("#init-button").click(function(){
    var user_grid_size = $("#grid-size-inp").val();
    var user_num_agents = $("#num-agents-inp").val();
    var user_agent_threshold = $("#agent_threshold-inp").val();
    data = initialize_grid(user_grid_size, user_num_agents, user_agent_threshold);
    grid = data.grid
    agent_array = data.agent_array
    $("#table-div").html(render_grid(grid));  
  });

  $("#update-button").click(function(){
    increment_agents(agent_array, grid);
    $("#table-div").html(render_grid(grid));
  });  

}); 














