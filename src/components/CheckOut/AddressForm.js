import React, { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import axios from 'axios';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function AddressForm() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [country, setCountry] = useState('')


    function postDetails() {
        axios.post('http://localhost:5000/address', { fname, lname, address, address2, city, state, zipCode, country })
            .then(() => {
                setFname('')
                setAddress('')
                setAddress2('')
                setCity('')
                setCountry('')
                setLname('')
                setState('')
                setZipCode('')
                alert("Thanks for the Details")
            })
    }
    return (
        <Grid container spacing={3}>
            <FormGrid item xs={12} md={6}>
                <FormLabel >
                    First name
                </FormLabel>
                <OutlinedInput
                    id="first-name"
                    name="first-name"
                    type="name"
                    placeholder="John"
                    autoComplete="first name"
                    required
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel>
                    Last name
                </FormLabel>
                <OutlinedInput
                    id="last-name"
                    name="last-name"
                    type="last-name"
                    placeholder="Snow"
                    autoComplete="last name"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
            </FormGrid>
            <FormGrid item xs={12}>
                <FormLabel>
                    Address line 1
                </FormLabel>
                <OutlinedInput
                    id="address1"
                    name="address1"
                    type="address1"
                    placeholder="Street name and number"
                    autoComplete="shipping address-line1"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </FormGrid>
            <FormGrid item xs={12}>
                <FormLabel>Address line 2</FormLabel>
                <OutlinedInput
                    id="address2"
                    name="address2"
                    type="address2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    autoComplete="shipping address-line2"
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}

                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel >
                    City
                </FormLabel>
                <OutlinedInput
                    id="city"
                    name="city"
                    type="city"
                    placeholder="New York"
                    autoComplete="City"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="state" required>
                    State
                </FormLabel>
                <OutlinedInput
                    id="state"
                    name="state"
                    type="state"
                    placeholder="NY"
                    autoComplete="State"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="zip" required>
                    Zip / Postal code
                </FormLabel>
                <OutlinedInput
                    id="zip"
                    name="zip"
                    type="zip"
                    placeholder="12345"
                    autoComplete="shipping postal-code"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}

                />
            </FormGrid>
            <FormGrid item xs={6}>
                <FormLabel htmlFor="country" required>
                    Country
                </FormLabel>
                <OutlinedInput
                    id="country"
                    name="country"
                    type="country"
                    placeholder="India"
                    autoComplete="shipping country"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </FormGrid>
            <div style={{ padding: "25px" }}>
                <Button style={{ fontSize: 'medium' }} onClick={postDetails}>Submit</Button>

            </div>
        </Grid>
    );
}