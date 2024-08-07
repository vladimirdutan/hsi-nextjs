import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as MuiIconButton,
  useTheme,
} from "@mui/material";

export interface IconButtonProps extends Omit<MuiIconButtonProps, "children"> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const theme = useTheme();
  return (
    <MuiIconButton
      disableRipple
      sx={{
        ":hover": {
          backgroundColor: "transparent",
          color: theme.palette.primary.main,
        },
      }}
      {...props}
    >
      {icon}
    </MuiIconButton>
  );
};

export default IconButton;
