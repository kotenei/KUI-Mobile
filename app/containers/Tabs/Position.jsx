import React, { Component } from 'react';
import { Tabs, TabPanel } from 'kui-mobile';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'top',
    };
  }
  handleChange = e => {
    this.setState({
      tabPosition: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Tabs tabPosition="left" type="card">
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
        </Tabs>
        <br />
        <Tabs tabPosition="right" type="card">
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
        </Tabs>
        <br />
        <Tabs tabPosition="bottom" style={{ height: 150 }} type="card">
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
        </Tabs>
        <br/>
      </React.Fragment>
    );
  }
}
