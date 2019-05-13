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
                <img className="" src={this.state.user.image || 'https://i0.wp.com/reviveyouthandfamily.org/wp-content/uploads/2013/01/headshot-placeholder.jpg?fit=600%2C600&ssl=1'} alt={this.state.user.name} />
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
              <p className="subtitle is-3">About Me</p>
            </div>
            <div className="column is-desktop">
              <p className="subtitle">{this.state.user.aboutMe || ''}</p>
            </div>
            <div className="column is-full-desktop">
              <p className="subtitle is-3">Interests</p>
            </div>
            <div className="column is-desktop">
              <p className="subtitle">{this.state.user.interests || ''}</p>
            </div>
          </div>
          {/*a button for finding matches*/}
          {this.canModify() &&
          <Link to ={{
            pathname: `/users/${this.props.match.params.id}/matches`,
            state: {id: this.props.match.params.id}
          }}>
            <button className="button is-danger">Find Matches</button>
          </Link>
          }

          {/*button for editing profiles*/}
          {this.canModify() &&
            <div className="level-right">
              <Link to={`/users/${this.state.user._id}/edit`} className="button is-info">Edit</Link>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default UserShow
