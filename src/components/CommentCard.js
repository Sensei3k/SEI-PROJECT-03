import React from 'react'
import { Link } from 'react-router-dom'

const CommentCard = ({ content, user }) => {
  return (
    <Link to ={`/users/${user._id}`}>
      <article className="media">


        <figure classNameName="media-left">
          <img className="image-comment" src={user.image} alt={user.username}/>
        </figure>
        <div classNameName="media-content">
          <div classNameName="content">
            <p>
              <strong>{user.username}</strong> <small>{content.createdAt}</small>
              <br/>
              {content}
            </p>
          </div>
          <nav classNameName="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
    </Link>
  )
}

export default CommentCard
