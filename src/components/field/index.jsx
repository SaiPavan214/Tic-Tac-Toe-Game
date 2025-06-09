import React, { Component } from 'react';
import './styles.css';

class Field extends Component {
    render() {
        return (
            <div className="field" onClick={this.props.click}>
                {this.props.children}
            </div>
        );
    }
}

export default Field;