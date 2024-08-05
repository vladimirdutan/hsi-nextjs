"use client";
import { Avatar, Box, TextField, Typography, Menu } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AvatarMenu from "./Header/AvatarMenu";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 0.2,
        px: 1,
      }}
    >
      <Box>
        <Typography variant="h6">Tabs</Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          // gap: 3.5,
        }}
      >
        {/* <TextField size={"small"} /> */}
        <NotificationsNoneIcon sx={{ fontSize: 21, mt: 0.5, ml: 3.3 }} />
        <AvatarMenu />
      </Box>
    </Box>
  );
}
