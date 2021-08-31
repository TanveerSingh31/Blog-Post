const express = require('express');
const routePost = express.Router();

const { createPost, showPost, showAllPosts, likePost, dislikePost, showPostByPostid, deletePost } = require('../../src/controllers/posts');


routePost.get('/', async (req, res) => {
    if (req.query.userId) {
        let UserPosts = await showPost(req.query.userId);
        res.status(200).send(UserPosts);
    }
    else if (req.query.id) {
        let post = await showPostByPostid(req.query.id);
        res.status(200).send(post);
    }
    let posts = await showAllPosts();
    res.status(200).send(posts);
})


routePost.put('/', async (req, res) => {
    await likePost(req.body.data);
    res.send('liked');
})

routePost.delete('/', async (req, res) => {
    if (req.headers.id) {
        await dislikePost(req.body.data);
        res.send('disliked');
    }
    await deletePost(req.body.data);
    res.send('deleted');


})

routePost.post('/', async (req, res) => {
    if (req.body.userId && req.body.title != '' && req.body.body != '') {
        let post = await createPost(req.body.userId, req.body.title, req.body.body);
        res.status(200).send(post);
    }
    else {
        res.send('error');
    }
})


module.exports = {
    routePost
}