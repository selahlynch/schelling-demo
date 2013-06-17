//build starter object using closure
var sim = function(){

  var grid_size, agent_count, threshold;
  var agent_grid, agent_array;

  var available_positions = function(){
    var res = [];
    for(var i = 0; i < grid_size; i++){
      for(var j = 0; j < grid_size; j++){
        if(!agent_grid[i][j]){
          res.push([i,j]);
        }
      }
    }
    return res;
  };

  var is_happy = function(){};

  var place_new_agent = function(pos){
    agent = {
      state:1,
      pos_x:pos[0],
      pos_y:pos[1]
    };
    agent_grid[pos[0]][pos[1]] = agent;
    agent_array.push(agent);
  };

  return {
    init: function(gs, ac, th){
      grid_size = gs;
      agent_count = ac; 
      threshold = th;
      agent_grid = zeros([grid_size, grid_size]);
      agent_array = [];
      for(var i = 0; i < agent_count; i++){
        avpos = available_positions();
        new_pos = avpos[Math.floor(Math.random()*avpos.length)];
        place_new_agent(new_pos);
      }
    },

    update: function(){
    },

    bitmap: function(){
      return agent_grid;
    }

  };
}();








////functions external to this object/////

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}




