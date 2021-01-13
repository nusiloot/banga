import React from 'react'
import {Jumbotron, Card , ListGroup, Button, Accordion , Alert} from 'react-bootstrap'

const links = [
  {
    class: 'text-dark',
    link: 'https://www.root-me.org/jenaye?lang=fr',
    name: 'Root-me',
  },
  {
    class: 'text-danger',
    link: 'https://www.hackthebox.eu/profile/12858',
    name: 'Hackthebox',
  },
  {
    link: 'https://twitter.com/Jenaye_fr',
    name: 'Twitter',
  },
  {
    link: 'https://github.com/jenaye',
    name: 'Github',
  }
];

export const Profile = () => (
<>
  <h1 className="text-white logo-text">Profile</h1>
  <Jumbotron>
    <h1>Houziaux Mike</h1>

    I'm an IT engineer and I'm working as a pentester for Orange Cyberdefense.<br/>

    I am a contributor to the <a target='_blank' rel='noopener noreferrer' href="http://rtfm.re/">RTFM</a> association, especially to the challenges creations part of the <a href="https://twitter.com/sigsegv_event">Sigvsegv event</a>.<br/>

    I also contribute to several open source projects, such as this <a target='_blank' rel='noopener noreferrer'  href="https://inventory.rawsec.ml/tools.html">inventory</a> of cybersecurity oriented tools.<br/>

    I am also a member of the CTF team <a target='_blank' rel='noopener noreferrer'  href="https://inshallhack.org/">Inshallhack</a><br/>

    <br/>
    <Card className='col-12 col-sm-10 col-md-6 p-0'>
      <Card.Header>Links</Card.Header>
      <ListGroup variant="flush">
        {
          links.map((item, key) => (
            <ListGroup.Item key={key}>
              <a target='_blank' rel='noopener noreferrer' href={ item.link } className={item.class || ''}>{ item.name }</a>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </Card>
<br/>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="0">
        Certifications
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          Cyber Security Foundation - 2021 <br/>
          Azure Storage Security - 2019 <br/>
          Cisco VPNs with GNS3 ( GRE, IPSec, DMVPN ) - 2019 <br/>
          Cryptocurrency Fundamentals - 2018
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    <br/>
    <Alert variant="dark">
      Contact by email jenaye[@]protonmail.com
    </Alert>
    <Alert variant="dark">
      You can push pull request if you find bugs :  <a target='_blank' rel='noopener noreferrer' href="https://github.com/jenaye/banga">here</a>
    </Alert>
  </Jumbotron>
  </>
);
