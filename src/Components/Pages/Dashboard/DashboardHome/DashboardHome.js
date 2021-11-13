import { Grid } from '@mui/material';
import React from 'react';
import UserProfile from '../UserProfile/UserProfile';

const DashboardHome = () => {
    return (
        <div>
                <Grid container spacing={2}>
                        <Grid item xs={12} md ={12} sm={12}>
                            <UserProfile></UserProfile>
                        </Grid>
                       
                       
                    </Grid>
        </div>
    );
};

export default DashboardHome;