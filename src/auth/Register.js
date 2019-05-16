import React from 'react'
import axios from 'axios'

// import moment from 'moment'

import Footer from '../components/Footer'
// import { ToastContainer, toast } from 'react-toastify'

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
    this.ageValidator = this.ageValidator.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
    const data =  {...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data: data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({errors: err.response.data.errors}))
  }

  render() {
    return (
      <section>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half-desktop is-two-thirds-tablet">
                <form onSubmit={this.handleSubmit}>

                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input className="input"
                        name="username"
                        placeholder="eg: leela3000"
                        onChange={this.handleChange} />
                    </div>
                    {this.state.errors.username && <div className="help is-danger">{this.state.errors.username}</div>}
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input className="input"
                        name="email"
                        placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                    </div>
                    {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
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
                      <input type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        onChange={this.handleChange}
                      />
                    </div>
                    {this.state.errors.dateOfBirth && <div className="help is-danger">{this.state.errors.dateOfBirth}</div>}
                  </div>

                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input className="input"
                        name="password"
                        type="password"
                        placeholder="eg: ••••••••"
                        onChange={this.handleChange} />
                    </div>
                    {this.state.errors.password && <div className="help is-danger">{this.state.errors.password}</div>}
                  </div>

                  <div className="field">
                    <label className="label">Password Confirmation</label>
                    <div className="control">
                      <input className="input"
                        name="passwordConfirmation"
                        type="password"
                        placeholder="eg: ••••••••"
                        onChange={this.handleChange} />
                    </div>
                    {this.state.errors.passwordConfirmation && <div className="help is-danger">{this.state.errors.passwordConfirmation}</div>}
                  </div>
                  <button className="button is-info submit-edit-button">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    )
  }
}


export default Register





// ageValidator() {
//   const str = this.state.data.dateOfBirth
//   const years = moment().diff(str, 'years')
//   return years >= 21 ? toast.success('You are old enough to enter this site!', {containerId: 'E'}) : toast.error('You are not old enough to enter this site!', {containerId: 'E'})
// }

// <button onClick={this.ageValidator}>verify age</button>

// <ToastContainer
// enableMultiContainer
// containerId= "E"
// position="top-right"
// hideProgressBar={true}
// rtl={false}
// closeOnClick
// autoClose={2000}
// toastClassName="validator-toast"
// />
