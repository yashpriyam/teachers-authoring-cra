import React from "react"
import { signInWithGoogle } from "../firebase/firebase.utils"
import "./login.style.css"

const LogInButton = () => {
  return (
    <button type="button" className="sign-in-btn" onClick={signInWithGoogle}>
      Sign In With Google
    </button>
  )
}

export default LogInButton
