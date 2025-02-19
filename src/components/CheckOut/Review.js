import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button } from '@mui/base';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export default function Review() {

    const { cartList } = useSelector((state) => state.cart);

    const totalPrice = cartList.reduce((price, item) => price + item.qty * item.price, 0);
    const [tp, setTp] = useState(totalPrice);
    const [datas, setDatas] = React.useState([])
    function getdetails() {
        axios.get('http://localhost:5000/datas')
            .then((response) => {
                setDatas(response.data)
            })
    }
    React.useEffect(() => {
        getdetails();
    })
    return (
        <Stack spacing={2}>
            <List disablePadding>

                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {tp}
                    </Typography>
                </ListItem>
            </List>
            <Divider />
            <Stack
                direction="column"
                divider={<Divider flexItem />}
                spacing={2}
                sx={{ my: 2 }}
            >
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        Shipment details
                    </Typography>
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography color="text.secondary" gutterBottom>
                        {addresses.join(', ')}
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        Payment details
                    </Typography>
                    <Grid container>
                        {datas.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    useFlexGap
                                    sx={{ width: '100%', mb: 1 }}
                                >
                                    <Typography variant="body1" color="text.secondary">
                                        {payment.name}
                                    </Typography>
                                    <Typography variant="body2">{payment.detail}</Typography>
                                </Stack>
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Button onClick={getdetails} >
                        ShowDetails
                    </Button>
                </div>
            </Stack>
        </Stack>
    );
}