'use strict'

import React from 'react';

import {
   Button,
   Glyphicon,
   Panel,
   Grid,
   Row,
   Col,
} from 'react-bootstrap';

export default class Instruction extends React.Component {
   render() {
		return (
			<div id="instruction-container">
            <Panel header={<Glyphicon glyph="alert" />}>
               <Grid fluid>
                  <Row>
                     <Col xs={12}>
                        <div id="instruction-body">
                           <ol>
                              <li><Glyphicon glyph="upload" /> Upload your document</li>
                              <li><Glyphicon glyph="retweet" /> Specify current and desired languages</li>
                              <li><Glyphicon glyph="sunglasses" />Wait and relax while we do the work for you</li>
                              <li><Glyphicon glyph="download" />Download the translated document and enjoy !</li>
                           </ol>
                        </div>
                     </Col>
                  </Row>
               </Grid>
            </Panel>
   		</div>		 
		);
	}		
}
