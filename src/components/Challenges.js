import React from 'react'
import {Card} from 'react-bootstrap'
class Challenge extends React.Component {
    render() {
      return <div class="container customHauteur">
        <h1 className="text-white logo-text">{this.props.name}</h1><br/>
<Card>
  <Card.Header>Root-me - Goland</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
      You must find the hardcover password in a binary encoded in "Go" language. 
      </p>
      <Card.Link href="https://www.root-me.org/fr/Challenges/Cracking/ELF-x64-Golang-basique">Show</Card.Link>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Reverse</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<br/>
<Card>
  <Card.Header>FIC 2020 - What The FIC</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> Most people think that using an API with a JWT is enough to protect a site, here's a writeup proving to them that you have to be careful.
        Writeup :  <a href="https://github.com/Orange-Cyberdefense/ctf-write-ups/blob/master/2020/FIC/what-the-fic/README.md">here</a>
      </p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Web</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<br/>
<Card>
  <Card.Header>LEHACK 2019 - Blockchain ETH</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> I created an etherum blockchain. 2 vulnerabilities were present on this challenge, the first one was simply looking at the data inside the transactions, the second one was more complex and was attacking the validation of a smart-contract to get money.
      </p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Forensic</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<br/>
<Card>
  <Card.Header>Sigsegv2 - JE RIM ET JE RAM</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
      This challenge was created in Windows, I provided to the attacker with a memory dump. The flag was cut in 2 parts, you will find the solution <a href="https://0x90r00t.com/fr/2019/12/06/sigsegv2-finals-forensics-500-je-rim-et-je-ram-write-up/">here</a>
      </p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Forensic</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
<br/>

<Card>
  <Card.Header>Sigsegv1 - A history of bits</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> I wrote a script in python using the openCV library to hide a flag in an image, you can find the solution
         <a href="https://github.com/Orange-Cyberdefense/ctf-write-ups/blob/master/2020/FIC/what-the-fic/README.md">here</a>
      </p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Steganography</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>

<br/>

<Card>
  <Card.Header>Sigsegv1 - Wired Sound</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p> I hid some text data in an audio file, to validate the challenge you had to though about using Audacity software and apply the spectrogram filter on the sound, then unzoom to see the password appears.
      </p>
      <footer className="blockquote-footer">
        Category : <cite title="Source Title">Steganography</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
      </div>;
    }
  }

export default Challenge;