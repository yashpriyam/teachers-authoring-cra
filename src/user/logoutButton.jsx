import React from "react"
import { auth } from "../firebase/firebase.utils"
import "./logout.style.css"

const LogOutButton = () => {
  return (
    <>
    <button
      type="button"
      className="sign-out-btn"
      onClick={() => auth.signOut()}
    >
      SignOut
    </button>
    </>
  )
}

export default LogOutButton
