import './App.scss';
import SearchContainer from './Components/Search/SearchContainer';
import DetailedSnippet from './Components/DetailedSnippet/DetailedSnippet';
import { Redirect, Route } from "react-router-dom";
import React from "react";

window.onload = function () {
  if (window.location.href.includes('works')) {
    console.log(222);
  }
}

// if (window.location.href.includes('works')) {
//   console.log(333);
// }

window.onload = function () {
  const currentUrl = window.location.href.split('?');
  window.location.href = currentUrl[0];
}

function App() {
  return (
    <div className="App">
      {/* <Redirect from='/' to='/' /> */}
      {/* <Redirect from='/works' to='/works' /> */}
      <Route path='/works' component={DetailedSnippet} />
      <Route path='/' component={SearchContainer} />
    </div>
  );
}

export default App;
