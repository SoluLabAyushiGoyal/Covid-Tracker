import React from "react";
import "./userDetail.css";
import Profile from "./Profile";

const UserDetail = () => {
  //console.log("problem");
  return (
    <>
      <div className="detailContainer">
        <Profile />
        <input
          type="text"
          placeholder="Full Name"
          required
          className="detailinput"
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          required
          className="detailinput"
        />
        <br />
        <input
          type="number"
          minlength="10"
          maxlength="10"
          placeholder="Mobile Number"
          required
          className="detailinput"
        />
        <br />
        <input
          type="date"
          placeholder="Date Of Birth"
          className="detailinput"
        />
        <br />
        <input type="text" placeholder="Address" className="detailinput" />
        <br />
        <input type="text" placeholder="Country" className="detailinput" />
        <br />
        <input type="text" placeholder="State" className="detailinput" />
        <br />
        <input
          type="number"
          placeholder="Postal Code"
          minLength="6"
          maxlength="6"
          required
          className="detailinput"
        />
      </div>
    </>
  );
};

export default UserDetail;
