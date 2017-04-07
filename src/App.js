'use strict'

import React from 'react';

import { connect } from 'react-redux';

import Header from './component/common/Header';

import Spinner from './component/common/Spinner';

import {
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

@connect((state) => state)
export default class App extends React.Component {
    componentDidMount() {
        // configuring default options for Messenger
        Messenger.options = {
            theme: 'flat'
        };
    }

    render() {

      	return (
        	<div>
        		<Header />
        		<Grid>
        			<Row>
                        <Col xs={12}>
                            <Spinner />
        					{this.props.children}
        				</Col>
        			</Row>
        		</Grid>
        	</div>
      	);
 	}
}

