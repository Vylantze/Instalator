'use strict'

import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux';
import {
    DropdownButton,
    MenuItem,
    Grid,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

import actions from '../../redux/actions';
import { redirect } from '../util/webUtil';
import { publishNoti } from '../util/notificationUtil';

@connect((state) => state)
export default class LibraryPage extends React.Component {
	componentDidMount() {
		$(ReactDOM.findDOMNode(this.publicDocumentList)).dataTable({
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

	handleSaveLibrary(document) {
		this.props.dispatch(actions.addDocumentPersonal(document));
		redirect('/my_library');
		publishNoti('info', 'Successfully added document to your personal library!');
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
    const libraryLink = 'library/'+ record.name;
    const key = 'my-library-row-' + idx.toString();

		return (
			<tr key={key}>
				<td>
					<a href={libraryLink}>{record.name}</a>
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
						onClick={() => ::this.handleSaveLibrary(record)}
					>
						Add to my library
					</Button>
				</td>
			</tr>
		);
	}

    render() {
    	const list = this.props.publicLib.documentList;
        return (
            <div id="my-library-container">
	        	<Grid>
	        		<table ref={(c) => this.publicDocumentList=c} className='display' cellSpacing='0' width='100%'>
	        			{this.renderTableHeader()}
	        			{this.renderTableBody(list)}
	        		</table>
        		</Grid>
	        </div>
        );
    }
}
