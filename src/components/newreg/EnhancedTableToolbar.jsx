import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TableMenu from "../TableMenu";

const EnhancedTableToolbar = (props) => {
  const { dense, handleChangeDense } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Vehicle List
      </Typography>
      <TableMenu dense={dense} handleChangeDense={handleChangeDense} />
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  dense: PropTypes.bool.isRequired,
  handleChangeDense: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
};

export default EnhancedTableToolbar;
