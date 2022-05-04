import React from 'react';
import {Link} from 'react-router-dom';

const PostForm = (props) => {
  const { onChange, onSubmit, postValues } = props;

  return (
    <div>
      <h3>CREATE A POST</h3>
      <form className="post-wrapper" onSubmit={onSubmit}>
        <label>Title
          <input
            type="text"
            name="title"
            value={postValues.title}
            maxLength="50"
            onChange={onChange}
          />
        </label>
        <label>Content
          <textarea 
            name="content"
            value={postValues.content}
            maxLength="600"
            onChange={onChange}
          />
        </label>
        <Link to="/confirm">POST IT</Link>
      </form>
    </div>
  )
}

export default PostForm;