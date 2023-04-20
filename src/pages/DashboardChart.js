import React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../layout/Navbar'
import SideNav from '../layout/SideNav'
import ColoumChart from '../utils/charts/ColomnChart'

const DashboardChart = () => {
    return (
        <>
            <Navbar />
            <Box height={64 + 'px'} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Column Chart</h2>
                    <ColoumChart />
                </Box>
            </Box>
        </>
    )
}

export default DashboardChart