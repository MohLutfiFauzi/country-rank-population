import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Table,
  TableRow,
  TablePagination,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from "@mui/material";

const columns = [
  {
    id: "no",
    label: "No",
    minWidth: 10,
  },
  { id: "country", label: "Country", minWidth: 170 },
  { id: "code", label: "ISO Code", minWidth: 100 },
  { id: "idd", label: "International Direct Dialing", minWidth: 100 },
  { id: "flag", label: "Flag", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 100,
    align: "right",
  },
];

export default function Tables() {
  const { countries } = useSelector((state) => state.rankCountry);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", marginBottom: "20px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                <Typography
                  variant="h1"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ fontSize: "2rem", m: 3, textAlign: "center" }}
                >
                  The Country With the Most Population
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 118, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "flag" ? (
                            <img width="20" src={value} alt="" />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
