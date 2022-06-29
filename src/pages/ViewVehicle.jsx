import React from "react";
import { Paper } from "@mui/material";

const ViewVehicle = (props) => {
  const { id } = props;
  return <Paper sx={{ p: 3 }}>{id}</Paper>;
};

ViewVehicle.propTypes = {};

export default ViewVehicle;
