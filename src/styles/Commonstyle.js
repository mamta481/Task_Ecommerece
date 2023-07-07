import theme from "./theme";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    justifyContent: "space-around",
  },
  img: { height: "auto", width: "45%" },
  divcontainer: {
    flexDirection: "row",
    width: "45%",
    display: "flex",
    height: "auto",
    alignItems: "center",
  },
  label: {
    marginBottom: "21%",
    textAlign: "center",
    marginTop: "15%",
    color: theme.$redColor,
  },
  price: {
    marginTop: "-8%",
    marginLeft: "-68%",
  },
};

export default styles;
