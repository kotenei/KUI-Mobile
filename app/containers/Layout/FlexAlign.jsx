import React, { Component } from "react";
import { Layout } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>top</h4>
                <Layout.Row
                    align="top"
                    justify="center"
                    style={{ height: 100, background: "#f5f5f5" }}
                >
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                </Layout.Row>
                <h4>middle</h4>
                <Layout.Row
                    align="middle"
                    justify="space-around"
                    style={{ height: 100, background: "#f5f5f5" }}
                >
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                </Layout.Row>
                <h4>bottom</h4>
                <Layout.Row
                    align="bottom"
                    justify="space-between"
                    style={{ height: 100, background: "#f5f5f5" }}
                >
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                    <Layout.Col span={4}>
                        <div className="gutter-box">col-4</div>
                    </Layout.Col>
                </Layout.Row>
            </React.Fragment>
        );
    }
}
