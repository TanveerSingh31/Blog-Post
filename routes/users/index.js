const express = require('express');
const routeUser = express.Router();
const { createUser, showUserbyId, showUserbyName } = require('../../src/controllers/users');

routeUser.get('/:id', async (req, res) => {
    let user;
    // if path params a username
    if (isNaN(Number(req.params.id))) {
        user = await showUserbyName(req.params.id);
    }
    // if path param an id
    else {
        user = await showUserbyId(req.params.id);
    }

    // checking if user is there or not and send res back accordingly
    if (user) {
        res.status(200).send(user);
    }
    else {
        res.status(400).send('invalid username or id');
    }

})

routeUser.post('/', async (req, res) => {
    const user = await createUser();
    res.send(user);
})

module.exports = {
    routeUser
}