import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/Resources/images/logos/manchester_city_logo.png';

const Icon = props => {

    // @ :: STYLES
    const styles = {
        width: props.width,
        height: props.height,
        background: `url(${logo}) no-repeat`
    }
    // @ :: END OF STYLES

    const template = <div className="img_cover" style={styles}></div>
    const isLink = props.link ? (
        <Link to={props.linkTo} className="link_logo">
            {template}
        </Link>
    ): template

    return isLink;
}

export default Icon;
