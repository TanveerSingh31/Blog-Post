$('.nav-item .nav-link').click((event) => {

    const url = $(event.target).attr('data-component');
    $('#posts').load(`../components/${url}.html`)

})