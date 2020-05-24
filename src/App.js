import React from 'react';
import './App.css';
import './BootstrapNavbar';
import BootstrapNavbar from './BootstrapNavbar';
 
function App({ className }) {
  return (
 

     <div className={className}>
      <BootstrapNavbar pseudo="Jenaye"></BootstrapNavbar>
    </div>
  );
}
 
export default App;