import React from 'react';

import { connect } from 'react-redux';

import actions from '../../../redux/actions';

import {
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Modal,
} from 'react-bootstrap';

const PropTypes = React.PropTypes;

@connect((state) => state)
export default class Spinner extends React.Component {
  render() {
    let loadingMessage = this.props.spinner.message ? this.props.spinner.message : 'Loading...'; 
    return (
      <Modal show={false} id={'spinnerContainer'}>
        <div id={'spinner'}>
          <i className="fa fa-refresh fa-spin" style={ {fontSize:"100px"} } /><br/>
          <span className="lv-font-l">{loadingMessage}</span>
        </div>
      </Modal>
    );
  }
};
