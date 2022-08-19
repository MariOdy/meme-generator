import React from "react";
import "./App.css";
import Header from "./Header";
import Meme from "./Meme";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Meme />
      </div>
    </div>
  );
};

export default App;
