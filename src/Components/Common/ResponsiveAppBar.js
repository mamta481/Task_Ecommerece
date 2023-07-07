import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Common } from "./common";
import { useSelector } from "react-redux";
import { API_ENDPOINTS } from "../ApiEndpoints/apiendpoints";

const Categories = [{ id: 0, role: "Home" }];
const Settings = [
  { id: 1, role: "Cart" },
  { id: 2, role: "Logout" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const ProductsCounts = useSelector((state) => state.cart);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [inputValue, setinputValue] = useState("");
  const [categories, SetCategories] = useState([]);
  const [SerachApiData, SetSerachApiData] = useState([]);

  const getAllCategory = async (value) => {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    Common.get(API_ENDPOINTS.Categories, headers, async (err, json) => {
      if (err) {
        console.log("Error", err);
        return;
      }
      SetSerachApiData(json.data);
      SetCategories(json.data);
    });
  };

  const inputValuefunction = (e) => {
    if (e.target.value === "") {
      SetCategories(SerachApiData);
    } else {
      const filterval = SerachApiData.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      SetCategories(filterval);
    }
    setinputValue(e.target.value);
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (index) => {
    if (index === 0) {
      navigate("/cart", {
        state: { id: ProductsCounts },
      });
    }
    if (index === 1) {
      navigate("/");
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.$redColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingBasketIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={() => console.log("ffffff")}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Categories.map((cat) => (
              <Button
                key={cat.id}
                sx={{ my: 2, color: theme.$whiteColor, display: "block" }}
              >
                {cat.role}
              </Button>
            ))}
          </Box>
          <input
            placeholder="Type to Serach"
            value={inputValue}
            onChange={(e) => inputValuefunction(e)}
          />

          <ShoppingBasketIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={() =>
              navigate("/cart", {
                state: { id: ProductsCounts },
              })
            }
          />
          {ProductsCounts.length}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {Settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleCloseUserMenu(index)}
                >
                  <Typography textAlign="center">{setting.role}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
