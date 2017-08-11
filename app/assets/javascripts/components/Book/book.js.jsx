class Book extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validRecord  = this.validRecord.bind(this)
    this.state = {
      edit: false,
      title: this.props.book.title,
      author: this.props.book.author,
      description: this.props.book.description,
      power: this.props.book.power,
      completed_date: this.props.book.completed_date,
      genre: this.props.book.genre,
    }
  }
  handleDelete(e) {
    e.preventDefault()
    $.ajax({
      method: 'DELETE',
      url: '/api/books/' + this.props.book.id,
      success: function(data) {
        this.props.handleDeleteRecord(this.props.book)
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error)
      }
    })
  }
  validRecord() {
    if(this.state.title && this.state.author &&
       this.state.description && this.state.power &&
       this.state.completed_date && this.state.genre) {
      return true
    } else {
      return false
    }
  }
  handleChange(e) {
    var name  = e.target.name
    var value = e.target.value
    this.setState({ [name] : value })
  }
  handleToggle(e) {
    e.preventDefault()
    this.setState({ edit: !this.state.edit })
  }
  handleUpdate(e) {
    e.preventDefault()
    if(this.validRecord()) {
      var book_data = this.state
      $.ajax({
        method: 'PUT',
        url: '/api/books/' + this.props.book.id,
        data: { book: book_data },
        success: function(data) {
          this.props.handleUpdateRecord(this.props.book, data)
          this.setState({ edit: false })
        }.bind(this),
        error: function(xhr, status, error) {
          alert('Cannot edit requested record: ', error)
        }
      })
    } else {
      alert('Please fill all fields.')
    }
  }
  renderForm() {
    return(
      <tr>
        <td>
          <input type="text"
                 className="form-control"
                 name="title"
                 onChange={this.handleChange}
                 defaultValue={this.state.title} />
        </td>
        <td>
          <input type="text"
                 className="form-control"
                 name="author"
                 onChange={this.handleChange}
                 defaultValue={this.state.author} />
        </td>
        <td>
          <input type="date"
                 className="form-control"
                 name="completed_date"
                 onChange={this.handleChange}
                 defaultValue={this.state.completed_date} />
        </td>
        <td>
          <select className="form-control"
                  name="genre"
                  onChange={this.handleChange}
                  defaultValue={this.state.genre}
                  >
            <option value="fantasy">Fantasy</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="comedy">Comedy</option>
            <option value="romance">Romance</option>
            <option value="knowledge">Knowledge</option>
            <option value="indy">Indy</option>
            <option value="manga">Manga</option>
          </select>
        </td>
        <td>
          <select className="form-control"
                  name="power"
                  onChange={this.handleChange}
                  defaultValue={parseInt(this.state.power, 10)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
        <td>
          <input type="text"
                 className="form-control"
                 name="description"
                 onChange={this.handleChange}
                 defaultValue={this.state.description} />
        </td>
        <td>
          <button className="btn btn-success btn-xs"
                  onClick={this.handleUpdate}>
            Save
          </button>
          <span style={{ marginRight: '5px' }}/>
          <button className="btn btn-default btn-xs"
                  onClick={this.handleToggle}>
            Cancel
          </button>
        </td>
      </tr>
    )
  }
  renderRecord() {
    var bookList = this.props.book
    return(
      <tr>
        <td>{bookList.title}</td>
        <td>{bookList.author}</td>
        <td>{bookList.completed_date}</td>
        <td>{bookList.genre}</td>
        <td>{bookList.power}</td>
        <td>{bookList.description}</td>
        <td>
          <button className="btn btn-warning btn-xs"
                  onClick={this.handleToggle}>
            Edit
          </button>
          <span style={{ marginRight: '5px' }} />
          <button className="btn btn-danger btn-xs"
                  onClick={this.handleDelete} >
            Delete
          </button>
        </td>
      </tr>
    )
  }
  render() {
    if (!this.state.edit) {
      return(this.renderRecord())
    } else {
      return(this.renderForm())
    }
  }
}
Book.propTypes = {
  title: React.PropTypes.string,
  author: React.PropTypes.string,
  description: React.PropTypes.string,
  power: React.PropTypes.number,
  date: React.PropTypes.string,
  genre: React.PropTypes.string
}