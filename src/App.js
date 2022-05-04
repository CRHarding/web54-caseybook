import "./App.css";
import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";

import PostForm from "./Components/PostForm";
import Confirm from "./Components/Confirm";

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
    formValues.timeStamp = Date.now();
    formValues.username = user.username;
    setUser({...user, posts: user.posts.concat(formValues)});
    history.push("/");
  }

  return (
    <div>
      <header>
        <h1>Welcome to CaseyBook</h1>
        <h2>It's like Facebook only made by some guy named Casey</h2>
      </header>
      <Route exact path="/">
        <PostForm 
          onChange={onChange} 
          postValues={formValues} 
          onSubmit={onSubmit}
        />
      </Route>
      <Route path="/confirm">
        <Confirm handleClick={onSubmit} values={formValues} />
      </Route>
    </div>
  );
}

export default App;
