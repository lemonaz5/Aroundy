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
      $.ajax({
        url: '/api/books',
        method: 'POST',
        data: { book: self.state },
        success(data) {
          self.props.handleAdd()
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
    var input_name = e.target.name
    var value = e.target.value
    this.setState({ [input_name] : value })
  }
  render() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div>
          <label>- Add New Book -</label>
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="title"
                 placeholder="Title"
                 value={this.state.title}
                 onChange={this.handleChange}
                 required />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="author"
                 placeholder="Author"
                 value={this.state.author}
                 onChange={this.handleChange}
                 required />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="completed_date"
                 placeholder="Completed date"
                 value={this.state.completed_date}
                 onChange={this.handleChange}
                 required />
        </div>
        <div className="form-group">
          <select className="form-control"
                  name="genre"
                  placeholder="Genre"
                  onChange={this.handleChange}
                  required
                  value={this.state.genre}
                  >
            <option value="none" disabled>N/a</option>
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
                  value={parseInt(this.state.power, 10)}
                  onChange={this.handleChange}
                  required
                  >
            <option value="0" disabled>N/a</option>
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
                 value={this.state.description}
                 onChange={this.handleChange}
                 required />
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
