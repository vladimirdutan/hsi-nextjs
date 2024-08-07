"use client";
import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  useTheme,
} from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, "children"> {
  label: string;
}

export const MyButton: React.FC<ButtonProps> = ({ label, ...props }) => {
  const theme = useTheme();
  return (
    <MuiButton
      sx={{
        borderRadius: "9999px",
        color: theme.palette.text.primary,
        borderColor: theme.palette.grey[200],
        "& .MuiButton-icon": {
          color: theme.palette.primary.main,
        },
        ":hover": {
          backgroundColor: "white",
          borderColor: theme.palette.grey[200],
          color: theme.palette.primary.main,
        },
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default MyButton;
