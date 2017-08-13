class BookTable extends React.Component {
  render() {
    var books = []
    this.props.books.forEach(function(book) {
      books.push(<Book book={book}
                       key={'book' + book.id}
                       handleDeleteRecord={this.props.handleDeleteRecord}
                       handleUpdateRecord={this.props.handleUpdateRecord} />)
    }.bind(this));
    return(
      <table className="table">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn name="title"
                          text="Title"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="author"
                          text="Author"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="completed_date"
                          text="Date"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="genre"
                          text="Genre"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
            </th>
            <th className="col-md-1 sortable">
              <SortColumn name="power"
                          text="Power"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="description"
                          text="Description"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.props.handleSortColumn}/>
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
