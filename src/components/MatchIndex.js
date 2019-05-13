import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import UserCard from './UserCard'

class MatchIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //consider changing the below to 'matches'
      users: []
    }
  }

  componentDidMount() {
    axios.get(`api/users/${this.props.match.params.id}/matches`)
      .then(res => this.setState({ users: res.data }))
  }

  render() {
    console.log(this.state.data)
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

export default MatchIndex