"use client";

import { Avatar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import CachedIcon from "@mui/icons-material/Cached";
import { useTheme } from "@mui/material/styles";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import HelpIcon from "@mui/icons-material/Help";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const menuItems = [
  {
    label: "Theming",
    icon: ColorLensIcon,
    href: "/theming",
  },
  {
    label: "Empty cache",
    icon: CachedIcon,
    href: "/empty-cache",
  },
  {
    label: "Actahelp",
    icon: HelpIcon,
    href: "/help",
  },
  {
    label: "Log-out",
    icon: PowerSettingsNewIcon,
    href: "/",
  },
];

export default function AvatarMenu() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        id="basic-button"
        variant="text"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disableTouchRipple
      >
        <Avatar
          sx={{
            ml: 2,
            width: "32px",
            height: "32px",
            fontSize: "11px",
            color: "black",
            mt: 0.5,
          }}
        >
          VD
        </Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        sx={{
          p: 0,

          ".MuiList-root": {
            py: 0,
            borderRadius: 100,
          },
          ".MuiPaper-root": {
            borderRadius: "8px",
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            sx={{
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },

              py: "13px",
              width: "166px",
            }}
          >
            {/* <CachedIcon /> */}
            <item.icon sx={{ fontSize: 20 }} />
            <Typography variant="subtitle2" sx={{ ml: 1.5, fontWeight: 400 }}>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
