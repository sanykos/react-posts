import React from 'react';
import './App.css';
import Posts from './components/posts'

const App: React.FC = () => {


  return (
    <div id="app">
      <h1>Get Posts</h1>
      <Posts />
    </div>
  )
}

export default App;
