class BookApplication extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this)
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    this.getDataFromApi()
  }
  getDataFromApi() {
    var self = this
    $.ajax({
      url: '/api/books',
      success(data) {
        self.setState({ books: data })
      },
      error(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    })
  }
  handleSearch(books) {
    this.setState({ books: books })
  }
  handleAdd(book) {
    var books = this.state.books
    books.push(book)
    this.setState({ books: books })
  }
  handleDeleteRecord(book) {
    var books = this.state.books.slice()
    var index = books.indexOf(book)
    books.splice(index, 1)
    this.setState({ books: books })
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar">1</span>
                <span className="icon-bar">2</span>
                <span className="icon-bar">3</span>
              </button>
              <a className="navbar-brand" href="#">Aroundy</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
          <div className="container">
            <div className="jumbotron">
                  <h1>Book Memo</h1>
                  <p>by Aroundy</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <NewForm handleAdd={this.handleAdd}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <SearchForm handleSearch={this.handleSearch} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <BookTable books={this.state.books}
                           handleDeleteRecord={this.handleDeleteRecord} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}