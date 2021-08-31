const { Posts, Users } = require('../db/models');

async function createPost(userid, title, body) {
    const post = await Posts.create({
        userId: userid,
        title: title,
        body: body
    })
    return post
}


async function showPost(id) {
    const post = await Posts.findAll({
        include: [Users],
        where: {
            userId: id
        }
    });
    return post;
}

async function showPostByPostid(id) {
    const post = await Posts.findOne({
        include: [Users],
        where: {
            id
        }
    });
    return post;
}
async function showAllPosts() {
    const posts = await Posts.findAll({
        include: [Users]
    })
    return posts;
}


async function likePost(id) {
    await Posts.findOne({
        where: {
            id
        }
    }).then(async (post) => {

        const Newlikes = post.likes + 1;

        await post.update({
            likes: Newlikes
        })

    })


    /* const post = await Posts.update(
    {}
)

 */
}

async function dislikePost(id) {
    await Posts.findOne({
        where: {
            id
        }
    }).then(async (post) => {
        const Newlikes = post.likes - 1;

        await post.update({
            likes: Newlikes
        })
    })
}

async function deletePost(id) {
    await Posts.destroy({
        where: {
            id
        }
    })
}


/* async function test() {

    /* const posts = await showAllPosts(); 
    const post = await likePost(5);
    console.log(post);

}
test();
 */

module.exports = {
    createPost,
    showPost,
    showPostByPostid,
    showAllPosts,
    likePost,
    dislikePost,
    deletePost
}