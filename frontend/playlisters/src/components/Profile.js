import React from "react";

function Profile() {
  return (
    <div>
      <img src="./dfltpfp.jpeg" alt="" className="pfp" />
      <h3 className="username">User Name</h3>

      <div className="pl-card">
        <img src="./dfltpfp.jpeg" alt="" className="pfp-card" />
        <h4>Playlist 1</h4>
      </div>
    </div>
  );
}

export default Profile;
