import React from "react";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CompareCountry from "./CompareCountry";
import {
  Typography,
  Box,
  Paper,
  Stack,
  Autocomplete,
  TextField,
  Button,
  Table,
  TableRow,
  TablePagination,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import { fetchCompareCountries } from "../stories/rankCountry/action";
import { formatPopulation } from "../utils";

const ResultsCompare = () => {
  const { code1, code2 } = useParams();
  const { compareCountries } = useSelector((state) => state.rankCountry);

  return (
    <>
      <Outlet />
      <CompareCountry />
      <Paper
        elevation={4}
        width="100%"
        sx={{
          mb: 3,
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "deepskyblue" }}>
                  {compareCountries[0]?.name?.common || "-"}
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "deepskyblue" }}>
                  {compareCountries[1]?.name?.common || "-"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Region:
                </TableCell>
                <TableCell>{compareCountries[0]?.region || "-"}</TableCell>
                <TableCell>{compareCountries[1]?.region || "-"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Area:
                </TableCell>
                <TableCell>{compareCountries[0]?.area || "-"} km²</TableCell>
                <TableCell>{compareCountries[1]?.area || "-"} km²</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Population:
                </TableCell>
                <TableCell>
                  {formatPopulation(compareCountries[0]?.population)}
                </TableCell>
                <TableCell>
                  {formatPopulation(compareCountries[1]?.population)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Capital:
                </TableCell>
                <TableCell>{compareCountries[0]?.capital || "-"}</TableCell>
                <TableCell>{compareCountries[1]?.capital || "-"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: "bold" }}
                >
                  Flag:
                </TableCell>
                <TableCell>
                  <img
                    width="20"
                    src={compareCountries[0]?.flags?.svg}
                    alt=""
                  />
                </TableCell>
                <TableCell>
                  <img
                    width="20"
                    src={compareCountries[1]?.flags?.svg}
                    alt=""
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default ResultsCompare;
