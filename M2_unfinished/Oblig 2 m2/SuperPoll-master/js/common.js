function getCurrentPoll() 
{
    const pollId = model.app.currentPoll;
    // return model.polls.filter(p => p.id === pollId)[0];

    for (let poll of model.polls) 
    {
        if (poll.id === pollId) return poll;
    }
    return null;
}


function updateView() 
{
    const page = model.app.currentPage;
    if (page === 'createPoll') updateViewCreateVotePage();
    else if (page === 'viewPolls') updateViewPollHistory();
    else if (page === 'vote') updateViewVotePage();
}

function changePage(page) 
{
    model.app.currentPage = page;
    updateView();
}