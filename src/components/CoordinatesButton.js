// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor (props) {
        super(props);
        this.onReceiveCoordinates = this.props.onReceiveCoordinates;
    }

    handleClick = (e) => {
        let coordinates = [e.clientX, e.clientY]
        onReceiveCoordinates(coordinates)
    }

    render() {
        return (
            <button
            onClick={this.handleClick()}
            >Button!
            </button>
        )
    }
}
