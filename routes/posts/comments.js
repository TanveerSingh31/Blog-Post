const express = require('express');
const routeComment = express.Router();

const { createComment, viewComment } = require('../../src/controllers/comments');

routeComment.get('/:postid', async (req, res) => {
    if (!isNaN(Number(req.params.postid))) {
        const comment = await viewComment(req.params.postid);
        res.status(200).send(comment);
    }
    else {
        res.status(400).send('provide post-id inorder to view comment');
    }
})


routeComment.post('/', async (req, res) => {
    if (req.body.userid || req.body.postid || req.body.title || req.body.body) {
        const comment = await createComment(req.body.userid, req.body.postid, req.body.title, req.body.body);
        res.status(200).send(comment);
    }
    else {
        res.status(400).send('enter userid, postid, title, and body');
    }
})

module.exports = {
    routeComment
}