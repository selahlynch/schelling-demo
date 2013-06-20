var sim = [];
  
$(document).ready(function(){

  for(var j = 1; j<=3; j++){
    sim[j] = simGen();
    initialize(j);
    $("#init-button"+j).click(function(){
      var save_j = j;
      return function(){
        initialize(save_j);
      };
    }());

    $("#update-button"+j).click(function(){
      var save_j = j;
      return function(){
        update(save_j);
      };
    }());    
  }

}); 

var initialize = function(i){
  var user_grid_size = $("#grid-size-inp").val();
  var user_num_agents = $("#num-agents-inp").val();
  var user_agent_threshold = $("#agent-threshold-inp").val();
  sim[i].init(user_grid_size, user_num_agents, user_agent_threshold);
  $("#param"+i).text("params: "+user_grid_size+" - "+user_num_agents+" - "+user_agent_threshold);
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








