
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="absolute">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 2 }}>
                    Simple App
                </Typography>
                {/* Navigation Links */}
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
