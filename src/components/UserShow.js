import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'

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

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }

  render() {
    if (!this.state.user) return null
    return (
      <section className="section user-background">
        <div className="container profile">
          <div className="columns is-multiline columns-profile">
            <div className="column is-one-third-desktop img-profile">
              <figure className="image is-128x128">
                <img className="" src={this.state.user.image} alt={this.state.user.name} />
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
          {this.canModify() &&
            <div className="level-right">
              <Link to={`/users/${this.state.user._id}/edit`} className="button is-primary">Edit</Link>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default UserShow
