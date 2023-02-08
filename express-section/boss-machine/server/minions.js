const express = require('express');
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId} = require('./db');
const {min} = require("mocha/lib/reporters");
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
    res.status(404).send();
});

minionsApi.put('/:minionId', (req, res) => {
   const minionToUpdate = getFromDatabaseById('minions', req.params.minionId);
    const allMinions = getAllFromDatabase('minions');

   if (minionToUpdate) {
       allMinions[minionToUpdate] = req.body;
       const updated = updateInstanceInDatabase('minions', allMinions[minionToUpdate]);
       res.send(updated);
   }
   res.status(404).send();
});

minionsApi.post('/', (req, res) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsApi.delete('/:minionId', (req, res) => {
    const minionToDelete = getFromDatabaseById('minions', req.params.minionId);
    const allMinions = getAllFromDatabase('minions');

    if (minionToDelete) {
        allMinions.splice(minionToDelete, 1);
        const isDeleted = deleteFromDatabasebyId('minions', minionToDelete)
        res.status(204).send(isDeleted);
    }
    res.status(404).send();
})

module.exports = minionsApi;