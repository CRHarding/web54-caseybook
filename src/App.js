import "./App.css";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import PostForm from "./Components/PostForm";
import Confirm from "./Components/Confirm";
import Profile from "./Components/Profile";
import Home from "./Components/Home";

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

const initialPostValues = {
  timeStamp: "",
  username: "",
  content: "",
  title: "",
  comments: [],
  tips: 0
}

function App() {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialPostValues);

  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    formValues.timeStamp = new Date();
    formValues.username = user.username;
    formValues.id = uuidv4();
    setUser({...user, posts: user.posts.concat(formValues)});
    setFormValues(initialPostValues);
    history.push("/");
  }

  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/post">
        <PostForm 
          onChange={onChange} 
          postValues={formValues} 
          onSubmit={onSubmit}
        />
      </Route>
      <Route path="/confirm">
        <Confirm handleClick={onSubmit} values={formValues} />
      </Route>
      <Route path="/profile">
        <Profile user={user} />
      </Route>
    </div>
  );
}

export default App;