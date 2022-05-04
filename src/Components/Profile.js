/**
 * 
 const initialUser = {
  firstName: "Casey",
  lastName: "Harding",
  username: "CRHarding",
  profilePic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.amcnetworks.com%2Fbbcamerica.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fanglo_2000x1125_thorgladiator.jpg&f=1&nofb=1",
  email: "c@c.com",
  age: 72,
  about: "Lorem ipsum dolor sit amet.",
  posts: []
}
 */

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