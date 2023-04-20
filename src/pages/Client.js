import React from 'react'
import Box from '@mui/material/Box'
import SideNav from '../layout/SideNav'
import Navbar from '../layout/Navbar'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Grid, Button, MenuItem, Select, InputLabel, FormControl, Stack, FormControlLabel, Checkbox, FormLabel, Radio, RadioGroup } from '@mui/material';

const Client = () => {
    return (
        <>
            <Navbar />
            <Box height={64 + 'px'} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h2>Client Form</h2>
                    <ClientForm />
                </Box>
            </Box>
        </>
    )
}

export default Client



const ClientForm = () => {

    const formik = useFormik({
        initialValues: {
            clientName: '',
            address: '',
            country: '',
            date: '',
            consultantName: '',
            email: '',
            totalPrice: '',
            type: '',
            approved: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: yup.object({
            clientName: yup.string().required('Client Name Required'),
            address: yup.string().required('Address Required'),
            country: yup.string().required('Country Required'),
            date: yup.string().required('Date Required'),
            consultantName: yup.string().required('Consultant Name Required'),
            email: yup.string().required('Email Required').matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Invalid Email'),
            totalPrice: yup.string().required('Total Price Required'),
            type: yup.array().of(yup.string()).max(20, 'Must be 20 characters or less').required('Type is Required'),
            approved: yup.string().max(20, 'Must be 20 characters or less').required('Approved is Required'),
        })
    });

    return (
        <>
            <Grid container sx={
                {
                    gap: "10px",
                    // border: '1px solid black',
                    marginTop: '20px',
                    padding: '10px',
                }
            }>
                <Grid item lg={2} />
                <Grid item lg={8} >
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                label="Client Name"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="clientName"
                                name="clientName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.clientName}
                            />
                            {formik.touched.clientName && formik.errors.clientName && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.clientName}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                size='medium'
                                label="Address"
                                fullWidth
                                variant="outlined"
                                id="address"
                                name="address"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.address}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <InputLabel id="countrylabel">Country</InputLabel>
                            <Select
                                labelId="countrylabel"
                                label="Country"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="country"
                                name="country"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.country}
                                placeholder='Select Country'
                            >
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="US">US</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                            </Select>
                            {formik.touched.country && formik.errors.country && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.country}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <FormLabel component="legend">Type</FormLabel>
                            <Grid container>
                                <Grid item lg={4}>
                                    <FormControlLabel
                                        value="Direct sales"
                                        control={<Checkbox color="primary" />}
                                        label="Direct sales"
                                        labelPlacement="end"
                                        name="type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item lg={4}>
                                    <FormControlLabel
                                        value="Consultative sales"
                                        control={<Checkbox color="primary" />}
                                        label="Consultative sales"
                                        labelPlacement="end"
                                        name="type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                                <Grid item lg={4}>
                                    <FormControlLabel
                                        value="Request for Proposal"
                                        control={<Checkbox color="primary" />}
                                        label="Request for Proposal"
                                        labelPlacement="end"
                                        name="type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </Grid>
                            </Grid>
                            {
                                formik.touched.type && formik.errors.type && (
                                    <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.type}</div>
                                )
                            }
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                // label="Date"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="date"
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                                placeholder='Select Date'
                            />
                            {formik.touched.date && formik.errors.date && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.date}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                label="Consultant Name"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="consultantName"
                                name="consultantName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.consultantName}
                            />
                            {formik.touched.clientName && formik.errors.clientName && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.consultantName}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                label="Email"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.email}</div>
                            )}
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <FormLabel component="legend">Approved ?</FormLabel>
                            <RadioGroup
                                aria-label="approved"
                                name="approved"
                                value={formik.values.approved}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            {
                                formik.touched.approved && formik.errors.approved && (
                                    <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.approved}</div>
                                )
                            }
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '10px 0' }}>
                            <TextField
                                label="Total Price"
                                size='medium'
                                fullWidth
                                variant="outlined"
                                id="totalPrice"
                                name="totalPrice"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.totalPrice}
                            />
                            {formik.touched.totalPrice && formik.errors.totalPrice && (
                                <div style={{ color: "red", fontSize: '12px' }}>{formik.errors.totalPrice}</div>
                            )}
                        </FormControl>

                        <div style={{ margin: '10px 0' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}