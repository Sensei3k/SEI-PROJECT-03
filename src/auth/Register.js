import React from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  // within render, added a dropdown menu for location.
  render() {
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

                <div className="field">
                  <label className="label">Location</label>
                  <div className="select">
                    <select>
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
                  <label className="label">Date</label>
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={this.state.startDate}
                    onChange={this.handleChange} />
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

                <button className="button is-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


// <div className="field">
//   <label className="label">Date of Birth</label>
//   <div className="control">
//     <input className="input" name="Date of Birth" type="number" placeholder="YYYY-MM-DD" onChange={this.handleChange} />
//   </div>
// </div>
//
// <div className="field">
//   <label className="label">Location</label>
//   <div className="control">
//     <input className="input" name="Location" placeholder="eg: London, Tokyo, New York " onChange={this.handleChange} />
//   </div>
// </div>

export default Register
