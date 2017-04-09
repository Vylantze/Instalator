'use strict'

import React from 'react';

import {
	Panel,
   Grid,
   Row,
   Col,
   Glyphicon,
} from 'react-bootstrap';

import {
   SelectDropdown,
} from './common';

const langOptions = [
   { key: 'English', value: 'English' },
   { key: 'Japanese', value: 'Japanese' },
   { key: 'Chinese', value: 'Chinese' },
   { key: 'Korean', value: 'Korean' },
   { key: 'Vietnamese', value: 'Vietnamese' },
]

export default class LanguageSelect extends React.Component {
   handleFromLangChange(event) {
      this.props.handleFromLangChange(event.target.value);
   }

   handleToLangChange(event){
      this.props.handleToLangChange(event.target.value);
   }

   renderHeader() {
      return (<Glyphicon glyph="retweet" />);
   }

	render() {
		return (
			<div id="instruction-container">
   			<Panel header={<Glyphicon glyph="retweet" />}>
   				<Grid fluid>
                  <Row>
                     <Col xs={6}>
                        <SelectDropdown
                           controlId="from-language"
                           label="From"
                           options={langOptions}
                           defaultValue="Japanese"
                           handleChange={::this.handleFromLangChange}
                        />
                     </Col>
                     <Col xs={6}>
                        <SelectDropdown
                           controlId="to-language"
                           label="To"
                           options={langOptions}
                           defaultValue="English"
                           handleChange={::this.handleToLangChange}
                        />
                     </Col>
                  </Row>
               </Grid>
   			</Panel>
   		</div>		 
		);
	}
   		
}
