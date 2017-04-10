'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
    Grid,
    Row,
    Col,
    Carousel,
    Button,
} from 'react-bootstrap';

import Contact from './Contact.js';

import actions from '../../redux/actions';

import { redirect } from '../util/webUtil';

@connect((state) => state)
export default class MainPage extends React.Component {

	handleRedirect() {
		redirect('/document_translate');
	}
	renderGetStartBtn() {
		return (
			<Button bsStyle="primary" onClick={::this.handleRedirect}>Get started</Button>
		);
	}
  render() {
    const welcome = 'Welcome to Instalator!';
    const description = 'The one stop to translate your manga and view them instantly!';
    const carousel_caption = (
      <Carousel.Caption style={{ textShadow: '2px 2px black'}}>
        <h3>{welcome}</h3>
        {description}<br />
        {::this.renderGetStartBtn()}
      </Carousel.Caption>
    );

    return (
        <div id="main-page-container">
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Carousel>
              <Carousel.Item>
                  <img width={1200} height={500} alt="900x500" src="/public/img/carousel_1.png"/>
                  {carousel_caption}
              </Carousel.Item>
              <Carousel.Item>
                  <img width={1200} height={500} alt="900x500" src="/public/img/carousel_2.png"/>
                  {carousel_caption}
              </Carousel.Item>
              <Carousel.Item>
                  <img width={1200} height={500} alt="900x500" src="/public/img/carousel_3.png"/>
                  {carousel_caption}
              </Carousel.Item>

            </Carousel>
            </Col>
          </Row>
          <Row>
            <Contact standalone='none' />
          </Row>
        </Grid>
      </div>
    );
  }
}
