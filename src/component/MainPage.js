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
        return (
            <div id="main-page-container">
	        	<Grid fluid>
	        		<Row>
	        			<Col xs={12}>
	        				<Carousel>
							    <Carousel.Item>
							      	<img width={1200} height={500} alt="900x500" src="/public/img/carousel_1.png"/>
							      	<Carousel.Caption>
								        <h3>Some description</h3>
								       	{::this.renderGetStartBtn()}
							      	</Carousel.Caption>
							    </Carousel.Item>
							    <Carousel.Item>
							      	<img width={1200} height={500} alt="900x500" src="/public/img/carousel_2.png"/>
							      	<Carousel.Caption>
								        <h3>Some description</h3>
								        {::this.renderGetStartBtn()}
							      	</Carousel.Caption>
							    </Carousel.Item>
							    <Carousel.Item>
							      	<img width={1200} height={500} alt="900x500" src="/public/img/carousel_3.png"/>
							      	<Carousel.Caption>
								        <h3>Some description</h3>
								        {::this.renderGetStartBtn()}
							      	</Carousel.Caption>
							    </Carousel.Item>
							    
						  	</Carousel>
	        			</Col>
	        		</Row>
        		</Grid>
	        </div>
        );
    }
}
