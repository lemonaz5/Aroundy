var BookList = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    description: React.PropTypes.string,
  },
  render: function() {
    var bookList = this.props.book
    return(
      <tr>
        <td>{bookList.title}</td>
        <td>{bookList.author}</td>
        <td>{bookList.completed_date}</td>
        <td>{bookList.genre}</td>
        <td>{bookList.power}</td>
        <td>{bookList.description}</td>
      </tr>
    )
  }
})