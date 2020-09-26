import React, { useState, useEffect } from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import LogInButton from "./user/loginButton"
import { AppStateProvider } from './appState/globalState.context'
import HomePage from './homepage/homePage'
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
            render={() => (user
              ? (
                <AppStateProvider>
                  <HomePage />
                </AppStateProvider>
              ) : <LogInButton />)}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
