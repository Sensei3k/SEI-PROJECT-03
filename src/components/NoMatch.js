import React from 'react'

const NoMatch = () => {

  return (
    <section className="hero has-background-white is-fullheight">
      <div className="hero-body has-text-centered is-vcentered">
        <div className="container">
          <p className="title is-4">We didnt find any Matches 😕. But Dont give up hope, try expanding your search 😄!</p>
          <figure>
            <img src="https://media1.tenor.com/images/dd3f777e5c4e2feb8f2ae0fe3f542f87/tenor.gif?itemid=9844035" alt="sad-face" className="no-match" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default NoMatch
