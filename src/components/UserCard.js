import React from 'react'

const UserCard = (props) => {
  return (
    <div className="card">

      <div className="card-header">
        <h3 className="card-header-title">{props.username}</h3>
      </div>

    </div>
  )
}

export default UserCard
