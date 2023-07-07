import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeitem } from "../Components/store/CreateSlice";
import styles from "../styles/Commonstyle";
import { Typography, Button } from "@mui/material";
import ResponsiveAppBar from "./Common/ResponsiveAppBar";
import { useLocation } from "react-router-dom";
import { Common } from "./Common/common";
import { API_ENDPOINTS } from "./ApiEndpoints/apiendpoints";

const Cart = () => {
  const productsLists = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products, Setproducts] = useState([]);
  const { state } = useLocation();
  const { id } = state;

  const getAllCategory = async () => {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    Common.get(
      API_ENDPOINTS.Detail_API + `${id}`,
      headers,
      async (err, json) => {
        if (err) {
          console.log("Error", err);
          return;
        }
        Setproducts(json.data);
      }
    );
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const deleteItem = (key) => {
    //dispatch the add  action
    dispatch(removeitem(key));
  };

  function createInputBox(key, index) {
    return (
      <>
        <div style={styles.divcontainer}>
          <img src={key.image} style={styles.img} alt="Images" />
          <Typography variant="h6" style={styles.label}>
            Title: {key.title}
          </Typography>
          <div>
            <Typography variant="h6" style={styles.text}>
              Category:{key.category}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={styles.buttonstyle}
              onClick={() => deleteItem(key.id)}
            >
              Remove Item
            </Button>
          </div>
        </div>
      </>
    );
  }

  const FIDComp = productsLists?.map((key, index) => {
    return createInputBox(key, index);
  });
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {FIDComp}
      </div>
    </>
  );
};

export default Cart;
