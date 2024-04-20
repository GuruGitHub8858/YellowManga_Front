import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
            to: "/home",
        },
        {
            text: "About",
            icon: <InfoIcon />,
            to: "/about",
        },
        {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
            to: "/testimonials",
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
            to: "/contact",
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
            to: "/cart",
        },
    ];

    return (
        <nav>

            <div className="navbar-links-container">
                {/* <Link to="/">Home</Link> 
                <Link to="/work">Work</Link> 

                <Link to="/testimonials">Testimonials</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">
                    <ShoppingCartRoundedIcon className="navbar-cart-icon" />
                </Link> */}

                <button className="primary-button">Book Now</button>
            </div>
            <div className="navbar-menu-container">
                <MenuIcon onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <Link to={item.to}>
                                        <ListItemText primary={item.text} />
                                    </Link>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default NavBar;