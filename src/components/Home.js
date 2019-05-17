import React from 'react'
import images from '../images'
import {Link} from 'react-router-dom'
import Auth from '../lib/Auth'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      currentImg: 0,
      images: images
    }
  }

  componentDidMount() {
    setInterval(() => {
      let currentImg = this.state.currentImg + 1
      currentImg === this.state.images.length ? currentImg = 0:null
      this.setState({ currentImg })
    }, 4000)
  }

  render() {
    return (
      <section className="section home-container" id="background-change" style={{
        backgroundImage: `url(${images[this.state.currentImg]})`
      }}>
        <div className="container title-container has-text-centered">
          <h1 className="title logohome is-1"> CRUSH </h1>
          <h2 className="subtitle is-2"> DESIGNED FOR YOU </h2>
          {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item"><button className="button is-danger">Sign Up</button></Link>}
        </div>
      </section>
    )
  }
}

export default Home
