class BookApplication extends React.Component {
  constructor(props) {
    super(props)
    this.getDataFromApi = this.getDataFromApi.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this)
    this.handleUpdateRecord = this.handleUpdateRecord.bind(this)
    this.handleSortColumn   = this.handleSortColumn.bind(this)
    this.handleChangePage   = this.handleChangePage.bind(this)
    this.state = {
      books: [],
      sort: "title",
      order: "asc",
      page: 1,
      pages: 1,
    }
  }
  componentDidMount() {
    this.getDataFromApi(this.state.page)
  }
  getDataFromApi(page) {
    var self = this
    $.ajax({
      url: '/api/books',
      method: 'GET',
      data: {page: page},
      success(data) {
        self.setState({ books: data.books, pages: parseInt(data.pages), page: parseInt(data.page) })
      },
      error(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    })
  }
  handleSearch(books, pages) {
    this.setState({ books: books, pages: pages })
  }
  handleAdd() {
    // var books = this.state.books
    // books.push(book)
    // this.setState({ books: books, pages: pages })
    this.getDataFromApi(this.state.page)
  }
  handleDeleteRecord() {
    // var books = this.state.books.slice()
    // var index = books.indexOf(book)
    // books.splice(index, 1)
    // this.setState({ books: books })
    this.getDataFromApi(this.state.page)
  }
  handleUpdateRecord(old_book, book) {
    var books = this.state.books.slice()
    var index = books.indexOf(old_book)
    books.splice(index, 1, book)
    this.setState({ books: books })
  }
  handleSortColumn(name, order) {
    if (this.state.sort!=name) {
      order = 'asc'
    }
    $.ajax({
      url: '/api/books',
      method: 'GET',
      data: { sort_by: name, order: order },
      success: function(data) {
        this.setState({ books: data.books, sort: name, order: order })
      }.bind(this),
      error: function(xhr, state, error) {
        alert('Cannot sort events: ', error)
      }
    })
  }
  handleChangePage(page) {
    this.getDataFromApi(page)
  }
  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand brand" href="">Aroundy</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <SearchForm handleSearch={this.handleSearch} />
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <div className="jumbotron">
                <h1 className="show head">Book Memo</h1>
                <p className="show">by Aroundy</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <NewForm handleAdd={this.handleAdd} />
              </div>
            </div>
            <div className="row">

            </div>
            <div className="row">
              <div className="col-md-12">
                <BookTable books={this.state.books}
                           sort={this.state.sort}
                           order={this.state.order}
                           handleDeleteRecord={this.handleDeleteRecord}
                           handleUpdateRecord={this.handleUpdateRecord}
                           handleSortColumn={this.handleSortColumn} />
                <Pagination page={this.state.page}
                            pages={this.state.pages}
                            handleChangePage={this.handleChangePage} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
