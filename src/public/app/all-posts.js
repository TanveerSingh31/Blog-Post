

function showPosts() {
    $.get('/posts', (posts) => {
        for (post of posts) {

            $('#content').append(`
                <div class="col-4">
                    <div class="card m-2" style="width: 22rem;">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
                            <p class="card-text">${post.body.substring(0, 200)}...<a href="#" postid="${post.id}" id="readMore${post.id}" class="card-link">read more</a></p>
                            <a href="#" class="card-link">Comment</a>
                            <a  id="like${post.id}"  class="card-link mr-4 " class="">Like</a><span class='text-secondary float-right pr-2'>${post.likes} likes</span>
                        </div>
                    </div>
                </div>
            `);

            $('#readMore' + post.id).click((event) => {

                $('#content').empty();
                $.get('/posts',
                    {
                        id: event.target.getAttribute('postid')
                    },

                    (post) => {
                        /* $('#content').append(`
                            <div class="card text-center col">
                                <div class="card-header">
                                    ${post.user.username}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.body}</p>
                                </div>
                                <div class="card-footer text-muted">
                                    ${post.likes} likes
                                </div>
                            </div>
                        `); */
                        $('#content').append(`
                            <div class="card col p-0">
                                <h4 class="col card-header font-weight-medium">${post.title}</h5>
                                <div class="card-body pt-2">
                                    <h6 class="card-title text-muted">${post.user.username}</h6>
                                    <p class="card-text">${post.body}</p>

                                   <div >
                                   <a href="#" class="card-link">Comment</a>
                                   <a  id="like${post.id}"  class="card-link mr-4 ">Like</a><span class='text-secondary float-right'>${post.likes} likes</span>
                                   </div>
                                </div>
                                
                            </div>
                        `)

                        $('#like' + post.id).click((event) => {
                            if (event.target.innerText == 'Like') {
                                let oldLikes = Number(event.target.nextElementSibling.innerText.slice(0, 2));
                                event.target.nextElementSibling.innerText = `${oldLikes + 1} likes`;
                                event.target.innerText = 'Liked';
                                $.ajax({
                                    url: '/posts',
                                    type: 'PUT',
                                    dataType: 'json',
                                    data: {
                                        data: Number(event.target.attributes[0].value.slice(4))
                                    },

                                })
                            }
                            else {
                                event.target.innerText = 'Like';
                                let oldLikes = Number(event.target.nextElementSibling.innerText.slice(0, 2));
                                event.target.nextElementSibling.innerText = `${oldLikes - 1} likes`;
                                $.ajax({
                                    url: '/posts',
                                    type: 'DELETE',
                                    headers: { 'id': Number(event.target.attributes[0].value.slice(4)) },
                                })
                            }


                        })


                    })
            })

            $('#like' + post.id).click((event) => {
                console.log(event.target);
                if (event.target.innerText == 'Like') {
                    let oldLikes = Number(event.target.nextElementSibling.innerText.slice(0, 2));
                    event.target.nextElementSibling.innerText = `${oldLikes + 1} likes`;
                    event.target.innerText = 'Liked';
                    $.ajax({
                        url: '/posts',
                        type: 'PUT',
                        dataType: 'json',
                        data: {
                            data: Number(event.target.attributes[0].value.slice(4))
                        },

                    })
                }
                else {
                    event.target.innerText = 'Like';
                    let oldLikes = Number(event.target.nextElementSibling.innerText.slice(0, 2));
                    event.target.nextElementSibling.innerText = `${oldLikes - 1} likes`;
                    $.ajax({
                        url: '/posts',
                        type: 'DELETE',
                        headers: { 'id': Number(event.target.attributes[0].value.slice(4)) }
                    })
                }


            })


        }
    })
}





