const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div>
        <label for="title" class="col-sm-2 control-label">Author Name</label>
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div>
        <label for="title" class="col-sm-2 control-label">Author email</label>
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label"
          >Page Title <label></label></label
        ><br />
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <label for="title" class="col-sm-2 control-label">Content</label>
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div>
        <label for="title" class="col-sm-2 control-label">Page Status</label>
        <input id="title" name="title" type="text" class="form-control" />
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
