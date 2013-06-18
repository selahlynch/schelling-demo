$(document).ready(function(){
  $("#init-button").click(function(){
    var user_grid_size = $("#grid-size-inp").val();
    var user_num_agents = $("#num-agents-inp").val();
    var user_agent_threshold = $("#agent-threshold-inp").val();

    sim.init(user_grid_size, user_num_agents, user_agent_threshold);
    var tbl = render_grid(sim.bitmap());
    $("#table-div").html(tbl);  
  });

  $("#update-button").click(function(){
    sim.update();
    var tbl = render_grid(sim.bitmap());
    $("#table-div").html(tbl);  
  });  

}); 














