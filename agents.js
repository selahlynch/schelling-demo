//is this object too big??
var simGen = function(grid_size, agent_count, threshold){

  var agent_grid, agent_array;

  var init = function(gs, ac, th){ //maybe this isn't the best style??
    grid_size = gs;
    agent_count = ac; 
    threshold = th;
    agent_grid = zeros([grid_size, grid_size]);
    agent_array = [];
    for(var i = 0; i < agent_count; i++){
      place_new_agent(available_position());
    }
  };

  var available_position = function(){
    avpos = available_positions();
    return avpos[Math.floor(Math.random()*avpos.length)];
  };

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

  var is_happy = function(agent){
    var x = agent.pos_x;
    var y = agent.pos_y;
    var neighbor_count = 0;
    if (x-1 > 0 && agent_grid[x-1][y-1]) neighbor_count++;
    if (x-1 > 0 && agent_grid[x-1][y]) neighbor_count++;
    if (x-1 > 0 && agent_grid[x-1][y+1]) neighbor_count++;
    if (agent_grid[x][y-1]) neighbor_count++;
    if (agent_grid[x][y+1]) neighbor_count++;
    if (x+1 < agent_grid.length-1 && agent_grid[x+1][y-1]) neighbor_count++;
    if (x+1 < agent_grid.length-1 && agent_grid[x+1][y]) neighbor_count++;
    if (x+1 < agent_grid.length-1 && agent_grid[x+1][y+1]) neighbor_count++;
    return neighbor_count < threshold;    
  };
  
  var move_randomly = function(agent){
    old_pos = [agent.pos_x, agent.pos_y]
    new_pos = available_position();
    agent.pos_x = new_pos[0];
    agent.pos_y = new_pos[1];
    agent_grid[new_pos[0]][new_pos[1]] = agent;
    agent_grid[old_pos[0]][old_pos[1]] = 0;
  };

  var place_new_agent = function(pos){
    agent = {
      state:1,
      pos_x:pos[0],
      pos_y:pos[1]
    };
    agent_grid[pos[0]][pos[1]] = agent;
    agent_array.push(agent);
  };

  init(grid_size, agent_count, threshold);

  return {
    update: function(){
      for(var i = 0; i < agent_count; i++){
        if(!is_happy(agent_array[i])){
          move_randomly(agent_array[i]);
        }
      }
    },

    bitmap: function(){
      var x,y;
      var bitmap = zeros([grid_size, grid_size]);
      for(var i = 0; i < agent_count; i++){
        x = agent_array[i].pos_x;
        y = agent_array[i].pos_y;
        bitmap[x][y] = agent_array[i].state;
      }
      return bitmap;
    }

  };
};


////functions external to this object/////
//should I be putting this in the object???
//this is an external dependency!

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}




