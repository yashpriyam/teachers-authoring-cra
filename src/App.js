import React, { useState, useEffect } from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import LogInButton from "./user/loginButton"
import LogOutButton from "./user/logoutButton"
import { auth } from "./firebase/firebase.utils"

import "./App.css"

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth)
      console.log(userAuth)
    })
  }, [user])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (user ? <LogOutButton /> : <LogInButton />)}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
