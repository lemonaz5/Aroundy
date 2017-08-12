class BookTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this)
    this.handleUpdateRecord = this.handleUpdateRecord.bind(this)
    this.handleSortColumn   = this.handleSortColumn.bind(this)
  }
  handleDeleteRecord(book) {
    this.props.handleDeleteRecord(book)
  }
  handleUpdateRecord(old_book, book) {
    this.props.handleUpdateRecord(old_book, book)
  }
  handleSortColumn(name, order) {
    this.props.handleSortColumn(name, order)
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
            <th className="col-md-2 sortable">
              <SortColumn name="title"
                          text="Title"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="author"
                          text="Author"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="completed_date"
                          text="Date"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="genre"
                          text="Genre"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="power"
                          text="Power"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="description"
                          text="Description"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn}/>
            </th>
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
