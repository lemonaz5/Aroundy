class BookTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this)
    this.handleUpdateRecord = this.handleUpdateRecord.bind(this)
  }
  handleDeleteRecord(book) {
    this.props.handleDeleteRecord(book)
  }
  handleUpdateRecord(old_book, book) {
    this.props.handleUpdateRecord(old_book, book)
  }
  render() {
    var books = []
    this.props.books.forEach(function(book) {
      books.push(<Book book={book}
                       key={'book' + book.id}
                       handleDeleteRecord={this.handleDeleteRecord}
                       handleUpdateRecord={this.handleUpdateRecord} />)
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
            <th className="col-md-3">Description</th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    )
  }
}