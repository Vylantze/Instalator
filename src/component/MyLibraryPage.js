'use strict'

import ReactDOM from 'react-dom'; 

import React from 'react';

import { connect } from 'react-redux';

import {
    DropdownButton,
    MenuItem,
    OverlayTrigger,
    Tooltip,
    Popover,
    ButtonGroup,
    Grid,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

import actions from '../../redux/actions';

import { redirect } from '../util/webUtil';

import { publishNoti } from '../util/notificationUtil';

@connect((state) => state)
export default class MyLibraryPage extends React.Component {
	componentDidMount() {
		$(ReactDOM.findDOMNode(this.myDocumentList)).dataTable({
	      	// responsive: true,
	      	// stateSave: true,
	      	// paging: true,
	      	// searching: true,
	      	// order: [ 0, 'asc' ],
	      	// columnDefs: [
	       //  	// {searchable: false, targets: 0},
	       //  	// {visible: false, targets: 0},
	       //  	// {orderable: false, targets: 1},
	       //  	// {searchable: false, targets: 1},
	      	// ],
	    })
	}

	handleSharePublic(document) {
    if (document.shareable) {
      this.props.dispatch(actions.addDocumentPublic(document));
      this.props.dispatch(actions.setUnshareablePersonal(document));
      this.props.dispatch(actions.setUnshareablePublic(document));
      redirect('/public_library');
      publishNoti('info', 'Successfully added document to public library!');
    } else {
      publishNoti('info', 'This document has already been shared!');
    }
	}
  
  renderDeleteButton(document, index) {
    const overlayRef = 'overlay_' + index.toString();
    const handleDelete = function() {
      this.props.dispatch(actions.removeDocumentPersonal(document));
      this.props.dispatch(actions.setShareablePublic(document));
      publishNoti('info', 'Successfully deleted!');
      this.refs[overlayRef].hide()
    }.bind(this);
    
    const popoverTop = (
      <Popover id="popover-positioned-top" title="Delete file">
        Are you sure you want to delete? <br /><br />
        <Button 
          bsStyle="danger" 
          onClick={handleDelete}
        >Yes</Button>
        <Button 
          onClick={function(event){ this.refs[overlayRef].hide();}.bind(this)}
          style={{float: 'right'}}
        >No</Button>
      </Popover>
    );

    return (
      <OverlayTrigger
        trigger="click"
        placement="top"
        rootClose={true}
        ref={overlayRef}
        overlay={popoverTop}
      >
        <Button
          bsSize="sm"
          bsStyle="danger"
          //onClick={handleDelete}
        >Delete</Button>
      </OverlayTrigger>
    );
	}

	renderTableHeader() {
		return (
			<thead>
        <tr>
            <th>Name</th>
            <th>Original Language</th>
            <th></th>
        </tr>
      </thead>
		);
	}

	renderTableBody(list) {
		return (
			<tbody>
				{
					list.map((record, idx) => {
						return this.renderTableRow(record, idx)
					})
				}
			</tbody>
		);
	}
  
  
  renderDownloadButton(record) {
    const length = Object.keys(record.link).length;
    if (length===0) {
      return (
        <div>
          Not Available
        </div>
      );
    } else if (length===1) {
      return (
        <Button bsStyle="primary" href={record.link[record.lang]} download><b>Download</b></Button>
      );
    } else {
      let list = [];
      for (let language in record.link) {
        list.push(
          <MenuItem key={language} eventKey={language} href={record.link[language]} download>{language}</MenuItem>
        );
      }
      return (
        <DropdownButton id='dropdown' title='Download' className="btn btn-primary">
          {list}
        </DropdownButton>
      );
    }
  }

	renderTableRow(record, idx) {
    const libraryLink = "/library/"+ record.name;
    const key = `my-library-row-${idx}`;
    const popover = (<Tooltip id="tooltip"><div style={{height: '100%', maxHeight:'200px'}}><img style={{maxWidth:'100%', maxHeight:'100%',}} src={record.link[record.lang]} /></div></Tooltip>);

		return (
			<tr key={key}>
				<td>
          <OverlayTrigger placement="right" overlay={popover}><a href={libraryLink}>{record.name}</a></OverlayTrigger>
				</td>
				<td>
					{record.lang}
				</td>
				<td>
					{this.renderDownloadButton(record)}
					&emsp;
					<Button
						bsSize="sm"
						bsStyle="info"
						onClick={() => ::this.handleSharePublic(record)}
					>
						Share
					</Button> 
          {this.renderDeleteButton.bind(this)(record, idx)}
				</td>
			</tr>
		);
	}

    render() {
    	const list = this.props.personalLib.documentList;
        return (
            <div id="my-library-container">
	        	<Grid>
	        		<table ref={(c) => this.myDocumentList=c} className='display' cellSpacing='0' width='100%'>
	        			{this.renderTableHeader()}
	        			{this.renderTableBody(list)}
	        		</table>
        		</Grid>
	        </div>
        );
    }
}
