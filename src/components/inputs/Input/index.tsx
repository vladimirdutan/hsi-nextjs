"use client";

import {
  useTheme,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

export interface TextFieldProps extends Omit<MuiTextFieldProps, "children"> {
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ label, ...props }) => {
  const theme = useTheme();
  return (
    <MuiTextField
      sx={{
        borderRadius: "6px",
        width: "100%",
        "& .MuiInputBase-input": {
          "::placeholder": {
            fontWeight: 400,
          },
          px: "10px",
          py: "5px",
          fontSize: "14px",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
        },
        "& .MuiOutlinedInput-root": {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
          },
        },
      }}
      {...props}
    >
      {label}
    </MuiTextField>
  );
};

export default TextField;
