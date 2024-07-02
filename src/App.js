// src/App.js
import React from 'react';
import CodeEditor from './CodeEditor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Code Editor <tt>(TealFeed Assignment) (by Nishanth)</tt></h1>
      </header>
      <main>
        <CodeEditor />
      </main>
    </div>
  );
}

export default App;
