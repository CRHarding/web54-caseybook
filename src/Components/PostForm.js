import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostForm = (props) => {
  const { onChange, onSubmit, postValues, edit, posts } = props;
  const { id } = useParams();

  if (edit && posts) {
    const post = posts.find(post => post.id === id);
    postValues.title = post.title;
    postValues.content = post.content;
  }

  return (
    <div>
      <h3>{id ? "EDIT A POST" : "CREATE A POST"}</h3>
      <form className="post-wrapper" onSubmit={(e) => onSubmit(e, id)}>
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
        {id 
          ? <input type="submit" value="Edit Post" />
          : <Link to="/confirm">POST IT</Link> }
      </form>
    </div>
  )
}

export default PostForm;