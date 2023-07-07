import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../styles/Commonstyle";
//import Home from "./Home";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      setData("Welcome to gfg!");
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <div style={styles.main}>
            <ClipLoader
              color={"red"}
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
            />
          </div>
        </>
      ) : (
        <>
          {null}
          {/* {data}
          <Home /> */}
        </>
      )}
    </>
  );
};
export default Loader;
