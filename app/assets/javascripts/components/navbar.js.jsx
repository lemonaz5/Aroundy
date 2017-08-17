class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand brand" href="/">Aroundy</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {
              (this.props.handleSearch) ? <SearchForm handleSearch={this.props.handleSearch} /> : ''
            }
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/aboutme">
                  <i className="fa fa-hand-peace-o fa-lg"> About me</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
