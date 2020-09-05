import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div class="col-md-2 col-sm-12 h-100 p-3">
    <div class="d-flex flex-column">
      <div class="text-center p-3">
        <h2 class="text-white-50">Snooker</h2>
      </div>
      <div class="list-group" id="list-tab" role="tablist">
        <a class="list-group-item list-group-item-action active list-group-item-success" id="list-home-list"
          data-toggle="list" href="#list-home" role="tab" aria-controls="home">HOME</a>
        <a class="list-group-item list-group-item-action list-group-item-success" id="list-profile-list"
          data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">PROFILE</a>
        <a class="list-group-item list-group-item-action list-group-item-success" id="list-messages-list"
          data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">SHOP</a>
        <a class="list-group-item list-group-item-action list-group-item-success" id="list-settings-list"
          data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">ABOUT</a>
      </div>
    </div>
  </div>
);

export default NavBar;