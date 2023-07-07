import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../styles/Commonstyle";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
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
        <>{null}</>
      )}
    </>
  );
};
export default Loader;
