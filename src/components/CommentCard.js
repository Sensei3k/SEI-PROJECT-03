import React from 'react'

const CommentCard = ({ content, user }) => {
  return (
    <div className="card">

      <div className="card-header">
        <figure>
          <img src={user.image} alt={user.username} />
        </figure>
        <p>{user.username}</p>
      </div>
      <div className="card-content">
        <p>{content}</p>
        <p>{content.createdAt}</p>
      </div>

    </div>
  )
}

export default CommentCard
