grid_size = 3;
num_agents = 4;
neighbor_threshold = 1;

//make a grid full of zeros
grid = zeros([grid_size, grid_size]);

//make a set of agents
dummy_agent = {
  type:0,
  pos_x:0,
  pos_y:0
}

var agent_array = [];

//initializing the agents
for (var i=0;i<num_agents;i++)
{
  agent_array.push(Object.create(dummy_agent));
  agent_array[i].type = 1;
  set_to_random_available_pos(agent_array[i], grid);
}

function increment_agents(agent_array, grid){
  for(var i = 0; i < agent_array.length; i++){
    var agent = agent_array[i];
    if (num_neighbors(agent, grid) > neighbor_threshold){
      set_to_random_available_pos(agent, grid);    
    }
  }
}

function num_neighbors(agent, grid){
  var x = agent.pos_x;
  var y = agent.pos_y;
  var neighbors = 0;
  if (x-1 > 0 && grid[x-1][y-1]) neighbors++;
  if (x-1 > 0 && grid[x-1][y]) neighbors++;
  if (x-1 > 0 && grid[x-1][y+1]) neighbors++;
  if (grid[x][y-1]) neighbors++;
  if (grid[x][y+1]) neighbors++;
  if (x+1 < grid.length-1 && grid[x+1][y-1]) neighbors++;
  if (x+1 < grid.length-1 && grid[x+1][y]) neighbors++;
  if (x+1 < grid.length-1 && grid[x+1][y+1]) neighbors++;
  return neighbors;
}


function set_to_random_available_pos(agent, grid){
  avail_pos_array = avail_pos(grid);
  var new_pos = avail_pos_array[Math.floor(Math.random()*avail_pos_array.length)];
  var old_pos = [agent.pos_x, agent.pos_y];
  grid[old_pos[0]][old_pos[1]] = 0;
  grid[new_pos[0]][new_pos[1]] = agent;
  agent.pos_x = new_pos[0];
  agent.pos_y = new_pos[1];
}

function avail_pos(grid){
  avail_pos_array = [];
  for(var i = 0; i<grid.length; i++){
    for(var j = 0; j<grid.length; j++){
      if(!grid[i][j]){
        avail_pos_array.push([i,j]);
      }
    }  
  }
  return avail_pos_array;
}


function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}


