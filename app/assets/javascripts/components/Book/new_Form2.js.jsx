var NewForm2 = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    description: React.PropTypes.string,
    power: React.PropTypes.number,
    date: React.PropTypes.string,
    genre: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      title: '',
      author: '',
      description: '',
      power: '',
      completed_date: '',
      genre: '',
    }
  },
  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/books',
        method: 'POST',
        data: { event: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState(self.getInitialState());
        },
        error: function(xhr, status, error) {
          console.log('state', self.state)
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    if(this.state.title && this.state.author && this.state.description &&
       this.state.power && this.state.completed_date && this.state.genre) {
      return true
    } else {
      return false
    }
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="title"
                 placeholder="Title"
                 ref="title"
                 value={this.state.title}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="author"
                 placeholder="Author"
                 ref="author"
                 value={this.state.author}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="completed_date"
                 placeholder="Completed date"
                 ref="completed_date"
                 value={this.state.completed_date}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input  type="text"
                  className="form-control"
                  name="genre"
                  placeholder="Genre"
                  ref="genre"
                  onChange={this.handleChange}
                  value={this.state.genre}
                  />
        </div>
        <div className="form-group">
          <input  type="text"
                  className="form-control"
                  name="power"
                  placeholder="Power"
                  ref="power"
                  defaultValue={parseInt("1",10)}
                  onChange={this.handleChange}
                  />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="Description"
                 ref="description"
                 value={this.state.description}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
})
