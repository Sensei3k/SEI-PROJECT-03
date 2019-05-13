import React from 'react'

const UserCard = (props) => {
  return (
    <div className="card">

      <div className="card-header">
        <figure>
          <img src={props.image || 'https://i0.wp.com/reviveyouthandfamily.org/wp-content/uploads/2013/01/headshot-placeholder.jpg?fit=600%2C600&ssl=1'} alt={props.name}  />
        </figure>
      </div>

    </div>
  )
}

export default UserCard
