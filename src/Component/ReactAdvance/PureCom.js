import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureCom extends PureComponent {
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



export default PureCom;