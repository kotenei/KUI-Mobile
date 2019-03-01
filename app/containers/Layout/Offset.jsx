import React, { Component } from "react";
import { Layout } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout.Row>
                    <Layout.Col span={8}>
                        <div className="gutter-box">col-8</div>
                    </Layout.Col>
                    <Layout.Col span={8} offset={8}>
                        <div className="gutter-box">col-8</div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span={6} offset={6}>
                        <div className="gutter-box">col-6</div>
                    </Layout.Col>
                    <Layout.Col span={6} offset={6}>
                        <div className="gutter-box">col-6</div>
                    </Layout.Col>
                </Layout.Row>
                <Layout.Row>
                    <Layout.Col span={12} offset={8}>
                        <div className="gutter-box">col-12</div>
                    </Layout.Col>
                </Layout.Row>
            </React.Fragment>
        );
    }
}
