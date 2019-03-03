import React, { Component } from 'react';
import { Alert } from 'kui-mobile';

export default class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert
          state="info"
          showIcon={true}
          closable
          title="Info Text"
          description="Info Description Info Description Info Description Info Description Info Description Info Description Info Description"
        />
        <Alert
          state="success"
          showIcon={true}
          closable
          title="Success Text"
          closeText="OK"
          description="Success Description Success Description Success Description Success Description Success Description Success Description Success Description"
          onClose={() => {
            alert('Hello World!');
          }}
        />
        <Alert
          state="warning"
          showIcon={true}
          closable
          title="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description Warning Description Warning Description Warning Description"
        />
        <Alert
          state="danger"
          showIcon={true}
          closable
          title="Danger Text"
          description="Danger Description Danger Description Danger Description Danger Description Danger Description Danger Description Danger Description"
        />
      </React.Fragment>
    );
  }
}
