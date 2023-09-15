import React from "react";
import ChatWindow from "./ChatWindow";

const App = () => {
  // Replace with real Firebase Auth user
  const user = "Alice"; 

  return (
    <div className="App">
      <ChatWindow user={user} />
    </div>
  );
};

export default App;