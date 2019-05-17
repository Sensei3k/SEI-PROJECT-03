import React from 'react'

const UserCard = (props) => {

  return (

    <div className="card">

      <div className="card-image">
        <figure className="image" style={{backgroundImage: `url(${props.image})`}} />
      </div>

      <div className="card-content">
        <h3 className="title is-3">{props.username}</h3>
        <h4 className="title is-3">{props.age}</h4>
      </div>

    </div>
  )
}

export default UserCard
