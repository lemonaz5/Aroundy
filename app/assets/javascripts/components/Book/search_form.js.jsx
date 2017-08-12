class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    // this.state = {
    //   query: ''
    // }
  }
  handleSearch(e) {
    var query = ReactDOM.findDOMNode(this.refs.query).value
    // this.setState({ query: e.target.value })
    var self = this
    $.ajax({
      url: 'api/books/search',
      method: 'GET',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data.books, data.pages);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    })
  }
  // handleChange(e) {
  //   this.setState({ query: e.target.value })
  // }

  render() {
    return(
      // <div>
      //   <div className="input-group">
          <input type="text"
                 className="form-control search-bar"
                 placeholder="Search books by title or author"
                 onChange={this.handleSearch}
                 ref="query"
                  />
        //      <span className="input-group-btn">
        //      <button className="btn btn-default"
        //              type="button"
        //              onClick={this.handleSearch}
        //                >
        //        Go!
        //        </button>
        //      </span>
        //    </div>
        //  </div>
    )
  }
}
