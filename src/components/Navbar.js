import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch(e) {
    this.setState({ data: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.history.push(`/search/${this.state.data}`)
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">

            <a role="button" className="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className="navbar-menu">
            <div className="navbar-start is-full-width">
              <Link to="/" className="navbar-item logo"></Link>

              <div className="navbar-item is-full-width">

                <form onSubmit={this.handleSubmit}>
                  <div className="field has-addons">

                  </div>
                </form>

              </div>
            </div>
            <div className="navbar-end">
              <a href="" rel="noopener noreferrer" target="_blank"><div className="navbar-item" id="facebook"></div></a>
              <a className="button is-link">Register</a>
              <a className="button is-link">Login</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
