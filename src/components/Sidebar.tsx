"use client";
import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const drawerWidth = 240;

const sidebarItems = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    href: "/dashboard",
  },
  {
    label: "Menu",
    icon: MenuIcon,
    href: "/menu",
  },
  {
    label: "Sub Item 1",
    icon: MenuIcon,
    href: "/menu",
  },
  {
    label: "Sub Item 2",
    icon: MenuIcon,
    href: "/menu",
  },
  {
    label: "Sub Item 3",
    icon: MenuIcon,
    href: "/menu",
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.primary.main,
  color: "white",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.primary.main,
  color: "white",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const path = usePathname();
  const openFromStorage = sessionStorage.getItem("sidebarOpen");
  const [open, setOpen] = useState(
    openFromStorage ? openFromStorage === "true" : false
    // false
  );

  const handleOpen = () => {
    sessionStorage.setItem("sidebarOpen", !open ? "true" : "false");
    setOpen(!open);
  };

  return (
    <Drawer open={open} variant="permanent">
      {open ? (
        <Box sx={{ width: "100%" }}>
          <Image
            src={Logo}
            alt={"logo"}
            width={0}
            height={0}
            className="size-full"
          />
        </Box>
      ) : null}

      <List sx={{ mb: 5 }}>
        {sidebarItems.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
            <Link href={item.href}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  mt: index === 2 ? 5 : 0,
                  mb: 0.5,
                  backgroundColor:
                    path.replace("/", "") === item.label.toLowerCase()
                      ? theme.palette.secondary.main
                      : "transparent",
                  ":hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {index < 2 ? (
                    <item.icon />
                  ) : (
                    <Badge badgeContent={321321} color="secondary">
                      <item.icon />
                    </Badge>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          mt: "auto",
          pl: 1,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleOpen()}
          sx={{}}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
    </Drawer>
  );
}
