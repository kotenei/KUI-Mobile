import React, { Component } from "react";
import { Layout } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>start</h4>
                <Layout.Row justify="start">
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
                <h4>center</h4>
                <Layout.Row justify="center">
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
                <h4>end</h4>
                <Layout.Row justify="end">
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
                <h4>Space Around</h4>
                <Layout.Row justify="space-around">
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
                <h4>Space Between</h4>
                <Layout.Row justify="space-between">
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
