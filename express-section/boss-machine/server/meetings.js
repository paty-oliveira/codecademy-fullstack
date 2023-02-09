const express = require('express');
const {getAllFromDatabase, createMeeting, addToDatabase, deleteAllFromDatabase} = require("./db");
const meetingsApi = express.Router();

meetingsApi.get('/', (req, res) => {
   const allMeetings = getAllFromDatabase('meetings');
   return res.status(200).send(allMeetings);
});

meetingsApi.post('/', (req, res) => {
    const newMeeting = createMeeting();
    const added = addToDatabase('meetings', newMeeting);
    return res.status(201).send(added);
});

meetingsApi.delete('/', (req, res) => {
    const allMeetingsDeleted = deleteAllFromDatabase('meetings');
    return res.status(204).send(allMeetingsDeleted);
});

module.exports = meetingsApi;
