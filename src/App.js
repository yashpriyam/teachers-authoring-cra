import React, { useState, useEffect } from "react"
import { signInWithGoogle, auth } from "./firebase/firebase.utils"

import "./App.css"

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth)
    })

    return unsubscribeFromAuth()
  }, [user])

  return (
    <div className="App">
      {user ? (
        <button
          type="button"
          className="sign-out-btn"
          onClick={() => auth.signOut()}
        >
          SignOut
        </button>
      ) : (
        <button
          type="button"
          className="sign-in-btn"
          onClick={signInWithGoogle}
        >
          SignInWithGoogle
        </button>
      )}
    </div>
  )
}

export default App
