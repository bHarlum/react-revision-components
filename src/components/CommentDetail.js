import React from 'react';



const CommentDetail = (props) => {
  const date = new Date();
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date" >{`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}</span>
          </div>
          <div className="text">
            {props.body}
          </div>
        </div>
      </div>
  )
};

export default CommentDetail;