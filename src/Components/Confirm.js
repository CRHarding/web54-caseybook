import React from 'react';

const Confirm = (props) => {
  return (
    <div>
      <h4>Thank you for your post! Please confirm deets below:</h4>
      <p>title: {props.values.title}</p>
      <p>content: {props.values.content}</p>
      <button onClick={props.handleClick}>CONFIRM IT</button>
    </div>
  )
}

export default Confirm;