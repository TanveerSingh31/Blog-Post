
// 2 --> view a comment using postId and userId

const { Comments, Users, Posts } = require('../db/models');


async function createComment(userId, postId, title, body) {
    const comment = await Comments.create({
        userId: userId,
        postId: postId,
        title: title,
        body: body
    })
    return comment;
}

async function viewComment(postId) {
    const comment = await Comments.findAll({
        include: [Posts, Users],
        where: {
            postId: postId
        }
    })
    return comment;
}


async function test() {
    /*   console.log(await createComment(15, 1, 'comment title', 'comment body')); */
    /* console.log(await viewComment(1)); */
}
test();

module.exports = {
    createComment,
    viewComment

}