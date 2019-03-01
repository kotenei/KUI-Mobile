import React, { Component } from "react";
import { Layout } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <Layout.Row gutter={16}>
                <Layout.Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Layout.Col>
                <Layout.Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Layout.Col>
                <Layout.Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Layout.Col>
                <Layout.Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Layout.Col>
            </Layout.Row>
        );
    }
}
