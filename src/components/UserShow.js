import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/Auth'
import CommentCard from './CommentCard'
import Loading from './Loading'
import moment from 'moment'
import Footer from './Footer'

class UserShow extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.displayAge = this.displayAge.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post(`api/users/${this.state.user._id}/comments`, this.state.data, { headers: {'Authorization': `Bearer ${token}` }
    })
      .then(res => this.props.history.push(`/users/${res.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }


  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  displayAge(){
    const str = this.state.user.dateOfBirth
    const dob = str.substr(0,9)
    const years = moment().diff(dob, 'years')
    return years
  }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user._id
  }

  render() {
    if (!this.state.user) return <Loading />
    return (
      <section>
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
                <p className="subtitle">Age: {this.displayAge()}</p>
                <p className="subtitle">Location: {this.state.user.location}</p>
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-full-desktop">
                <p className="subtitle is-3">About Me</p>
              </div>
              <div className="column is-desktop">
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="column is-full-desktop">
                <p className="subtitle is-3">Interests</p>
              </div>
              <div className="column is-desktop">
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
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

            {this.canModify() && this.state.user.comments.length &&
            <div>
              <div className="column is-full-desktop">
                <p className="subtitle is-3">Comments</p>
              </div>
              {this.state.user.comments.map(comment =>
                <div key={comment._id}>
                  <CommentCard {...comment} />
                </div>
              )}
            </div>
            }

            {!this.canModify() &&
              <form onSubmit={this.handleSubmit}>
                <label>
                    Leave a message:
                </label>
                <input type="textarea" name="content" value={this.state.value} onChange={this.handleChange} />
                <button className="button is-info submit-edit-button">Submit Changes</button>
              </form>

            }
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
        </section>

        <Footer />
      </section>

    )
  }
}

export default UserShow

// <div key={comment._id}>
//   <p>{comment.content}</p>
//   <p>{comment.user.username}</p>
// </div>
