$('#content').append(`
<form>
  <div class="form-group col">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="title for your post">
  </div>
 
  <div class="form-group col">
    <label for="body">Body</label>
    <textarea class="form-control" id="body" rows="7"></textarea>
  </div>
  <div class="text-center">
  <button type="submit" class="btn btn-primary my-4 col-3" id="btnSubmit">Submit</button>
  </div>
</form>

`)



$('#btnSubmit').click(() => {
  $.post('/posts',
    {
      title: `${$('#title').val()}`,
      body: `${$('#body').val()}`,
      userId: Number(JSON.parse(localStorage.getItem('user')).id),
    },
    (res) => {
      if (res == 'error') {
        alert('Enter Title and Body of Post');
      }
      else {
        alert('your post has been recorded');
      }
    }
  )
})


