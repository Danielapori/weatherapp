import React from 'react';
import Home from './Home'
import Login from './login'

function App() {
  return (
    <div className="row">
      <div className="col-8">
       <Home />
      </div>

      <div className="col-4">
       <Login />
      </div>
      
    </div>
  );
}
export default App;