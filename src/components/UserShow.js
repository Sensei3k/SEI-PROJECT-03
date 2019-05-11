import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  render() {
    if (!this.state.user) return null
    return (
      <section className="section user-background">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third-desktop">
              <figure className="image is-96x96">
                <img src={this.state.user.image} alt={this.state.user.name} />
              </figure>
            </div>
            <div className="column is-two-thirds-desktop">
              <p className="subtitle is-3">{this.state.user.username}</p>
              <p className="subtitle">{this.state.user.dateOfBirth}</p>
              <p className="subtitle">{this.state.user.location}</p>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-full-desktop">
              <p className="subtitle is-3">Hobbies & Interests</p>
            </div>
            <div className="column is-desktop">
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow