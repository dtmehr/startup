import React from 'react';
import './about.css';


export function About(props) {

  return (
    <main class="container-fluid bg-secondary text-center">
      <div>
        <div id="picture" class="picture-box"><img width="400px" src="placeholder.jpg" alt="braceletclubpic" /></div>

        <p>
          BraceletClub is your home for all the lastest fashion in the bracelet world! 
        </p>

        <div id="quote" class="quote-box bg-light text-dark">
          <p class="quote">We started this company to help everyone express themselves in very unique and personable way.
          We are confident you will find something you love on our site!</p> 
        </div>
      </div>
      <div class="chat-section">
        <h2>Chat</h2>
        <div class="chat-window">
          <ul id="messages"></ul>
        </div>
        <input id="message-input" type="text" placeholder="Type a message..."></input>
        <button id="send-btn">Send</button>
      </div>
      
    </main>
  );
}
