import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
// import Checkbox from "@mui/material/Checkbox";

import Paper from "@mui/material/Paper";

import EnhancedTableToolbar from "../components/newreg/EnhancedTableToolbar";
import EnhancedTableHead from "../components/newreg/EnhancedTableHead";
import Row from "../components/newreg/Row";
import { useNavigate, useParams } from "react-router-dom";
import ViewVehicle from "./ViewVehicle";

function createData(
  Vehicle_Reg_Number,
  Previous_Reg_Number,
  Vehicle_PIN_Number,
  Chassis_Number,
  Engine_Number,
  Vehicle_Make,
  Vehicle_Model,
  Vehicle_Colour,
  Vehicle_Tax_Class,
  Vehicle_Fuel_Type,
  Type_of_Body,
  Net_Mass,
  Gross_Vehicle_Mass,
  Year_of_Manufacture,
  Country_of_import,
  Vehicle_Reg_Status,
  Date_of_Zim_Reg,
  Vehicle_Restri,
  Owner_Surname,
  Owner_Name,
  Owner_ID,
  Owner_Phone_Number,
  Second_Owner_Surname,
  Second_Owner_Name,
  Date_Issued,
  Issuing_Office,
  Certificate_Number,
  Address,
  City_Town
) {
  return {
    Vehicle_Reg_Number,
    Previous_Reg_Number,
    Vehicle_PIN_Number,
    Chassis_Number,
    Engine_Number,
    Vehicle_Make,
    Vehicle_Model,
    Vehicle_Colour,
    Vehicle_Tax_Class,
    Vehicle_Fuel_Type,
    Type_of_Body,
    Net_Mass,
    Gross_Vehicle_Mass,
    Year_of_Manufacture,
    Country_of_import,
    Vehicle_Reg_Status,
    Date_of_Zim_Reg,
    Vehicle_Restri,
    Owner_Surname,
    Owner_Name,
    Owner_ID,
    Owner_Phone_Number,
    Second_Owner_Surname,
    Second_Owner_Name,
    Date_Issued,
    Issuing_Office,
    Certificate_Number,
    Address,
    City_Town
  };
}

const rows = [
  createData(
    "ACJ9475",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9476",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9477",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9478",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9479",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9480",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9481",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9482",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9483",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9484",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9485",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  ),
  createData(
    "ACJ9486",
    "ACJ9475",
    "V0752772",
    "SXN10001267135",
    "3S7600394",
    "Toyota",
    "Nadia",
    "grey",
    "1-2300 KG net mass",
    "petrol",
    "stationwagon (Ranchwagon)",
    "1665",
    "0",
    "1998",
    "Japan",
    "issues/change of ownership",
    "01/03/2012",
    "no restrictions",
    "John",
    "Doe",
    "123456789",
    "+263 77 211 8916",
    "John",
    "Doe",
    "01/01/2020",
    "123456789",
    "C000863967",
    "10 Griffin Terrace Highbury Road Tegela",
    "Bulawayo"
  )
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE10, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [dense, setDense] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = rows.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  const handleClick = (event, name) => {
    return navigate(`./${name}`);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  if (id) {
    return <ViewVehicle id={id} />;
  } else {
    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", borderRadius: 3, overflow: "hidden" }}>
          <EnhancedTableToolbar
            handleChangeDense={handleChangeDense}
            dense={dense}
          />
          <TableContainer sx={{ minHeight: 380, mb: 0 }}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                // onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE10, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy)).map(
                  (row, index) => {
                    return (
                      <Row key={index} handleClick={handleClick} row={row} />
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    );
  }
}
