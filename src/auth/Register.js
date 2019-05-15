import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      startDate: new Date()
    }

    // this.handleDateChange = this.handleDateChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  // handleDateChange(e) {
  //   const date = {...this.state.data, [e.target.name]: e.target.value}
  //   this.setState({ data: date })
  // }

  // componentDidMount() {
  //   navigator.geolocation.watchPosition((position) => {
  //     const { latitude, longitude } = position.coords
  //     this.setState({ data: { coordinates: { latitude: latitude, longitude: longitude } } })
  //   })
  // }

  handleChange(e) {
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()
    //get coordinates from user location


    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  // within render, added a dropdown menu for location.
  render() {
    console.log(this.state.errors.username)
    console.log(this.state.errors.email)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>

                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" name="username" placeholder="eg: leela3000" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="register-container">
                  <div className="field">
                    <label className="label">Location</label>
                    <div className="select">
                      <select name="location" onChange={this.handleChange}>
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

                  <div className="field">
                    <div className="label">D.O.B</div>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" max="2000-01-01" onChange={this.handleChange}/>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" name="password" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input className="input" name="passwordConfirmation" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>
                </div>
                <br />
                <button className="button is-info submit-edit-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Register
