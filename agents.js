//is this object too big??
var simGen = function(grid_size, agent_count, threshold){

  var agent_grid, agent_array;

  var init = function(gs, ac, th){ //maybe this isn't the best style??
    grid_size = gs;
    agent_count = ac; 
    threshold = th;
    agent_grid = zeros([grid_size, grid_size]);
    agent_array = [];
    for(var i = 0; i < agent_count/2; i++){
      place_new_agent(1);
    }
    for(var i = 0; i < agent_count/2; i++){
      place_new_agent(2);
    }
  };

  var available_position = function(){
    var avpos = available_positions();
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
    var state = agent.state;
    var pos_to_check = [];
    if (x-1 >= 0){
      pos_to_check.push([x-1,y-1]);
      pos_to_check.push([x-1,y]);
      pos_to_check.push([x-1,y+1]);
    }
    pos_to_check.push([x,y-1]);
    pos_to_check.push([x,y+1]);
    if(x+1 <= agent_grid.length-1){
      pos_to_check.push([x+1,y-1]);
      pos_to_check.push([x+1,y]);
      pos_to_check.push([x+1,y+1]);    
    }
    var similar_neighbor_count = 0;
    for(var i = 0; i < pos_to_check.length; i++){
      var xx = pos_to_check[i][0];
      var yy = pos_to_check[i][1];
      if(agent_grid[xx][yy] && agent_grid[xx][yy].state==state) similar_neighbor_count++;
    }

    //return[similar_neighbor_count, threshold, state];
    return similar_neighbor_count >= threshold;    
  };
  
  var move_randomly = function(agent){
    old_pos = [agent.pos_x, agent.pos_y]
    new_pos = available_position();
    agent.pos_x = new_pos[0];
    agent.pos_y = new_pos[1];
    agent_grid[new_pos[0]][new_pos[1]] = agent;
    agent_grid[old_pos[0]][old_pos[1]] = 0;
  };

  var place_new_agent = function(agent_state){
    var pos = available_position();
    var agent = {
      state:agent_state,
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

    //for testing
    //,
    //grid: function(){return agent_grid;},
    //is_happy: function(agent){return is_happy(agent);}

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




