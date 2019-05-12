import React from 'react'
import axios from 'axios'
import Auth from '../lib/Auth'

class UserEdit extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleImageChange(e) {
    this.setState({
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.put(`api/users/${this.state.data._id}`, this.state.data, { headers: {'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push(`/users/${this.state.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
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
                  <div className="control">
                    <input
                      className="input"
                      type="file"
                      placeholder=""
                      onChange={this.handleImageChange}
                      value={this.state.file || ''}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      name="name"
                      placeholder="eg: Charlie"
                      onChange={this.handleChange}
                      value={this.state.data.username || ''}
                    />
                  </div>
                  <div className="field">
                    <div className="label">D.O.B</div>
                    <div className="control">
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        max="2000-01-01" onChange={this.handleChange} value={this.state.data.dateOfBirth || ''}
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
              </div>
              <div className="column is-two-thirds-desktop level-right is-half-tablet is-mobile">
                <div className="field">
                  <label className="label">About Me</label>
                  <div className="control">
                    <input
                      className="input"
                      name="about"
                      placeholder="eg. I'm a fashion inthusiast..."
                      onChange={this.handleChange}
                      value={this.state.data.aboutMe || ''} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Interests</label>
                  <div className="control">
                    <input
                      className="input"
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
                        <select name="location" onChange={this.handleChange} value={this.state.data.gender || ''}>
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
                        <select name="location" onChange={this.handleChange} value={this.state.data.interestedIn || ''}>
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

export default UserEdit
