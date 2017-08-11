class NewForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      description: '',
      power: '',
      completed_date: '',
      genre: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.validForm = this.validForm.bind(this)
  }
  handleAdd(e) {
    e.preventDefault();
    var self = this
    if (this.validForm()){
      console.log('a',this.state)
      $.ajax({
        url: '/api/books',
        method: 'POST',
        data: { book: self.state },
        success(data) {
          self.props.handleAdd(data)
          self.setState({
            title: '',
            author: '',
            description: '',
            power: '',
            completed_date: '',
            genre: '',
          })
        },
        error(xhr, status, error) {
          alert('Cannot add a new record: ', error)
        }
      })
    } else {
      alert('Please fill all fields.')
    }
  }
  validForm() {
    if(this.state.title && this.state.author && this.state.description &&
       this.state.power && this.state.completed_date && this.state.genre) {
      return true
    } else {
      return false
    }
  }
  handleChange(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  }
  render() {
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
          <select className="form-control"
                  name="genre"
                  placeholder="Genre"
                  ref="genre"
                  onChange={this.handleChange}
                  value={this.state.genre}
                  >
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="knowledge">Knowledge</option>
            <option value="indy">Indy</option>
            <option value="manga">Manga</option>
          </select>
        </div>
        <div className="form-group">
          <select className="form-control"
                  name="power"
                  placeholder="Power"
                  ref="power"
                  value={parseInt(this.state.power, 10)}
                  onChange={this.handleChange}
                  >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
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
}
NewForm.propTypes = {
  title: React.PropTypes.string,
  author: React.PropTypes.string,
  description: React.PropTypes.string,
  power: React.PropTypes.number,
  date: React.PropTypes.string,
  genre: React.PropTypes.string
}