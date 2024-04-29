import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../app/features/cart/cartSlice';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';

const Payment = () => {
    const { cartList } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cartList.reduce((price, item) => price + item.qty * item.price, 0);

    const [tp, setTp] = useState(totalPrice);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ph, setPh] = useState('');
    const [address, setAddress] = useState('');

    const handlePayNow = () => {
        dispatch(clearCart());
    };

    const postData = () => {
        axios.post('http://localhost:5000/pay', { name, email, ph, address, tp })
            .then(() => {
                setName('');
                setEmail('');
                setPh('');
                setAddress('');
                setTp(0);
                handlePayNow();
            })
            .catch(() => {
                alert("Payment not done");
            });
    };

    return (
        <div style={{ display: 'flex', margin: '25px' }}>
            <div style={{ flex: 1 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" gutterBottom>Enter Payment Details</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='standard' fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} required='true' />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='standard' fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='standard' fullWidth label="Phone Number" value={ph} onChange={(e) => setPh(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant='standard' fullWidth multiline rows={4} label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth onClick={postData}>Submit</Button>
                    </Grid>
                </Grid>
            </div>
            <div style={{ flex: 1, padding: '0 24px' }}>
                <Card variant="outlined">
                    <Typography variant="h5" align="center" gutterBottom>Total Cost</Typography>
                    <Typography variant="body1" align="center">Total Price: ${tp}</Typography>
                </Card>
            </div>
        </div>
    );
};

export default Payment;
