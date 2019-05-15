import React from 'react'
import axios from 'axios'
//import Auth from '../lib/Auth'
import ReactFilestack from 'filestack-react'

const options = {
  accept: 'image/*',
  transformations: {
    crop: true,
    circle: true,
    rotate: true
  }
}

// const filestackKey= process.env.FILESTACK
// console.log(filestackKey, 'key')

// import Auth from '../lib/Auth'
import Loading from './loading'


class UserEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      errors: {},
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUploadImages = this.handleUploadImages.bind(this)

    this.updateLocation = this.updateLocation.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })

    console.log(this.state.data)
  }

  handleSubmit(e) {
    e.preventDefault()

    // Auth.getToken()
    //console.log('recognise submit')
    //console.log(this.state.data)

    axios.put(`/api/users/${this.props.match.params.id}`, this.state.data)
      .then(res => {
        this.props.history.push(`/users/${res.data._id}`)
        // this.props.history.push(`/users/${this.props.match.params.id}`)
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))

  }

  updateLocation(e) {

    e.preventDefault()
    console.log('button recognised')

    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      const data = {...this.state.data, coordinates: {latitude: latitude, longitude: longitude}}
      this.setState({ data: data })

      console.log(this.state.data)
    })
  }

  handleUploadImages(result) {
    console.log(result, 'result')
    const data = { ...this.state.data, image: result.filesUploaded[0].url}
    this.setState({ data })
    console.log(this.state.data)
  }

  render() {
    if(!this.state.data._id) return <Loading />
    return (
      <section className="section user-background">
        <div className="container edit-container">
          <div className="columns edit-columns is-multiline is-mobile">
            <form className="edit-form" onSubmit={this.handleSubmit}>
              <div className="column is-one-third-desktop is-half-tablet is-mobile level-left">
                <div className="field">
                  <label className="label">Profile Photo</label>
                  <ReactFilestack
                    apikey={process.env.FILESTACK}
                    buttonText="Upload Photo"
                    buttonClass="button is-primary"
                    className="upload-image"
                    options={options}
                    onSuccess={(result) => this.handleUploadImages(result)}
                    preload={true}
                  />
                  {this.state.data.image && <img src={this.state.data.image} />}
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
              </div>
              <div className="column is-two-thirds-desktop level-right is-half-tablet is-mobile">
                <div className="container location-container is-flex">
                  <div className="field">
                    <label className="label">Location</label>
                    <div className="select">
                      <select name="location" onChange={this.handleChange} value={this.state.data.location || ''}>
                        <option value="">Select</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Mexico-City">Mexico City</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Paris">Paris</option>
                        <option value="Brussels">Brussels</option>
                        <option value="Quebec">Qubec</option>
                        <option value="Montreal">Montreal</option>
                        <option value="New York">New York</option>
                        <option value="Venice">Venice</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Match Radius</label>
                    <div className="control">
                      <input
                        className="input editform-input"
                        type="text"
                        pattern="[0-9]*"
                        name="radius"
                        placeholder="please enter the maximum distance (km) for your matches"
                        onChange={this.handleChange}
                        value={this.state.data.radius || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary" onClick={this.updateLocation}>Update Location</button>
                    </div>
                  </div>
                </div>
                <div className="container is-flex age-range">
                  <div className="field">
                    <label className="label">Min Age Range</label>
                    <div className="control">
                      <input
                        className="input editform-input"
                        type="text"
                        name="minAge"
                        placeholder="eg. 25"
                        onChange={this.handleChange}
                        value={this.state.data.minAge || ''}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Max Age Range</label>
                    <div className="control">
                      <input
                        className="input editform-input"
                        type="text"
                        name="maxAge"
                        placeholder="eg. 35"
                        onChange={this.handleChange}
                        value={this.state.data.maxAge || ''}
                      />
                    </div>
                  </div>
                </div>
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
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Both">Both</option>
                          <option value="Other">Other</option>
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
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Both">Both</option>
                          <option value="Other">Other</option>
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
