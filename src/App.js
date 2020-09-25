import React, { useState, useEffect } from 'react';
import { signInWithGoogle } from './firebase/firebase.utils';
import { auth } from './firebase/firebase.utils';
import './App.css';

function App() {
  const [ user, setUser ] = useState('')


  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      setUser(userAuth)
    });  
  }, [user])


  return (
    <div className="App">
      {user
      ? <button className='sign-out-btn' onClick={() => auth.signOut()}>SignOut</button>
      : <button className='sign-in-btn' onClick={signInWithGoogle}>SignInWithGoogle</button>
      }
    </div>
  );
}

export default App;
