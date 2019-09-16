import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/Hoc/Layout';
import Home from './components/Homepage';

const Routes = props => {
    return (
        <Layout>
           <Switch>
               <Route exact path="/" component={Home} />
           </Switch>
        </Layout>
    )
}

export default Routes;
