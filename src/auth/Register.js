import React from 'react'
import axios from 'axios'
import moment from 'moment'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      startDate: new Date()
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.dobToAge = this.dobToAge.bind(this)

  }

  //function for converting the date of birth to an age in years
  dobToAge(e) {
    e.preventDefault()

    const str = this.state.data.dateOfBirth
    const dob = str.substr(0,10)
    const years = moment().diff(dob, 'years')

    const data = { ...this.state.data, age: years }
    this.setState({ data: data }, this.handleSubmit)

  }

  handleChange(e) {
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit() {
    //e.preventDefault()

    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))

  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.dobToAge}>

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
                </div>```

                <div className="register-container">
                  <div className="field">
                    <label className="label">Location</label>
                    <div className="select">
                      <select name="location" onChange={this.handleChange}>
                        <option value="">Select</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Birmingham">Birmingham</option>
                        <option value="Mexico City">Mexico City</option>
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
