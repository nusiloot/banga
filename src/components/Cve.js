import React from 'react'
import {Card} from 'react-bootstrap'
class Cve extends React.Component {
    render() {
      return <div class="container">
        <h1 className="text-white logo-text">{this.props.name}</h1><br/>

<Card>
  <Card.Header>Openupload - CVE-2020-11712</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> Through 0.4.3 allows XSS via index.php?action=u and the filename field.
        POC :  <a href="https://github.com/jenaye/cve/blob/master/readme.MD">here</a>
      </p>
      <b>Score : Medium (6.1) </b><br/><p>Date : 04/12/2020</p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">XSS </cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
      </div>;
    }
  }

export default Cve;