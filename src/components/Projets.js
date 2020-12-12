import React from 'react'
import {Jumbotron, Card , ListGroup, Alert} from 'react-bootstrap'

const links = [
  {
    class: 'text-dark',
    link: 'https://github.com/CMEPW/Smersh',
    name: 'Smersh',
  },
];

export const Projets = () => (
<>
  <h1 className="text-white logo-text">Projets</h1>
  <Jumbotron>
  <img className="LogoSmersh" src='/logo-smersh.png' alt="Logo Smersh" />
    Smersh is a pentest oriented collaborative tool used to track the progress of your company's missions.<br/>
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
    <Alert variant="dark">
      Contact by email jenaye[@]protonmail.com
    </Alert>
    <Alert variant="dark">
      You can push pull request if you find bugs :  <a target='_blank' rel='noopener noreferrer' href="https://github.com/CMEPW/Smersh/issues">here</a>
    </Alert>
  </Jumbotron>
  </>
);
