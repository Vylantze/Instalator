import React from 'react';

import DropzoneComponent from 'react-dropzone-component';

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/data/document/upload'
};

const djsConfig = {
  addRemoveLinks: true,
  maxFilesize: 2,// in MB
  maxFiles: 1,
  dictMaxFilesExceeded: 'File limit exceeded',
}


export default class FileUpload extends React.Component {
  onAddedFile(file) {
    if (this.props.onAddedFile) {
      this.props.onAddedFile(file);
    }
    console.log('File added');
  }

  onRemovedFile(file) {
    if (this.props.onRemovedFile) {
      this.props.onRemovedFile(file);
    }
    console.log('File removed');
  }

  onError(file) {
    if (this.props.onError) {
      this.props.onError(file);
    }
    console.log('File error');
  }

  onSuccess(file){
    if (this.props.onSuccess) {
      this.props.onSuccess(file);
    }
    console.log('File success', file);
  }

  render() {
    const eventHandlers = {
      // refer to https://github.com/felixrieseberg/React-Dropzone-Component
      addedfile: ::this.onAddedFile,
      removedfile: ::this.onRemovedFile,
      error: ::this.onError,
      success: ::this.onSuccess,
    }

    return (
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}

