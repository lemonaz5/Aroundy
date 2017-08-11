class BookTable extends React.Component {
  handleDeleteRecord(book) {
    this.props.handleDeleteRecord(book)
  }
  render() {
    var books = []
    this.props.books.forEach(function(book) {
      books.push(<Book book={book}
                       key={'book' + book.id}
                       handleDeleteRecord={this.handleDeleteRecord.bind(this)} />)
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Title</th>
            <th className="col-md-2">Author</th>
            <th className="col-md-1">Date</th>
            <th className="col-md-1">Genre</th>
            <th className="col-md-1">Power</th>
            <th className="col-md-4">Description</th>
            <th className="col-md-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    )
  }
}