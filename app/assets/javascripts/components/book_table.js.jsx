class BookTable extends React.Component {
  render() {
    var books = []
    this.props.books.forEach(function(book) {
      books.push(<BookList book={book}
                         key={'book' + book.id}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2">Title</th>
            <th className="col-md-2">Author</th>
            <th className="col-md-1">Date</th>
            <th className="col-md-2">Genre</th>
            <th className="col-md-1">Power</th>
            <th className="col-md-4">Description</th>
          </tr>
        </thead>
        <tbody>
          {books}
        </tbody>
      </table>
    )
  }
}