import React from 'react'
import images from '../images'

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
      <section className="section" id="background-change" style={{
        backgroundImage: `url(${images[this.state.currentImg]})`
      }}>
        <div className="container">
          <h1 className="title logohome is-1"> CRUSH </h1>
          <h2 className="subtitle is-2"> DESIGNED FOR YOU </h2>
        </div>
      </section>
    )
  }
}

export default Home
