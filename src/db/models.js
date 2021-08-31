const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'mysql',
    database: 'socialmediadb',
    username: 'socialmediauser',
    password: 'sector70'
});

// column definitions that are used multiple time can be defined here and used later wherever we want
const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
}

const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false,
}



// defining [ models --> tables ]  and what columns would be present inside them
const Users = db.define('users', {
    id: COL_ID_DEF,
    username: {
        type: Sequelize.DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    }
})
const Posts = db.define('posts', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    likes: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
    }
})
const Comments = db.define('comments', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: false,
    }
})

// relation between different models
Users.hasMany(Posts);             //  hasMany() --> one to many
Posts.belongsTo(Users);           //  belongsTo() --> one to one

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);


module.exports = {
    db,
    Users,
    Posts,
    Comments
}