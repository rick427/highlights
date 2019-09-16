import React from 'react';
import Header from '../../components/Header/Header';

const Layout = props => {
    return (
        <div>
            <Header/>
            {props.children}
            Layout 2 Footer
            
        </div>
    )
}

export default Layout
