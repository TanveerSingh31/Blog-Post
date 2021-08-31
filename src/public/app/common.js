$(() => {
    $('#posts').load('../components/all-posts.html');
    $('#navbar').load('../components/navbar.html', showUsername);
    /* $('#footer').load('../components/footer.html'); */
})



function showUsername() {
    if (!localStorage.getItem('user')) {
        $.post('/users', (user) => {
            let currentuser = JSON.stringify(user);
            localStorage.setItem('user', currentuser);
            $('#navbarNav').append(`
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
        <span class="nav-link font-weight-bold text-light large material-icons">thumb_up</span>
            <span class="nav-link font-weight-bold text-light">${user.username}</span>
        </li>
        </ul>
        `)
        })
    }
    else {
        let userStr = localStorage.getItem('user');
        let userObj = JSON.parse(userStr);
        $('#navbarNav').append(`
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <span class="nav-link  text-light material-icons pr-0">person_outline</span>
        </li>
        <li class="nav-item">
            <span class="nav-link font-weight-bold text-light ">${userObj.username}</span>
        </li>
        </ul>
        `)
    }
}


