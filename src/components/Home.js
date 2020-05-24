import React from 'react'

import logo from '../pics/JenayeLogosansitret.png';

export default function Profile() {
  return <div className="container-home">
    
      <div className="barre"></div>
      <img className="MyLogo" src={logo} alt="Logo" />
      <h2 className="note white-text"><a href="https://github.com/jenaye" >Github</a> | <a href="https://twitter.com/@Jenaye_fr">Twitter</a></h2>
    </div>;
}