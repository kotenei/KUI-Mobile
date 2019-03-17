import React, { Component } from "react";
import { Badge } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Badge color="primary" count={101} overflowCount={99} />
                <Badge color="info" count={10} />
                <Badge color="success" count={10} />
                <Badge color="warning" count={10} />
                <Badge color="danger" count={10} />
            </React.Fragment>
        );
    }
}
