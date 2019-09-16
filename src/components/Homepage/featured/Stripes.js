import React from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';

const Stripes = () => {
    const showStripes = () => {
        return (
            <div>
                Stripes
            </div>
        )
    }
    return (
        <div className="featured_stripes">
            {showStripes()}
        </div>
    )
}

export default Stripes;
