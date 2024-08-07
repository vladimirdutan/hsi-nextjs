import React from "react";
import {
  useTheme,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  AutocompleteFreeSoloValueMapping,
} from "@mui/material";
import TextField from "../TextField";
import SearchIcon from "@mui/icons-material/Search";

// Define the structure for your option objects
interface OptionType {
  label: string;
  value: string;
}

// Update AutocompleteValue to use the OptionType
type AutocompleteValue = OptionType;

export interface AutocompleteProps<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> extends Omit<
    MuiAutocompleteProps<
      AutocompleteValue,
      Multiple,
      DisableClearable,
      FreeSolo
    >,
    "renderInput" | "children"
  > {
  options: AutocompleteValue[];
}

export function Autocomplete<
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  ...props
}: AutocompleteProps<
  Multiple,
  DisableClearable,
  FreeSolo
>): React.ReactElement {
  const theme = useTheme();

  return (
    <MuiAutocomplete
      {...props}
      renderInput={(params) => (
        <TextField
          inputType="text"
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: <SearchIcon sx={{ fontSize: 17 }} />,
          }}
        />
      )}
      options={props.options}
      forcePopupIcon={false}
      noOptionsText={"No records found."}
      getOptionLabel={(
        option: AutocompleteValue | AutocompleteFreeSoloValueMapping<FreeSolo>
      ) => {
        if (typeof option === "string") {
          return option;
        }
        return option.label;
      }}
      componentsProps={{
        paper: {
          sx: {
            // backgroundColor: "red",
            "& .MuiAutocomplete-listbox ": {
              py: 0,
            },
            "& .MuiAutocomplete-option ": {
              fontWeight: 600,
              fontSize: "14px",
              ":hover": {
                backgroundColor: "#eeeeee",
              },
            },
          },
        },
      }}
      renderOption={(params) => {
        console.log(params);
        const { key, ...restParams } = params;
        return (
          <li key={key} {...restParams}>
            {key}
          </li>
        );
      }}
    />
  );
}
