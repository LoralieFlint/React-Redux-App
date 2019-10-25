import React, {useEffect} from 'react';
import './App.css';

import { fetchMusic } from "./actions/music";

function App() {
  useEffect(() => {
    props.fetchMusic();
  }, []);
  return (
    <div className={`app ${props.darkMode ? "dark" : ""}`}>
    
    {props.dogError && <p>Error: {props.dogError}</p>}

    {props.isDogLoading ? (
      <div className="spinner" />
    ) : (
      <img src={props.dogImage} alt="Good Boy" />
    )}
  </div>
  );
}

export default App;
