import React from "react";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
  mainBody: {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  }, 
});

const DashBoard = () => {
  const classes= useStyles();
  return (
    <div className={classes.mainBody}>
      <h1>Soon To Be A DashBoard</h1>
    </div>
  );
};

export default DashBoard;
