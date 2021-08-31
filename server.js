const express = require('express');
const app = express();

const { db } = require('./src/db/models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/src/public'));



// routes
const { routeUser } = require('./routes/users');
app.use('/users', routeUser);

const { routePost } = require('./routes/posts/index');
app.use('/posts', routePost);

const { routeComment } = require('./routes/posts/comments');
app.use('/comments', routeComment);





db.sync()
    .then(() => {
        app.listen(8500, () => {
            console.log('server started on http://localhost:8500')

        });
    })
    .catch((err) => {
        console.error('database not synced');
        console.log(err);
    })

