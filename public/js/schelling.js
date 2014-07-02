var sim = [];
  
$(document).ready(function(){

  for(var j = 0; j<3; j++){
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

    $("#runstop"+j).click(function(){
      var save_j = j;
      return function(){
        runstop(save_j);
      };
    }());        
    
  }

}); 

var initialize = function(i){
  var user_grid_size = $("#grid-size-inp").val();
  var user_num_agents = $("#num-agents-inp").val();
  var user_agent_threshold = $("#agent-threshold-inp").val();
  delete sim[i];
  sim[i] = simGen(user_grid_size, user_num_agents, user_agent_threshold);
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

var runstop = function(i){
  var runstopButt, txt, newtxt, interval;
  runstopButt = $("#runstop"+i);
  txt = runstopButt.text();
  if (txt=="Run"){
    intervalId = setInterval(function(){update(i);}, 200);
    newtxt = "Stop";  
  }
  if (txt=="Stop"){
    clearInterval(intervalId);
    newtxt = "Run";
  }
  runstopButt.text(newtxt);
};






