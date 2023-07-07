import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Common/ResponsiveAppBar";
import { Common } from "./Common/common";
import { API_ENDPOINTS } from "./ApiEndpoints/apiendpoints";
import styles from "../styles/Commonstyle";
import { Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { add } from "./store/CreateSlice";
import { useNavigate, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [products, Setproducts] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state;

  const dispatch = useDispatch();
  const addcart = (key) => {
    //dispatch the add  action
    dispatch(add(key));
  };

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
  return (
    <>
      <ResponsiveAppBar />
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Products Detail
      </Typography>

      <div style={styles.divcontainer}>
        <h5> {products.id}</h5>
        <img
          src={products.image}
          style={styles.img}
          alt="Images"
          onClick={() => navigate("/productdetail")}
        />
        <Typography variant="h6" style={styles.label}>
          Title: {products.title}
        </Typography>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addcart(products)}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default ProductDetail;
