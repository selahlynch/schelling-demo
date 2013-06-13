grid_size = 8;
num_agents = 5;

///make a set of agents
dummy_agent = {
  type:0,
  pos_x:0,
  pos_y:0
}

var agent_array = []

//initializing the agents
for (var i=0;i<num_agents;i++)
{
  agent_array.push(Object.create(dummy_agent));
  agent_array[i].type = 1;
  //find a random available position
  //set this agent to that position
}

//agents are initialized

//increment the agents

function increment_agents(agent_array){
  //for each agent
  //decide if it wants to move
  //find a random available position
  //update it to this position
}





















