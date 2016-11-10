import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';

import { Dot } from '../dot';

export class WheelsDot extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        totalNumber: PropTypes.number.isRequired
    };

    render() {
        const { index, totalNumber } = this.props;
        const style = {
        };

        return (
            <Dot className="wheels" style={style} />
        );
    }
}