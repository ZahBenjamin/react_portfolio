import React from 'react';

export default function Contact() {
  return (
    <div style={{padding: 15}}>
    <div className='container'>
    <h2>Contact Me</h2>
    <p>
      Please use the form or one of the social media links below to contact me. Thanks!
    </p>
    <form>
<div className="form-group">
  <label for="InputEmail">Email address</label>
  <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
</div>
<div className="form-group">
  <label for="TextArea">Why are you reaching out?</label>
  <textarea className="form-control" id="TextArea" rows="3"></textarea>
</div>
<button style={{marginTop: '5px'}} type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
  </div>
);
}