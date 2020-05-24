import React from 'react'
import {Jumbotron, Card , ListGroup, Alert} from 'react-bootstrap'

class Profile extends React.Component {
    render() {
      return <div class="container">
<h1 className="text-white logo-text">{this.props.name}</h1><br/>
<Jumbotron>
  <h1>Houziaux Mike</h1>

  I'm an IT engineer and I'm working as a pentester for Orange Cyberdefense.<br/>

I am a contributor to the <a href="http://rtfm.re/">RTFM</a> association, especially to the challenges creations part of the <a href="https://twitter.com/sigsegv_event">Sigvsegv event</a>.<br/>

I also contribute to several open source projects, such as this <a href="https://inventory.rawsec.ml/tools.html">inventory</a> of cybersecurity oriented tools.<br/>

I am also a member of the CTF team <a href="https://inshallhack.org/">Inshallhack</a><br/>

<br/>
<Card style={{ width: '18rem' }}>
  <Card.Header>Links</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><a href="https://www.root-me.org/jenaye?lang=fr">Root-me</a></ListGroup.Item>
    <ListGroup.Item><a href="https://www.hackthebox.eu/profile/12858">Hackthebox</a></ListGroup.Item>
    <ListGroup.Item><a href="https://twitter.com/Jenaye_fr">Twitter</a></ListGroup.Item>
    <ListGroup.Item><a href="https://github.com/jenaye">Github</a></ListGroup.Item>
  </ListGroup>
</Card>

<br/>
<Alert variant="dark">
    Contact by email  jenaye[@]protonmail.com
  </Alert>
</Jumbotron>


      </div>;
    }
  }

export default Profile;