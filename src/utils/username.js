
let fname = ['spooky', 'soft', 'electric', 'soft', 'conscious', 'short', 'lazy', 'strange', 'exotic', 'famous', 'boundless', 'unhealthy'];
let lname = ['bat', 'rabbit', 'dog', 'Viper', 'starfish', 'parrotfish', 'salamander', 'seal', 'antelope', 'tiger', 'orangutan', 'puppy', 'parrot'];

async function createUsername() {
    let first = fname[Math.floor(Math.random() * fname.length)];
    let last = lname[Math.floor(Math.random() * lname.length)];
    return `${first}-${last}`;
}

module.exports = {
    createUsername
}