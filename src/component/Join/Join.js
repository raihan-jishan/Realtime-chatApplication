// import other functionilty
import React, { useState } from "react";
// encreament css file
import "../../styles/Join.css";
// Link from react router dom
import { Link } from "react-router-dom";
//  Admin Logo changing method
import Data from "../../AdminControl/Ad";
// import reacticons
import { BsChatLeftText } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
let user;
const sendUser = () => {
  // creating bu user Name
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
  
};
//   join methid function
const Join = () => {
  // use State Hook
  const [name, setname] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        {/* chat app branding  using by simple map--method*/}
        {Data.map((item) => {
          return (
            <>
              <img src={item.applicationLogo} alt="applogo" />
              <h1>
                {item.applicationName}
                <BsChatLeftText className="chatIcon" />{" "}
              </h1>
            </>
          );
        })}
        {/*   input for login  */}
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        {/* varified by method  */}
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          {/* Login Button  */}
          <button onClick={sendUser} className="joinbtn">
            Login In <BiLogIn className="loginIcon" />
          </button>
        </Link>
      </div>
    </div>
  );
};
// finally export default add user
export default Join;
export { user };
