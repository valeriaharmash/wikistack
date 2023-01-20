const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="author" class="col-sm-2 control-label">Author Name</label>
        <input id="author" name="author" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Author email</label>
        <input id="email" name="email" type="email" class="form-control" />
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Content</label>
        <input
          id="content"
          name="content"
          type="textarea"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Page Status</label>
        <input id="status" name="status" type="text" class="form-control" />
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
