"use client";

import {
  useTheme,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "children"> {
  sx?: SxProps<Theme> | undefined;
  inputType?: "text" | "number";
}

export const TextField: React.FC<TextFieldProps> = ({
  sx,
  inputType = "text",
  ...props
}) => {
  const theme = useTheme();

  //   Common styles for the text and number input
  const commonStyles = {
    borderRadius: "6px",
    width: "100%",
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
    },
    "& .MuiOutlinedInput-root": {
      borderWidth: "1px",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: "1px",
      },
    },
  };
  //   Styles for the text input
  const inputTypeTextStyle = {
    ...commonStyles,
    "& .MuiAutocomplete-inputRoot": {
      py: 0,
      px: "5px",
      borderWidth: "1px",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: "1px",
      },
    },
    "& .MuiInputBase-input ": {
      "::placeholder": {
        fontWeight: 400,
      },
      px: "10px",
      py: "5px",

      fontSize: "14px",
    },
  };

  //   Styles for the number input
  const inputTypeNumberStyle = {
    ...commonStyles,

    "& .MuiInputBase-input": {
      "::placeholder": {
        fontWeight: 400,
      },
      px: "10px",
      py: "5px",
      fontSize: "14px",
      textAlign: "right",
    },
  };

  const styleToUse =
    inputType === "text" ? inputTypeTextStyle : inputTypeNumberStyle;

  return (
    <MuiTextField
      sx={{
        ...sx,
        ...styleToUse,
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "input[type=number]": {
          MozAppearance: "textfield",
        },
      }}
      type={inputType}
      {...props}
    />
  );
};

export default TextField;
