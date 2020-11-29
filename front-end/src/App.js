import React from "react";
import "../public/styles.css";

export default function App() {
  return (
    <div className="container" ng-app="chatApp">
      <h1>Chatbox</h1>
      <div className="chatbox" ng-controller="MessageCtrl as chatMessage">
        <div className="chatbox-user-list">
          <h1>User list</h1>
          <div className="chatbox-user">
            <p>Jack Thomson</p>
          </div>
          <div className="chatbox-user">
            <p>Angelina Jolie</p>
          </div>
          <div className="chatbox-user">
            <p>George Clooney</p>
          </div>
          <div className="chatbox-user">
            <p>Seth Rogen</p>
          </div>
          <div className="chatbox-user">
            <p>John Lydon</p>
          </div>
        </div>
        <div className="chatbox-messages" ng-repeat="message in messages">
          <div className="chatbox-messages-user-message">
            <div className="chatbox-messages-user-message-ind-message">
              <p className="name">yo</p>
              <br />
              <p className="message">yo</p>
            </div>
          </div>
        </div>
      </div>
      <form>
        <input
          className="text-box"
          type="text"
          placeHolder="Enter your message"
        ></input>
      </form>
    </div>
  );
}
