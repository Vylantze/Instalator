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

import Database from './Database.js';

const Language = {
  Original : 'Original',
  English : 'English',
  Japanese: 'Japanese',
  Chinese: 'Chinese',
  Korean: 'Korean',
  Vietnamese: 'Vietnamese',
};

@connect((state) => state)
export default class Community extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      translation: 'English', // default language is english
      original: '',
      image: '',
      hideFeedbackBox: true,
    };
  }
  
  componentWillMount() {
    const id = this.props.params.id;
    if (id!==undefined&&Database[id]!==undefined) {
      let newState = _.cloneDeep(Database[id]);
      newState.translation = this.state.translation;
      newState.original = newState.lang;
      newState.image = newState.link[newState.original];
      this.setState(newState);
    }
  }
  
  // Adds a clickable button to the map that jumps to a project with 'id'
  addNode(text = 'Nothing', key='0', left = 0.0, top = 0.0, width = 0.0, height = 0.0, fontSize = 14.0) {
    const fixedLineHeight = this.state.imgHeight / 100;
    fontSize = fontSize.toString() + 'px';
    const divStyle = {
      left: left.toString() + '%',
      top: top.toString() + '%',
      width: width.toString() + '%',
      height: height.toString() + '%',
    };
    //divStyle.fontSize = '2vw';
    
    return (
      <div key={key} className="community-panels" style={divStyle}>
        <div className="community-text" style={{fontSize}}>
          {text}
        </div>
      </div>
    );
  }
  
  displayTranslation() {
    const language = this.state.translation;
    const lines = this.state.translatedLines;
    const locations = this.state.overlayLocations;
    if (language!==Language.Original&&
        lines!==undefined&&
        lines[language]!==undefined&&
        locations!==undefined) {
      return lines[language].map(function(line, index) {
        return this.addNode(
          line,
          index,
          locations[index][0],
          locations[index][1],
          locations[index][2],
          locations[index][3],
          locations[index][4]
        );
      }.bind(this));
    }
    return (
      <div />
    );
  }
  
  changeLanguageButton() {
    const handleChange = function(option, event) {
      let lines = this.state.translatedLines[option];
      if ((option!=='Original')&&
          (lines===null||
          lines===undefined||
          lines.length===0)) {
        alert("This langauge is not supported yet!");
      } else {
        this.setState({translation: option});
      }
    }.bind(this);
    
    let listOfOptions = [];
    for (let option in Language) {
      if (option!==this.state.original) {
        listOfOptions.push(
          <MenuItem key={option} eventKey={option}>{option}</MenuItem>
        );
      }
    }
    
    return (
      <DropdownButton id='dropdown' title={this.state.translation} onSelect={handleChange}>
        {listOfOptions}
      </DropdownButton>
    );
  }

  handleDownload() {
    if (this.state.translation==="Original") {
      return (
        <Button bsStyle="primary" href={this.state.link[this.state.original]} download><b>Download</b></Button>
      );
    } else {
      return (
        <DropdownButton id='dropdown' title='Download' className="btn btn-primary">
          <MenuItem key='0' eventKey='0' onClick={()=>{alert("This feature is not supported yet!");}}>{this.state.translation} overlay only</MenuItem>
          <MenuItem key='1' eventKey='1' href={this.state.link[this.state.translation]} download>Full translated image</MenuItem>
        </DropdownButton>
      );
    }
  }
  
  /* Comment box */
  getCommentBox(title = "Comments", placeholder = "Leave a comment...", submit= "Comment") {
    let textInput = null;
    const handleSubmit = function() {
      alert("You said '" + textInput.value + "', but this function is not supported yet!");
      textInput.value = '';
    };

    const catchSubmit = function(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
      return true;
    };

    return (
      <div style={{width: '100%', maxWidth: this.state.imgWidth, marginLeft: 'auto', marginRight: 'auto'}}>
        <h2>
          {title}
        </h2>
        <textarea
          className="form-control"
          ref={(input) => { textInput = input; }}
          placeholder={placeholder}
          onKeyDown={catchSubmit}
          style={{ resize: 'none'}}
        />
        <button
          type="button"
          className="btn btn-default"
          onClick={handleSubmit}
        >
          {submit}
        </button>
      </div>
    );
  }
  
  render() {
    return (
      <div id="community-container" style={{ minWidth: this.state.imgWidth }} >
        {
          (this.state.image===null||this.state.image===undefined||this.state.image==='') ?
          <div className="community-notice">
            No image is available
          </div>
          :
          <div>
            <div className="community-notice">
              This is an example of a single shared community image and is not indicative of what the Community page actually looks like
            </div>
            <div style={{ textAlign: 'center'}}>
              Choose your Language: {this.changeLanguageButton()} {this.handleDownload()}
            </div>
            {
              (this.state.original===Language.Japanese) ?
              <div className="community-notice">
                This comic is read from right to left.
              </div> : <div />
            }
            <div id="community-image" style={{backgroundImage: 'url(' + this.state.image + ')', height: this.state.imgHeight,  maxWidth: this.state.imgWidth, minWidth: this.state.imgWidth, }}>
              {this.state.imgHeight}, {this.state.imgWidth}, 
              
              {this.displayTranslation()}
            </div>
            <div style={{textAlign: 'center'}}>
              <Button onClick={function(){ alert('There are no other manga yet!'); }}>Previous</Button>
              <Button bsStyle="primary" onClick={function(){ this.setState({hideFeedbackBox: !this.state.hideFeedbackBox}) }.bind(this)}>Feedback</Button>
              <Button onClick={function(){ alert('There are no other manga yet!'); }}>Next</Button>
            </div>
            {
              (!this.state.hideFeedbackBox) ?
              <div>
                {this.getCommentBox.bind(this)("Feedback", "Write your feedback here!", "Submit")}
              </div> : <div />
            }
            <div>
              {this.getCommentBox.bind(this)()}
            </div>
          </div>
        }
      </div>
    );
  }
}
