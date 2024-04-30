import React, { useEffect } from 'react';
import { Button, Grid, Typography, IconButton, Card, CardContent, CardActions, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, decreaseQty, deleteProduct } from "../app/features/cart/cartSlice"; // Import clearCart action
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../components/Footer/Footer';
const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartList.reduce((price, item) => price + item.qty * item.price, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addToCart({ product: item, num: 1 }));
  };

  const handleDecreaseQty = (item) => {
    dispatch(decreaseQty(item));
  };

  const handleDeleteProduct = (item) => {
    dispatch(deleteProduct(item));
  };



  return (
    <section className="cart-items" style={{ marginBottom: "20px", marginTop: "10px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartList.length === 0 ? (
            <Typography variant="h4" align="center" gutterBottom>
              No Items are added in the Cart
            </Typography>
          ) : (
            cartList.map((item) => (
              <Card key={item.id} variant="outlined" sx={{ width: '75%', marginBottom: '20px', transition: 'transform 0.3s ease-in-out' }}>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <img src={item.imgUrl} alt={item.productName} className="mangaImage" style={{ maxWidth: "100%", height: "auto" }} />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography variant="h5" gutterBottom>{item.productName}</Typography>
                      <Typography variant="h6" gutterBottom>${item.price * item.qty}.00</Typography>
                      <div>
                        <IconButton className="incCart" onClick={() => handleAddToCart(item)}>
                          <i className="fa-solid fa-plus"></i>
                        </IconButton>
                        <IconButton className="desCart" onClick={() => handleDecreaseQty(item)}>
                          <i className="fa-solid fa-minus"></i>
                        </IconButton>
                        <IconButton className="delete" onClick={() => handleDeleteProduct(item)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined" sx={{ width: '100%', marginBottom: '20px', padding: '20px' }} style={{ backgroundColor: '#333', color: 'white' }}>
            <CardContent >
              <Typography variant="h5" gutterBottom>Cart Summary</Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">Total Items:</Typography>
                <Typography variant="subtitle1">{cartList.length}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">Total Price:</Typography>
                <Typography variant="subtitle1">${totalPrice}.00</Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Link to='/payment'>
                <Button variant="contained" color="primary" fullWidth >Pay Here</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Cart;
