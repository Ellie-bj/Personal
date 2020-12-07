

function updateViewPollHistory() 
{
  document.getElementById('app').innerHTML = 
    `        
        <h3>Undersøkelser</h3>

        <ul>${listPolls()}</ul>
    `;
}

function listPolls() 
{
  let html = '';
  
    for (let i = 0; i < model.polls.length; i++) 
    {html += `<li onclick="displayVote(${i})">Poll ID : ${model.polls[i].pollId} | Poll Question : ${model.polls[i].question}</li>`;}
    return html;
}
  
//   changePage('createVote')
function displayVote(pollIndex) 
{
    model.inputs.createPoll.pollId = model.polls[pollIndex].pollId;
    model.inputs.createPoll.question =  model.polls[pollIndex].question;
    model.inputs.createPoll.usersCanAddAlternatives =  model.polls[pollIndex].usersCanAddAlternatives;
    model.inputs.createPoll.newAlternative = '';
    model.inputs.createPoll.options = model.polls[pollIndex].options;

    changePage('createPoll');
}