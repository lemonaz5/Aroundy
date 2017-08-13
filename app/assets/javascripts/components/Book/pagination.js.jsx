class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.paginationElement = this.paginationElement.bind(this)
  }
  paginationElement(number) {
    return(
      <li key={'page' + number}
        className={number == this.props.page ? "active" : ""} >
        <a onClick={this.props.handleChangePage.bind(null, number)}>{number}</a>
      </li>
    )
  }
  render() {
    var page_links = []
    var max_page = this.props.pages
    var page = this.props.page
    var boundary = 2
    for (var i = page-boundary; i <= page+boundary ; i++) {
      if (i>0 && i<=max_page) {
        page_links.push(this.paginationElement(i))
      }
    }

    return(
      <div className="text-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {page_links}
            </ul>
          </nav>
      </div>
    )
  }
}
