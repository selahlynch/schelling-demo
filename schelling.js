$(document).ready(function(){
  initialize();
  $("#init-button").click(function(){
    initialize();
  });

  $("#update-button").click(function(){
    update();
  });  

}); 


var update = function(){
  sim.update();
  print_table();
};

var initialize = function(){
  var user_grid_size = $("#grid-size-inp").val();
  var user_num_agents = $("#num-agents-inp").val();
  var user_agent_threshold = $("#agent-threshold-inp").val();

  sim.init(user_grid_size, user_num_agents, user_agent_threshold);
  print_table();
};


var print_table = function(){
  var tbl = render_grid(sim.bitmap());
  $("#table-div").html(tbl);    
};








