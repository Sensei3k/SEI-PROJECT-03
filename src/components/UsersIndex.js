import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import UserCard from './UserCard'

class UserIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('api/users')
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data.map(user =>
              <div key={user._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to ={`/users/${user._id}`}>
                  <UserCard {...user} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default UserIndex
