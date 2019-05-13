import React from 'react'

const UserCard = (props) => {
  
  return (

    <div className="card">

      <div className="card-header">
        <figure>
          <img src={props.image} alt={props.name}  />
        </figure>
      </div>

    </div>
  )
}

export default UserCard
