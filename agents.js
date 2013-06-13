grid_size = 8;
num_agents = 5;

//make a grid full of zeros
grid = [];

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
  //for each agent
    //decide if it wants to move
    set_to_random_available_pos(agent, grid);
}

function set_to_random_available_pos(agent, grid){
  //find a random available position
    //obtain a set of available positions on grid
    //choose one at random
  //set this agent to that position
    //update the grid
    //update the xy coords of the agent
}




















