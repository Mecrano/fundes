/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <div className="MenuContainer">
                <Typography variant="h6">
                    News
                </Typography>
                <div>
                    <Link href="www.google.com" color="inherit">
                        Facebook
                    </Link>
                    <Link href="www.google.com" color="inherit">
                        Instagram
                    </Link>
                    <Link href="www.google.com" color="inherit">
                        Twitter
                    </Link>
                </div>
            </div>
        </Toolbar>
    </AppBar>
);

export default Header;
