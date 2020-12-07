

function createOrUpdatePoll() 
{
    const inputObj = model.inputs.createPoll;

    model.polls.push
    ({
        pollId: model.polls.length,
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
    });

    updateView();
}