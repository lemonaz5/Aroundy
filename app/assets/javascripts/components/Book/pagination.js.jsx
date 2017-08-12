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

    for (var i = 1; i <= this.props.pages ; i++) {
      page_links.push(this.paginationElement(i))
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
