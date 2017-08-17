class AboutMe extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center", marginBottom: "100px"}}>
        <Navbar />
        <img className="img-circle aboutme-img"
             src="https://images.unsplash.com/photo-1471440671318-55bdbb772f93?dpr=1&auto=format&fit=crop&w=1500&h=1500&q=80&cs=tinysrgb&crop="
             alt="coffee-book" />
        <div className="container">
          <h1>Hello.</h1>

          <p>
            Aroundy is just a list of books which was completed by an ordinary girl who likes to read and learn. ;)
          </p>
          <div>
            <br />
            <a href="https://linkedin.com/in/wannita-takerngsaksiri">
              <i className="fa fa-linkedin-square fa-lg">
                <i> Linkedin</i>
              </i>
            </a>
            <br /> <br />
            <a href="https://github.com/lemonaz5/Aroundy">
              <i className="fa fa-github-square fa-lg">
                <i> Github</i>
              </i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
