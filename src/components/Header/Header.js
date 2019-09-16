import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

//@ :: STYLES
const overrides = {
    backgroundColor: '#98c5e9',
    boxShadow: 'none',
    padding: '10px 0',
    borderBottom: '2px solid #00285e'
}

const Header = () => {
    return (
        <AppBar position="fixed" style={overrides}>
          <ToolBar style={{display: 'flex'}}>
              <div style={{flexGrow: 1}}>
                  <div className="header-logo">
                      LOGO
                  </div>
              </div>

              <Link to="/the_team">
                  <Button color="inherit">The team</Button>
              </Link>
              <Link to="/the_matches">
                  <Button color="inherit">Matches</Button>
              </Link>
              
          </ToolBar>
        </AppBar>
    )
}

export default Header
