"use client";

import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));

export default function SearchInput() {
  return (
    <TextField
      size={"small"}
      sx={{
        width: "338px",

        ":hover": {
          border: "none", // fixed extra hover
        },
        boxShadow: 0,
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "200px",
        },
        "& .MuiInputBase-input": {
          py: 1,
        },
      }}
      label={"Schnellsusche nach Akten"}
      InputLabelProps={{
        sx: { top: 1, fontSize: "15px" },
      }}
      InputProps={{
        // sx: {
        //   py: 1,
        // },
        endAdornment: (
          <InputAdornment position="end">
            <Box display={"flex"}>
              <StyledIconButton size="small">
                <SearchIcon fontSize="small" />
              </StyledIconButton>
              <Divider orientation="vertical" flexItem />
              <StyledIconButton size="small">
                <ChevronLeftIcon fontSize="small" />
                <TravelExploreIcon fontSize="small" />
              </StyledIconButton>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}
