import React from 'react';

import { connect } from 'react-redux';

import {
  FormGroup,
  FormControl,
  ControlLabel,
  Grid,
  Row,
  Modal,
  ProgressBar,
} from 'react-bootstrap';

const PropTypes = React.PropTypes;

@connect((state) => state)
export default class Spinner extends React.Component {
  state = {
    now: 0,
    message: 'Uploading document...',
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.spinner.show) {
      const ctx = this;
      if (prevState.now < 100) {
        setTimeout(function(){
          let message = prevState.message;
          let now = prevState.now+1;
          if (now === 25)
              message = 'Extracting document information...';
          if (now === 50)
              message = 'Translating document information...';
          if (now === 75)
              message = 'Finalizing document...';
          if (now === 100)
              message = 'Done!';
          ctx.setState({
            now: now,
            message: message,
          })
        }, 25);
      } else {
        setTimeout(function(){
          ctx.setState({
            now: 0,
            message: 'Uploading document...',
          })
        }, 1000);
      }
    }
  }

  render() {
    return (
      <Modal show={this.props.spinner.show} id={'spinnerContainer'}>
        {
          // <div id={'spinner'}>
          //   <i className="fa fa-refresh fa-spin" style={ {fontSize:"100px"} } /><br/>
          //   <span className="lv-font-l">{loadingMessage}</span>
          // </div>
        }
        <ProgressBar now={this.state.now} label={`${this.state.now}%`} />
        <div id="progress-message-container">
          {this.state.message}
        </div>
      </Modal>
    );
  }
};
