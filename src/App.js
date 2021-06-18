import './App.scss';
import Search from './Components/Search/Search';
import DetailedSnippet from './Components/DetailedSnippet/DetailedSnippet';
import { Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Route path='/details/' component={DetailedSnippet} />
      <Route path='/' component={Search} />
    </div>
  );
}

export default App;
