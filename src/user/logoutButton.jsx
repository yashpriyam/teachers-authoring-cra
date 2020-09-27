import React from "react"
import { auth } from "../firebase/firebase.utils"
import "./logout.style.css"

const LogOutButton = () => {
  // console.log(auth);
  // const { photoURL, email, displayName } = auth
  return (
    <div className='sign-out-btn-container'>
      <button
        type="button"
        className="sign-out-btn"
        onClick={() => auth.signOut()}
      >
        SignOut
      </button>
    </div>
  )
}

export default LogOutButton
