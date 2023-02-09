const express = require('express');
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId} = require('./db');
const {get} = require("axios");
const minionsApi = express.Router();

minionsApi.get('/', (req, res) => {
    const allMinions = getAllFromDatabase('minions');
    if (allMinions !== -1){
        res.send(allMinions)
    }
    return res.status(404).send();
});

minionsApi.get('/:minionId', (req, res) => {
    const minionFound = getFromDatabaseById('minions', req.params.minionId);
    if (minionFound) {
        res.send(minionFound);
    }
    return res.status(404).send();
});

minionsApi.put('/:minionId', (req, res) => {
   const minionToUpdate = getFromDatabaseById('minions', req.params.minionId);
    const allMinions = getAllFromDatabase('minions');

   if (minionToUpdate) {
       allMinions[minionToUpdate] = req.body;
       const updated = updateInstanceInDatabase('minions', allMinions[minionToUpdate]);
       res.send(updated);
   }
   return res.status(404).send();
});

minionsApi.post('/', (req, res) => {
    const newMinion = addToDatabase('minions', req.body);
    return res.status(201).send(newMinion);
});

minionsApi.delete('/:minionId', (req, res) => {
    const minionToDelete = getFromDatabaseById('minions', req.params.minionId);
    const allMinions = getAllFromDatabase('minions');

    if (minionToDelete) {
        allMinions.splice(minionToDelete, 1);
        const isDeleted = deleteFromDatabasebyId('minions', minionToDelete)
        res.status(204).send(isDeleted);
    }
    return res.status(404).send();
})

minionsApi.get('/:minionId/work', (req, res) => {
    const allWork = getAllFromDatabase('work');
    const minionFound = getFromDatabaseById('minions', req.params.minionId);

    if (minionFound){
        const minionWork = allWork.filter(work => work.minionId === req.params.minionId);
        res.status(200).send(minionWork)
    }
    return res.status(404).send();
});

minionsApi.put('/:minionId/work/:workId', (req, res) => {
    const workToUpdate = getFromDatabaseById('work', req.params.workId);
    const allWork = getAllFromDatabase('work');
    const isValidMinion = getFromDatabaseById('minions', req.body.minionId);

    if (workToUpdate) {
        if (isValidMinion){
            allWork[workToUpdate] = req.body;
            const updated = updateInstanceInDatabase('work', allWork[workToUpdate]);
            res.send(updated);
        }
        return res.status(400).send();
    }
    return res.status(404).send();
});

minionsApi.post('/:minionId/work', (req, res) => {
   const newWork = req.body;
   newWork.minionId = req.params.minionId;
   const createdWork = addToDatabase('work', newWork);
   res.status(201).send(createdWork);
});

minionsApi.delete('/:minionId/work/:workId', (req, res) => {
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    if (deleted) {
        res.status(204).send();
    }
    return res.status(404).send();
});


module.exports = minionsApi;