import React from 'react'
import axios from 'axios'

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
                  {this.state.errors.username && <div className="help is-danger">{this.state.errors.username}</div>}
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange} />
                  </div>
                  {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" name="password" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>
                  {this.state.errors.password && <div className="help is-danger">{this.state.errors.password}</div>}
                </div>

                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input className="input" name="passwordConfirmation" type="password" placeholder="eg: ••••••••" onChange={this.handleChange} />
                  </div>
                  {this.state.errors.passwordConfirmation && <div className="help is-danger">{this.state.errors.passwordConfirmation}</div>}
                </div>

                <div className="field">
                  <label className="label">Date of Birth</label>
                  <div className="control">
                    <input className="input" name="Date of Birth" type="number" placeholder="YYYY-MM-DD" onChange={this.handleChange} />
                  </div>
                  {this.state.errors.dateOfBirth && <div className="help is-danger">{this.state.errors.dateOfBirth}</div>}
                </div>

                <div className="field">
                  <label className="label">Location</label>
                  <div className="control">
                    <input className="input" name="Location" placeholder="eg: London, Tokyo, New York " onChange={this.handleChange} />
                  </div>
                  {this.state.errors.location && <div className="help is-danger">{this.state.errors.location}</div>}
                </div>

                <div className="field">
                  <label className="label">Gender</label>
                  <div className="select">
                    <select>
                      <option>Pick one</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      name="image"
                      placeholder="eg: https://gameofthrones.fandom.com/jon-snow.png"
                      onChange={this.handleChange}
                      // Ask the team
                      // value={this.data.image || ''}
                    />
                  </div>
                  {this.state.errors.image && <div className="help is-danger">{this.state.errors.image}</div>}
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

export default Register
