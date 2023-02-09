const express = require('express');
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId} = require("./db");
const ideasApi = express.Router();

ideasApi.get('/', (req, res) => {
    const allIdeas = getAllFromDatabase('ideas');
    return res.send(allIdeas);
});

ideasApi.get('/:ideaId', (req, res) => {
    const idea = getFromDatabaseById('ideas', req.params.ideaId)
    if (idea) {
        res.send(idea);
    }
    return res.status(404).send();
});

ideasApi.put('/:ideaId', (req, res) => {
    const ideaToUpdate = getFromDatabaseById('ideas', req.params.ideaId);
    const allIdeas = getAllFromDatabase('ideas');

    if (ideaToUpdate) {
        allIdeas[ideaToUpdate] = req.body;
        const updated = updateInstanceInDatabase('ideas', allIdeas[ideaToUpdate]);
        res.send(updated);
    }
    return res.status(404).send();
});

ideasApi.post('/', (req, res) => {
    const newIdea = addToDatabase('ideas', req.body);
    return res.status(201).send(newIdea)
});

ideasApi.delete('/:ideaId', (req, res) => {
    const ideaToDelete = getFromDatabaseById('ideas', req.params.ideaId);
    const allIdeas = getAllFromDatabase('ideas');

    if (ideaToDelete) {
        allIdeas.splice(ideaToDelete, 1);
        const isDeleted = deleteFromDatabasebyId('ideas', ideaToDelete);
        res.status(204).send(isDeleted);
    }
    return res.status(404).send();
});

module.exports = ideasApi;
