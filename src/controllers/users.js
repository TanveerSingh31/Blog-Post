const { Users } = require('../db/models');
const { createUsername } = require('../utils/username');


async function createUser() {
    let username = await createUsername();
    const user = await Users.create({
        username: username
    })
    return user;
}

/* async function showUsers(query) {
    let users;
    if () {

    }
    users = Users.findAll();
    return users;
}
 */
async function showUserbyId(userId) {
    let user = await Users.findOne({
        where: {
            id: userId
        }
    })
    return user;
}


async function showUserbyName(userName) {
    let user = await Users.findOne({
        where: {
            username: userName
        }
    })
    return user;

}

async function test() {
    /*     await createUser();
        await createUser();
        await createUser();
        await createUser();
        await createUser();
     */
    /*    const users = await showUsers();
       for (user of users) {
           console.log(`
           ${user.id}
           ${user.username}
           `)
       } */
}
test();

module.exports = {
    createUser,
    showUserbyId,
    showUserbyName
    //showUsers
}