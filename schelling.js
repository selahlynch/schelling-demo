$(document).ready(function(){
  initialize(1);
  $("#init-button1").click(function(){
    initialize(1);
  });

  $("#update-button1").click(function(){
    update(1);
  });  

}); 



var initialize = function(i){
  var user_grid_size = $("#grid-size-inp"+i).val();
  var user_num_agents = $("#num-agents-inp"+i).val();
  var user_agent_threshold = $("#agent-threshold-inp"+i).val();

  sim[i].init(user_grid_size, user_num_agents, user_agent_threshold);
  print_table(i);
};

var update = function(i){
  sim[i].update();
  print_table(i);
};

var print_table = function(i){
  var tbl = render_grid(sim[i].bitmap());
  $("#table-div"+i).html(tbl);    
};








