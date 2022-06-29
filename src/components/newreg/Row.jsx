import React from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material";

const StyledCell = styled(TableCell)({
  textTransform: "capitalize",
  whiteSpace: "nowrap"
});

const Row = (props) => {
  const { row, handleClick } = props;
  return (
    <TableRow
      hover
      onClick={(event) => handleClick(event, row.Vehicle_Reg_Number)}
      role="checkbox"
      tabIndex={-1}
      key={row.Vehicle_Reg_Number}
    >
      <StyledCell>{row.Vehicle_Reg_Number}</StyledCell>
      <StyledCell>{row.Previous_Reg_Number}</StyledCell>
      <StyledCell>{row.Vehicle_PIN_Number}</StyledCell>
      <StyledCell>{row.Chassis_Number}</StyledCell>
      <StyledCell>{row.Engine_Number}</StyledCell>
      <StyledCell>{row.Vehicle_Make}</StyledCell>
      <StyledCell>{row.Vehicle_Model}</StyledCell>
      <StyledCell>{row.Vehicle_Colour}</StyledCell>
      <StyledCell>{row.Vehicle_Tax_Class}</StyledCell>
      <StyledCell>{row.Vehicle_Fuel_Type}</StyledCell>
      <StyledCell>{row.Type_of_Body}</StyledCell>
      <StyledCell>{row.Net_Mass}</StyledCell>
      <StyledCell>{row.Gross_Vehicle_Mass}</StyledCell>
      <StyledCell>{row.Year_of_Manufacture}</StyledCell>
      <StyledCell>{row.Country_of_import}</StyledCell>
      <StyledCell>{row.Vehicle_Reg_Status}</StyledCell>
      <StyledCell>{row.Date_of_Zim_Reg}</StyledCell>
      <StyledCell>{row.Vehicle_Restri}</StyledCell>
      <StyledCell>{row.Owner_Surname}</StyledCell>
      <StyledCell>{row.Owner_Name}</StyledCell>
      <StyledCell>{row.Owner_ID}</StyledCell>
      <StyledCell>{row.Owner_Phone_Number}</StyledCell>
      <StyledCell>{row.Second_Owner_Surname}</StyledCell>
      <StyledCell>{row.Second_Owner_Name}</StyledCell>
      <StyledCell>{row.Date_Issued}</StyledCell>
      <StyledCell>{row.Issuing_Office}</StyledCell>
      <StyledCell>{row.Certificate_Number}</StyledCell>
      <StyledCell>{row.Address}</StyledCell>
      <StyledCell>{row.City_Town}</StyledCell>
    </TableRow>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    Vehicle_Reg_Number: PropTypes.string.isRequired,
    Previous_Reg_Number: PropTypes.string.isRequired,
    Vehicle_PIN_Number: PropTypes.string.isRequired,
    Chassis_Number: PropTypes.string.isRequired,
    Engine_Number: PropTypes.string.isRequired,
    Vehicle_Make: PropTypes.string.isRequired,
    Vehicle_Model: PropTypes.string.isRequired,
    Vehicle_Colour: PropTypes.string.isRequired,
    Vehicle_Tax_Class: PropTypes.string.isRequired,
    Vehicle_Fuel_Type: PropTypes.string.isRequired,
    Type_of_Body: PropTypes.string.isRequired,
    Net_Mass: PropTypes.string.isRequired,
    Gross_Vehicle_Mass: PropTypes.string.isRequired,
    Year_of_Manufacture: PropTypes.string.isRequired,
    Country_of_import: PropTypes.string.isRequired,
    Vehicle_Reg_Status: PropTypes.string.isRequired,
    Date_of_Zim_Reg: PropTypes.string.isRequired,
    Vehicle: PropTypes.string.isRequired,
    Vehicle_Restri: PropTypes.string.isRequired,
    Minimum_Height: PropTypes.string.isRequired,
    Owner_Surname: PropTypes.string.isRequired,
    Owner_Name: PropTypes.string.isRequired,
    Owner_ID: PropTypes.string.isRequired,
    Owner_Phone_Number: PropTypes.string.isRequired,
    Second_Owner_Surname: PropTypes.string.isRequired,
    Second_Owner_Name: PropTypes.string.isRequired,
    Date_Issued: PropTypes.string.isRequired,
    Issuing_Office: PropTypes.string.isRequired,
    Certificate_Number: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Address: PropTypes.string.isRequired,
    City_Town: PropTypes.string.isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  labelId: PropTypes.string.isRequired
};

export default Row;
