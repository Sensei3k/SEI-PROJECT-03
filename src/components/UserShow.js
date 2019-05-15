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
    e.target.reset()

    const token = Auth.getToken()

    axios.post(`api/users/${this.state.user._id}/comments`, this.state.data, { headers: {'Authorization': `Bearer ${token}` }
    })
      .then(res => this.props.history.push(`/users/${res.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }


  getUser() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getUser()
    }
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
            <div className="columns is-multiline is-mobile columns-profile">
              <div className="column is-half-desktop img-profile">
                <figure className="image-profile">
                  <img className="image-profile" src={this.state.user.image || 'https://i0.wp.com/reviveyouthandfamily.org/wp-content/uploads/2013/01/headshot-placeholder.jpg?fit=600%2C600&ssl=1'} alt={this.state.user.name} />
                </figure>
              </div>
              <div className="column is-half-desktop">
                <p className="subtitle is-4">Name: {this.state.user.username}</p>
                <p className="subtitle">Age: {this.displayAge()}</p>
                <p className="subtitle">Location: {this.state.user.location}</p>
                <div className="container is-flex">
                  {/*button for editing profiles*/}
                  {this.canModify() &&
                      <div className="">
                        <Link to={`/users/${this.state.user._id}/edit`} className="button is-info">Edit Profile</Link>
                      </div>
                  }
                  {/*a button for finding matches*/}
                  {this.canModify() &&
                  <Link to ={{
                    pathname: `/users/${this.props.match.params.id}/matches`,
                    state: {id: this.props.match.params.id}
                  }}>
                    <button className="button is-danger">Find Matches</button>
                  </Link>
                  }
                </div>
              </div>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column is-half-desktop">
                <p className="subtitle is-4">About Me</p>
                <p className="subtitle">{this.state.user.aboutMe || ''}</p>
              </div>
              <div className="column is-half-desktop">
                <p className="subtitle is-4">Interests</p>
                <p className="subtitle">{this.state.user.interests || ''}</p>
              </div>
            </div>
            <div className="columns is-multiline is-mobile">
              <hr />

              <div className="column is-full-desktop">
                <p className="subtitle is-4">Comments</p>
              </div>
              {this.canModify() && (this.state.user.comments.length &&
              <div className="container">

                <div className="column is-desktop">
                  {this.state.user.comments.map(comment =>
                    <div key={comment._id}>
                      <CommentCard {...comment} />
                    </div>
                  )}
                </div>
              </div>
              || 'You haven\'t received any comments yet.')}
            </div>
            <br/>
            <div className="columns is-multiline">
              <div className="column is-desktop">
                {!this.canModify() &&
                  <form onSubmit={this.handleSubmit}>
                    <br/>
                    <textarea rows="4" cols="60" className="leave-comment" type="text" name="content" placeholder="Max: 280 characters" value={this.state.value} onChange={this.handleChange} />
                    <br/>
                    <button className="button is-info submit-edit-button">Post</button>
                  </form>
                }
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>

    )
  }
}

export default UserShow
