import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    Fake Shop
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;