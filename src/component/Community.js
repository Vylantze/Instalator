'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
    DropdownButton,
    MenuItem,
    Grid,
    Row,
    Col,
    Carousel,
    Button,
} from 'react-bootstrap';

const Language = {
  Original : 0,
  English : 1,
  Spanish : 2,
};

@connect((state) => state)
export default class Community extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      translation: 'English',
    };
    
    // Example hardcoded image
    this.image = '/public/img/example_manga.jpg';
    this.width = '480px';
    this.height = '2103px';
    this.locations = [
      [ 83, 1.5, 13, 10, ],
      [ 7, 15, 13, 8, ],
      [ 86, 26.5, 13, 13, ],
      [ 1, 26.5, 16, 10, ],
      [ 78, 46, 16, 10, ],
      [ 21, 47, 16, 10, ],
      [ 85, 64.2, 14, 12, ],
      [ 1, 64.2, 20, 12, ],
      [ 85, 83.05, 14, 16, ],
      [ 1, 83.05, 19, 12, ],
    ];

    this.translatedLines = {
      English: [
        'This is truly a refined place, isn\'t it?',
        'Producer',
        'Both the atmos-phere and the food here are top class.',
        'I might have drunk too much because of that...',
        'But for tonight at the very least...',
        'Let us enjoy this time to the fullest',
        'Oh? Am I not going to say any puns today, you ask?',
        'I am not so uncivilised that I would ruin such an evening with one',
        'So for this Christmas with just the two of us, let us enjoy...',
        'This Holy Night, with all our migh-',
      ],
      Spanish: [],
    };
  }
  
  // Adds a clickable button to the map that jumps to a project with 'id'
  addNode(text = 'Nothing', left = 0.0, top = 0.0, width = 0.0, height = 0.0, fontSize = 14.0) {
    const fixedLineHeight = this.height / 100;
    fontSize = fontSize.toString() + 'px';
    const divStyle = {
      left: left.toString() + '%',
      top: top.toString() + '%',
      width: width.toString() + '%',
      height: height.toString() + '%',
    };
    //divStyle.fontSize = '2vw';
    
    return (
      <div className="community-panels" style={divStyle}>
        <div className="community-text" style={{fontSize}}>
          {text}
        </div>
      </div>
    );
  }
  
  changeLanguageButton() {
    const handleChange = function(option, event) {
      if ((option!=='Original')&&
          (this.translatedLines[option]===null||
          this.translatedLines[option]===undefined||
          this.translatedLines[option].length===0)) {
        alert("This langauge is not supported yet!");
      } else {
        this.setState({translation: option});
      }
    }.bind(this);
    
    let listOfOptions = [];
    for (let option in Language) {
      listOfOptions.push(
        <MenuItem key={option} eventKey={option}>{option}</MenuItem>
      );
    }
    
    return (
      <DropdownButton id='dropdown' title={this.state.translation} onSelect={handleChange}>
        {listOfOptions}
      </DropdownButton>
    );
  }
  
  displayTranslation() {
    const language = this.state.translation;
    if (language==='Original') {
      return (<div/ >);
    } else {
      return this.translatedLines[language].map(function(line, index) {
        return this.addNode(line, this.locations[index][0], this.locations[index][1], this.locations[index][2], this.locations[index][3], this.locations[index][4]);
      }.bind(this));;
    }
  }
  
  render() {
    return (
      <div id="community-container" style={{ minWidth: this.width }} >
        <div className="community-notice">
          <b>This is an example of a single shared community image and is not indicative of what the Community page actually looks like</b>
        </div>
        <div style={{ textAlign: 'center'}}>
          Choose your Language: {this.changeLanguageButton()}
          {
            (this.state.translation!=="Original") ? 
            <DropdownButton id='dropdown' title='Download' className="btn btn-primary">
              <MenuItem key='0' eventKey='0'>{this.state.translation} overlay only</MenuItem>
              <MenuItem key='1' eventKey='1'>Full translated image</MenuItem>
            </DropdownButton> : <div />
          }
        </div>
        <div className="community-notice">
          This comic is read from right to left.
        </div>
        <div id="community-image" style={{backgroundImage: 'url(' + this.image + ')', height: this.height,  maxWidth: this.width, minWidth: this.width, }}>
          {this.displayTranslation()}
        </div>
        <div style={{textAlign: 'center'}}>
          <button onClick={function(){ alert('There are no other manga yet!'); }}>Previous</button>
          <button onClick={function(){ alert('There are no other manga yet!'); }} style={{position: 'flex', marginLeft: 'auto'}}>Next</button>
        </div>
      </div>
    );
  }
}
