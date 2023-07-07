import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Common/ResponsiveAppBar";
import { Common } from "./Common/common";
import { API_ENDPOINTS } from "./ApiEndpoints/apiendpoints";
import styles from "../styles/Commonstyle";
import { Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Product = () => {
  const { state } = useLocation();
  const { key } = state;
  console.log("sbsbdj", key);
  const [products, Setproducts] = useState([]);
  const navigate = useNavigate();
  const getAllCategory = async () => {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    Common.get(
      API_ENDPOINTS.Product_API + `${key}`,
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

  function Categoryfunction(key, index) {
    const keyvalue = key.id;
    return (
      <>
        <div style={styles.divcontainer}>
          <img
            src={key.image}
            style={styles.img}
            alt="Images"
            onClick={() =>
              navigate("/productdetail", {
                state: { id: keyvalue },
              })
            }
          />
          <Typography variant="h6" style={styles.label}>
            Title: {key.title}
          </Typography>
          <div>
            <Typography
              variant="h6"
              style={{ marginTop: "100%", marginLeft: "-99%" }}
            >
              Category:{key.category}
            </Typography>
          </div>
        </div>
      </>
    );
  }

  const productsList = products?.map((key, index) => {
    return Categoryfunction(key, index);
  });
  return (
    <>
      <ResponsiveAppBar />
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        All products
      </Typography>
      {productsList}
    </>
  );
};

export default Product;
