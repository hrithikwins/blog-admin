import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BlogContext } from '../contexts/BlogContext';


const NavbarComponent = () => {

    const { blogs } = useContext(BlogContext)

    return (

        <AppBar position="static">
            <Toolbar variant="dense"
                style={{ justifyContent: "center" }} >
                <Typography
                    variant="h6"
                    color="inherit">
                    {blogs}
                </Typography>
            </Toolbar>
        </AppBar>

    );
}

export default NavbarComponent;