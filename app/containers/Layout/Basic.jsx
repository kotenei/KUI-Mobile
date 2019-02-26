import React, { Component } from 'react';
import { Layout } from 'kui-mobile';

const { Row, Col } = Layout;

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
          <Col span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
