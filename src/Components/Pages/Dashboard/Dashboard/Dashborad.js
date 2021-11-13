import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../../MyOrder/MyOrder';
import ManageOrder from '../../ManageOrder/ManageOrder';
import useAuth from '../../../../Hooks/useAuth';
import AdminRoute from '../../Signin/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import Review from '../Review/Review';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddNewProduct from '../../AddNewProduct/AddNewProduct';


const drawerWidth = 200;

function Dashboard(props) {
    const { user, admin, logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Link to='/home'> <Button color="inherit">Shop</Button></Link>
                <Link to={`${url}`}> <Button color="inherit">Dashboard</Button></Link>
                <Link to={`${url}/my-order`}> <Button color="inherit">My Order</Button></Link>
                <Link to={`${url}/review`}> <Button color="inherit">Review</Button></Link>
                <Link to={`${url}/pay`}> <Button color="inherit">Pay Order</Button></Link>
            </Box>

            {admin &&
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Link to={`${url}/makeadmin`}> <Button color="inherit">Manage Admin</Button></Link>
                    <Link to={`${url}/manage-orders`}> <Button color="inherit">Manage Orders</Button></Link>
                    <Link to={`${url}/add-product`}> <Button color="inherit">Add Product</Button></Link>
                    <Link to={`${url}/manage-products`}> <Button color="inherit">Manage Products</Button></Link>
                </Box>
            }
            {user &&
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Button onClick={logout} color="inherit">Sign-out</Button>
                </Box>

            }

           
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ bgcolor: 'text.primary' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    <h2>DASHBOARD</h2>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    <Route path={`${path}/my-order`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-orders`}>
                        <ManageOrder></ManageOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddNewProduct></AddNewProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
