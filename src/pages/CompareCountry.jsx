import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCountries } from "@/stories/rankCountry/action";
import {
  Typography,
  Box,
  Paper,
  Stack,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { fetchCompareCountries } from "../stories/rankCountry/action";

const CompareCountry = () => {
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);
  const { isLoading } = useSelector((state) => state.rankCountry);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  const handleNextPage = () => {
    dispatch(fetchCompareCountries(country1?.code, country2?.code));
    navigate(`/compare-country/${country1?.code}/n/${country2?.code}`);
  };

  const { countries } = useSelector((state) => state.rankCountry);
  return (
    <Box sx={{ mb: 3 }}>
      <Paper
        elevation={4}
        width="100%"
        sx={{
          minHeight: "400px",
          p: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box width="100%">
          <Typography
            variant="h1"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: "2rem", mb: 2, textAlign: "center" }}
          >
            Country Comparison
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: "1rem", mb: 6, textAlign: "center" }}
          >
            Please select the countries to compare:
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            my="24px"
            spacing={2}
          >
            <Autocomplete
              onChange={(_, country) => {
                setCountry1(country);
              }}
              sx={{ width: 400 }}
              options={
                country2
                  ? countries.filter(
                      (country) => country.code !== country2?.code
                    )
                  : countries
              }
              autoHighlight
              getOptionLabel={(option) => option.country}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                  >
                    <img loading="lazy" width="20" src={option.flag} alt="" />
                    {option.country} ({option.code}) {option.idd}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    },
                  }}
                />
              )}
            />

            <Autocomplete
              onChange={(_, country) => {
                setCountry2(country);
              }}
              sx={{ width: 400 }}
              options={
                country1
                  ? countries.filter(
                      (country) => country.code !== country1.code
                    )
                  : countries
              }
              autoHighlight
              getOptionLabel={(option) => option.country}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                  >
                    <img loading="lazy" width="20" src={option.flag} alt="" />
                    {option.country} ({option.code}) {option.idd}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  slotProps={{
                    htmlInput: {
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    },
                  }}
                />
              )}
            />
          </Stack>
          <Stack direction="row" justifyContent="center">
            {isLoading ? (
              <LoadingButton
                sx={{ mt: 2, mx: "auto" }}
                loading
                variant="outlined"
              >
                Submit
              </LoadingButton>
            ) : (
              <Button
                variant="contained"
                sx={{ mt: 2, mx: "auto" }}
                disabled={!country1?.code || !country2?.code}
                onClick={handleNextPage}
              >
                Compare
              </Button>
            )}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default CompareCountry;
