import React from 'react';
import {Card} from 'react-bootstrap';
import { getTalks } from '../data/TalkType';

export const Talk = () => (
  <>
   <h1 className="text-white logo-text">Talks</h1>
    {
      getTalks().map((talkItem, key) => (
        <div className='py-3'>
          <Card key={key}>
            <Card.Header>{talkItem.title} </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <div dangerouslySetInnerHTML={{__html: talkItem.description}}/>
                <p>Date : {talkItem.date}</p>
                <footer className="blockquote-footer">
                language : <cite title="language">{ talkItem.language }</cite><br/>
                Slide : <cite title="Slides">{ talkItem.slide }</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      ))
    }
  </>
);
