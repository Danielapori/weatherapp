import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import Signup from './Signup'



function App() {

  const [userSignIn, setUserSignIn] = useState('');

  return (
    <div className="App">
      <br></br>
      <br></br>
      {!userSignIn && <Login setUserSignIn={setUserSignIn} />}
      {!userSignIn && <Signup setUserSignIn={setUserSignIn} />}
      <div className="main">
      {userSignIn && <Home className="main"/>}
      </div>
  </div>
  );
}

export default App;