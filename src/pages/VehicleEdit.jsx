import { Button, ButtonGroup, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";

const VehicleEdit = (props) => {
  return (
    <div>
      <Paper sx={{ px: 3, pt: 1, borderRadius: 3, mt: 3 }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">Vehicle Edit</Typography>
          <ButtonGroup>
            <Button>Print</Button>
            <Button>Save</Button>
          </ButtonGroup>
        </Toolbar>
      </Paper>
    </div>
  );
};

export default VehicleEdit;
