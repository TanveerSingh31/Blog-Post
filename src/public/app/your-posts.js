function showPostById() {
    $.get('/posts',
        {
            userId: Number(JSON.parse(localStorage.getItem('user')).id)
        },

        (Userposts) => {

            if (Userposts.length == 0) {
                $('#content-container').append(`
                <h3 class="text-center m-5 text-danger">You have not created any Posts yet</h3>
                `)
            }
            else {
                for (post of Userposts) {
                    $('#content').append(`
                        <div class="col-4">
                            <div class="card m-2" style="width: 22rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>

                                    <p class="card-text">${post.body.substring(0, 200)}...<a href="#" class="card-link">read more</a></p>
                                    <a postid="${post.id}" id="delete${post.id}" class="text-danger float-right ">Delete</a>
                                    <span  class='text-secondary mr-2'>${post.likes} likes</span>
                                </div>
                            </div>
                        </div>
                    `)

                    $('#delete' + post.id).click((event) => {
                        if (confirm('Are you sure you want to delete this post ?')) {
                            let postid = event.target.getAttribute('postid');
                            $.ajax({
                                url: '/posts',
                                type: 'DELETE',
                                dataType: 'json',
                                data: {
                                    data: postid
                                }
                            })
                        }
                    })
                }
            }
        }
    )
}