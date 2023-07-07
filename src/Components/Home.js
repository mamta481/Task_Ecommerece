import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Common/ResponsiveAppBar";
import { Common } from "./Common/common";
import { API_ENDPOINTS } from "./ApiEndpoints/apiendpoints";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Ele from "../../src/assets/ele.jpg";
import styles from "../styles/Commonstyle";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Home = () => {
  const [categories, SetCategories] = useState([]);
  const navigate = useNavigate();
  const getAllCategory = async () => {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    Common.get(API_ENDPOINTS.Categories, headers, async (err, json) => {
      if (err) {
        console.log("Error", err);
        return;
      }
      SetCategories(json.data);
    });
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  function Categoryfunction(key, index) {
    return (
      <>
        <Card sx={{ maxWidth: 345 }} style={styles.outercard}>
          <CardMedia sx={{ height: 200 }} image={Ele} title="Images" />

          <CardActions>
            <Button
              size="large"
              onClick={() =>
                navigate("/product", {
                  state: { key: key },
                })
              }
            >
              {key}
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }

  const CategoriesList = categories?.map((key, index) => {
    return Categoryfunction(key, index);
  });
  return (
    <>
      <ResponsiveAppBar />
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        All Categories
      </Typography>
      <Loader />
      <div className="col-md-3" style={styles.card}>
        {CategoriesList}
      </div>
    </>
  );
};

export default Home;
