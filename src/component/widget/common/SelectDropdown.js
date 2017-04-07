import React from 'react';

import {
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

export default class SelectDropdown extends React.Component {
  handleChange(event) {
    this.props.handleChange(event);
    const isBlank = event.target.value ? false : true;
    this.setState({isBlank: isBlank});
  }

  render() {
    const options = this.props.options;
    const controlId = this.props.controlId;
    const label = this.props.label;
    const defaultValue = this.props.defaultValue;
    return (
      <FormGroup controlId={controlId} onChange={::this.handleChange}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          defaultValue={defaultValue}
          componentClass="select"
        >
          	<option value={null} disabled></option>
          	{
            	options.map((option) => {
              		return (
                		<option value={option.value} key={`${controlId}#${option.value}`}>
                  			{option.key}
                		</option>
             		)
            	})
          	}
        </FormControl>  
      </FormGroup>
    );
  }
}

