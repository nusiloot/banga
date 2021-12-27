import React from 'react';
import {Card} from 'react-bootstrap';
import { getPublications } from '../data/PublicationType';

export const Publications = () => (
  <>
   <h1 className="text-white logo-text">Publications</h1>
    {
      getPublications().map((talkItem, key) => (
        <div className='py-3'>
          <Card key={key}>
            <Card.Header><b>{talkItem.eventName}</b> - {talkItem.title}</Card.Header>
            <Card.Body>
              <img src="../../MISC.png" class="img-thumbnail"/>
              <blockquote className="blockquote mb-0">
                <div dangerouslySetInnerHTML={{__html: talkItem.description}}/>
                <p>Date : {talkItem.date}</p>
                <footer className="blockquote-footer">
                language : <cite title="language">{ talkItem.language }</cite><br/>
                {
                  talkItem.link && (
                    <>
                      Link : <cite title="Slides">{talkItem.link}</cite>
                    </>
                  )
                }
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      ))
    }
  </>
);