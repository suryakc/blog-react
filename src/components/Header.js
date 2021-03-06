import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="white"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        My Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;