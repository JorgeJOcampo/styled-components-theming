import React from 'react';
import './App.css';
import DarkTheme from './components/Theming';
import FunctionTheming from './components/FunctionTheming';
import ThemeProp from './components/ThemeProp';
import ThemeLib from './components/ThemeLib';

function App() {
  return (
    <div className="App">
      <DarkTheme/>
      <FunctionTheming/>
      <ThemeProp/>
      <ThemeLib mode='light'/>
      <ThemeLib mode='dark'/>
    </div>
  );
}

export default App;
