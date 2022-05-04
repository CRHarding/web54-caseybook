import React from "react";

const Profile = (props) => {
  const { user } = props;
  return (
    <div>
      <h4>USER PROFILE PAGE BOOOOO YAH!</h4>
      <p>Welcome, {user.firstName} {user.lastName}</p>
      <h5>{user.username}</h5>
      <img src={user.profilePic} alt="THOR" />
      <p>About: {user.about}</p>
      {user.posts.map(post => {
        return (
          <div key={post.timeStamp}>
            <h4>{post.title}</h4>
            <p>{post.timeStamp.toLocaleDateString()}</p>
            <p>{post.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Profile;