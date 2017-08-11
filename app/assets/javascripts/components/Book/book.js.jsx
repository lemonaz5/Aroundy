class Book extends React.Component {
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
  render() {
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
          <button type="botton"
                  className="btn btn-danger btn-xs"
                  onClick={this.handleDelete.bind(this)} >
            Delete
          </button>
        </td>
      </tr>
    )
  }
}