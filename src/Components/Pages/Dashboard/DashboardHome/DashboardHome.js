import { Grid } from '@mui/material';
import React from 'react';
import MyOrder from '../../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
        <div>
                <Grid container spacing={2}>
                        <Grid item xs={12} md ={12} sm={12}>
                            <MyOrder></MyOrder>
                        </Grid>
                       
                       
                    </Grid>
        </div>
    );
};

export default DashboardHome;