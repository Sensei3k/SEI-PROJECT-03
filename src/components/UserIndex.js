import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Loading from './Loading'
import UserCard from './UserCard'

class UserIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('api/users')
      .then(res => this.setState({ users: res.data }))
  }

  render() {
    if(!this.state.users) return <Loading />
    return (
      <section className="section user-background">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.users.map(user =>
              <div key={user._id} className="column is-one-third-desktop is-half-tablet">
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
