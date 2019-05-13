import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'
import Loading from './Loading'
import moment from 'moment'


class UserShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null
    }

    //this.findMatches = this.findMatches.bind(this)
    this.displayAge = this.displayAge.bind(this)
  }

  componentDidMount() {
    // console.log(this.props.match.params.id, 'props')
    console.log(this.props, 'match')

    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  displayAge(){
    const str = this.state.user.dateOfBirth
    const dob = str.substr(0,9)
    const years = moment().diff(dob, 'years')
    return years
  }

  // findMatches() {
  //   //redirect the user to their match index page
  //   this.props.history.push(`${this.props.match.params.id}/matches`)
  // }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }


  render() {
    if(!this.state.user) return <Loading />
    console.log(this.state.user.dateOfBirth)
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
              <p className="subtitle">Age: {this.displayAge()}</p>
              <p className="subtitle">Location: {this.state.user.location}</p>
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

          {/*Add a button for finding matches*/}
          <Link to ={{
            pathname: `/users/${this.props.match.params.id}/matches`,
            state: {id: this.props.match.params.id}
          }}>
            <button className="button is-danger">Find Matches</button>
          </Link>

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
