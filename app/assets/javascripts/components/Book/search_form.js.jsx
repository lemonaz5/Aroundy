class SearchForm extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     query: undefined
  //   }
  // }
  handleSearch() {
    var query = ReactDOM.findDOMNode(this.refs.query).value
    // this.setState({ query: value })
    var self = this
    $.ajax({
      url: 'api/books/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    })
  }
  // handleClick() {
  //   var self = this
  //   $.ajax({
  //     url: 'api/books/search',
  //     data: { query: self.state.query },
  //     success: function(data) {
  //       self.props.handleSearch(data);
  //     },
  //     error: function(xhr, status, error) {
  //       alert('Search error: ', status, xhr, error);
  //     }
  //   })
  // }

  render() {
    return(
      // <div>
      //   <div className="input-group">
          <input type="text"
                 className="form-control"
                 placeholder="Search by title or author"
                 onChange={this.handleSearch.bind(this)}
                 ref="query"
                  />
      //     <span className="input-group-btn">
      //       <button className="btn btn-default"
      //               type="button"
      //               >
      //       Go!
      //       </button>
      //     </span>
      //   </div>
      // </div>
    )
  }
}