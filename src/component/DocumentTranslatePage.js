'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
	Grid,
	Row,
	Col,
	Panel,
	Glyphicon,
	Button,
	Collapse,
} from 'react-bootstrap';

import _ from 'lodash';

import {
	FileUpload,
} from './widget/common';

import {
	Instruction,
	LanguageSelect,
} from './widget';

import DropzoneComponent from 'react-dropzone-component';

import actions from '../../redux/actions';

import { redirect } from '../util/webUtil';

import { publishNoti } from '../util/notificationUtil';

@connect((state) => state)
export default class DocumentTranslatePage extends React.Component {
	state = {
		documentName: null,
		documentExt: null,
		fromLanguage: 'Japanese',
		toLanguage: 'English',
		enableProceedButton: false,
		activateStep1: true,
		activateStep2: false,
		enableSpinner: false,
	}

	handleFileUploadSuccess(type, file) {
		console.log(file);
		const fileName = file.name;
		const idx = fileName.indexOf('.');
		const name = fileName.substring(0, idx);
		console.log(name);
		const ext = fileName.substring(idx+1, fileName.length);
		this.setState({
      documentName: name,
      documentExt: ext,
    });
    this.handleValidation();
	}

	handleFileRemove(type, file) {
	    this.setState({
	    	documentName: null,
	    	documentExt: null,
	    });
	    this.handleValidation();
	}

	handleFromLangChange(value) {
		this.setState({
	    	fromLanguage: value,
	    });
	    this.handleValidation();
	}

	handleToLangChange(value) {
		this.setState({
	    	toLanguage: value,
	    });
	    this.handleValidation();
	}

	handleValidation() {
		const isValid = !_.includes(this.state, null);
		if (isValid) {
			this.setState({
				enableProceedButton: true,
			});
		}
	}

	handleProceedTranslation() {
		const ctx = this;
		ctx.props.dispatch(actions.enableSpinner('Processing...'));
		setTimeout(function(){
			ctx.setState({
				activateStep1: !ctx.state.activateStep1,
				activateStep2: !ctx.state.activateStep2,
			});
			ctx.props.dispatch(actions.disableSpinner());
		}, 6000);
	}

	handleSaveLibrary() {
		let documentInfo = {
			name: this.state.documentName,
			ext: this.state.documentExt,
			lang: this.state.toLanguage,
      link: {},
		};
    documentInfo.link[this.state.fromLanguage] = '/public/file/uploaded.png'; //`/.uploads/${this.state.documentName}.${this.state.documentExt}`;
    documentInfo.link[this.state.toLanguage] =  '/public/file/uploaded.png'; //`/.uploads/${this.state.documentName}.${this.state.documentExt}`;
		this.props.dispatch(actions.addDocumentPersonal(documentInfo));
		redirect('/my_library');
		publishNoti('info', 'Successfully added document to personal collection!');
	}

  handleShare() {
		let documentInfo = {
			name: this.state.documentName,
			ext: this.state.documentExt,
			lang: this.state.toLanguage,
      link: {},
		};
    documentInfo.link[this.state.fromLanguage] = '/public/file/uploaded.png'; //`/.uploads/${this.state.documentName}.${this.state.documentExt}`;
    documentInfo.link[this.state.toLanguage] =  '/public/file/uploaded.png'; //`/.uploads/${this.state.documentName}.${this.state.documentExt}`;
		this.props.dispatch(actions.addDocumentPublic(documentInfo));
		redirect('/public_library');
		publishNoti('info', 'Successfully shared!');
	}

	renderInstruction() {
		return (
			<Instruction />
		);
	}

	renderLanguageSelect() {
		return (
			<LanguageSelect
				handleFromLangChange={::this.handleFromLangChange}
				handleToLangChange={::this.handleToLangChange}
			/>
		)
	}

	renderFileUpload() {
		const type = 'original_document';
		return (
			<div id="file-upload-container">
	   			<Panel header={<Glyphicon glyph="upload" />}>
	   				<Grid fluid>
				      	<FileUpload
				        	onSuccess={file => ::this.handleFileUploadSuccess(type, file)}
				        	onRemovedFile={file => ::this.handleFileRemove(type, file)}
				    	/>
				    </Grid>
				</Panel>
			</div>
	    );
	}

	renderFileDownload() {
		const fileName = `${this.state.documentName}_${this.state.toLanguage}.${this.state.documentExt}`;
		return (
			<div id="file-download-container">
	   			<Panel header={<Glyphicon glyph="download" />}>
	   				<Grid fluid>
	   					<Row>
	   						<Col xs={2}>
	   							<Glyphicon glyph="file" id="download-file-icon" />
	   						</Col>
	   						<Col xs={10}>
	   							<Row>
	   								<Col xs={4}>
	   									<Button
											id="download-file-button"
											bsSize="lg"
											bsStyle="info"
											onClick={() => document.getElementById('download-link').click()}
										>
											Download
										</Button>
	   								</Col>
	   								<Col xs={4}>
	   									<Button
											id="add-file-library-button"
											bsSize="lg"
											bsStyle="info"
											onClick={::this.handleSaveLibrary}
										>
											Save to library
										</Button>
	   								</Col>
	   								<Col xs={4}>
	   									<Button
											id="add-file-community-button"
											bsSize="lg"
											bsStyle="info"
											onClick={::this.handleShare}
										>
											Share to community
										</Button>
	   								</Col>
	   								
	   							</Row>
	   							<Row>
	   								
	   							</Row>
	   						</Col>
	   					</Row>
				      	<a id="download-link" href='/public/file/uploaded.png' download />
				    </Grid>
				</Panel>
			</div>
	    );
	}

	render() {
		return (
			<div id="document-translate-container">
				<Collapse in={this.state.activateStep1}>
					<div>
						<Grid>
              <Row>
                <div className="community-notice">
                  This is a page made for prototyping purposes. Uploading files aside from the provided assets may result in unexpected results.
                </div>
              </Row>
							<Row>
								{::this.renderInstruction()}
							</Row>
							<Row>
								{::this.renderFileUpload()}
							</Row>
							<Row>
								{::this.renderLanguageSelect()}
							</Row>
							<Row>
								<Button
									id="document-proceed-button"
									disabled={!this.state.enableProceedButton}
									bsSize="lg"
									bsStyle="info"
									onClick={::this.handleProceedTranslation}
								>
									PROCEED
								</Button>
							</Row>
						</Grid>
					</div>
				</Collapse>
				<Collapse in={this.state.activateStep2}>
					<div>
						<Grid>
							<Row>
								{::this.renderFileDownload()}
							</Row>
						</Grid>
					</div>
				</Collapse>
			</div>
		);
	}
}

