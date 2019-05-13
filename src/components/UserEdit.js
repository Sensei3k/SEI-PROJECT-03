
import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'
import ReactFilestack from 'filestack-react'

const options = {
  accept: 'image/*',
  maxFiles: 1,
  storeTo: {
    location: 's3'
  },
  transformations: {
    crop: false,
    circle: true,
    rotate: true
  }
}

// const filestackKey= process.env.FILESTACK
// console.log(filestackKey, 'key')

class UserEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      errors: {},
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
    // this.onSuccess = this.onSuccess.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  // onSuccess(e) {
  //   // handle result here
  // }

  handleSubmit(e) {
    e.preventDefault()

    // Auth.getToken()
    console.log('recognise submit')
    console.log(this.state.data)

    axios.put(`/users/${this.props.match.params.id}`, this.state.data)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
        // this.props.history.push(`/users/${this.props.match.params.id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))

    console.log(this.state.data)
  }

  render() {
    return (
      <section className="section user-background">
        <div className="container edit-container">
          <div className="columns edit-columns is-multiline is-mobile">
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <div className="column is-one-third-desktop is-half-tablet is-mobile level-left">
                <div className="field">
                  <label className="label">Profile Photo</label>
                  <ReactFilestack
                    apikey="AfhH1JCT0RgGDN0EoyZNoz"
                    buttonText="Upload Photo"
                    buttonClass="upload-photo"
                    options={options}
                    preload={true}
                  />
                </div>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="username"
                      placeholder="eg: Charlie"
                      onChange={this.handleChange}
                      value={this.state.data.username || ''}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Location</label>
                  <div className="select">
                    <select name="location" onChange={this.handleChange} value={this.state.data.location || ''}>
                      <option value="">Select</option>
                      <option value="Amsterdam">Amsterdam</option>
                      <option value="london">London</option>
                      <option value="manchester">Manchester</option>
                      <option value="birmingham">Birmingham</option>
                      <option value="mexico-city">Mexico City</option>
                      <option value="Berlin">Berlin</option>
                      <option value="Paris">Paris</option>
                      <option value="Brussels">Brussels</option>
                      <option value="Qubec">Qubec</option>
                      <option value="Montreal">Montreal</option>
                      <option value="New York">New York</option>
                      <option value="Venice">Venice</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-two-thirds-desktop level-right is-half-tablet is-mobile">
                <div className="field">
                  <label className="label">About Me</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="aboutMe"
                      placeholder="eg. I enjoy socialising with friends..."
                      onChange={this.handleChange}
                      value={this.state.data.aboutMe || ''} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Interests</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="interests"
                      placeholder="eg. Walking, Cooking, Socialising..."
                      onChange={this.handleChange}
                      value={this.state.data.interests || ''} />
                  </div>
                </div>
                <div className="genders-container">
                  <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                      <div className="select">
                        <select name="gender" onChange={this.handleChange} value={this.state.data.gender || ''}>
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="both">Both</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Interested In</label>
                    <div className="control">
                      <div className="select">
                        <select name="interestedIn" onChange={this.handleChange} value={this.state.data.interestedIn || ''}>
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="both">Both</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <br/>
                <button className="button is-info submit-edit-button">Submit Changes</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}
//


export default UserEdit
