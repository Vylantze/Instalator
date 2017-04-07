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

@connect((state) => state)
export default class Community extends React.Component {
  constructor(props) {
    super(props);
    
    if (this.props.standalone===undefined) {
      this.standalone = true;
    } else {
      this.standalone = false;
    }
  }
  
  render() {
    return (
      <div className="container community-notice" style={{border: 'none', maxWidth: '400px'}}>
        This app was created by CS3240 Group 2, hosted on <a href="https://github.com/Vylantze/Instalator/">Github</a>. If you have any issues or suggestions, feel free to create an issue on our respository!
        <br /><br />
        {
          (this.standalone) ?
          <img src="/public/img/korwa_thumbs.png"/>
          : <div />
        }
      </div>
    );
  }
}
