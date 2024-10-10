import React from 'react';
import { UserProvider } from './UserContext'; 
import UserProfile from './UserProfile'; 
function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>usuario que queda cargado </h1>
        <UserProfile /> 
      </div>
    </UserProvider>
  );
}
export default App;
