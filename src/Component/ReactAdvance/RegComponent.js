import React, { Component } from 'react';

class RegComponent extends Component {
    render() {
        return (
            <div>
                <h3>
                    i am {this.props.name}
                </h3>
            </div>
        );
    }
}

export default RegComponent;