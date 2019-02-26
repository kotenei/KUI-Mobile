import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const prefixCls = 'page';

export default class Page extends Component {
  
  render() {
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-header`} />
        <div className={`${prefixCls}-body`} />
        <div className={`${prefixCls}-footer`} />
      </div>
    );
  }
}
