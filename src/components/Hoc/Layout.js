import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';

const Layout = props => {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
