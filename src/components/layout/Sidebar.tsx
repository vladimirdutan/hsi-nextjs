"use client";
import {
  Badge,
  BadgeProps,
  Box,
  Divider,
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
import SmallLogo from "@/public/small_logo.png";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const drawerWidth = 234;

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
];

const sidebarSecondaryItems = [
  {
    label: "Cases",
    icon: FindInPageIcon,
    href: "/menu",
  },
  {
    label: "van wan Kenobi",
    icon: FindInPageIcon,
    href: "/menu",
  },
  // {
  //   label: "bla bla bla",
  //   icon: FindInPageIcon,
  //   href: "/menu",
  // },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.primary.dark,
  color: "white",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: theme.palette.primary.dark,
  color: "white",
  overflowX: "hidden",
  width: `60px`,
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  // flexShrink: 0,
  whiteSpace: "nowrap",
  // boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: ".6rem",
    color: "white",
    fontWeight: 400,
    backgroundColor: theme.palette.primary.main,
    // center badge
    bottom: -3,
    left: "50%",
    transform: "translateX(-50%, -50%)",
  },
}));

export default function Sidebar() {
  const router = useRouter();
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
        <Box sx={{ width: "234px", height: "51px" }}>
          <Image
            src={Logo}
            alt={"logo"}
            width={0}
            height={0}
            className="size-full object-cover"
          />
        </Box>
      ) : (
        <Image
          src={SmallLogo}
          alt={"small-logo"}
          width={0}
          height={0}
          className="size-full object-cover"
        />
      )}

      <List sx={{ pt: 0 }}>
        {sidebarItems.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ width: "100%" }}>
            <ListItemButton
              onClick={() => router.push(item.href)}
              sx={{
                flex: "1 0 auto",
                justifyContent: "center",
                py: 1.9,
                px: 2.5,

                backgroundColor:
                  path.replace("/", "") === item.label.toLowerCase()
                    ? theme.palette.primary.light
                    : "transparent",
                ":hover": {
                  backgroundColor: "ffffff0d",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2.5,
                  opacity: 0.85,

                  color: "white",
                }}
              >
                <item.icon fontSize="small" />
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                disableTypography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 400,
                  opacity: 0.85,
                  // mt: 1,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          width: open ? "65%" : "0",
          mx: "auto",
          backgroundColor: "#ffffff1a",
        }}
      />
      <List sx={{}}>
        {sidebarSecondaryItems.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ width: "100%" }}>
            <ListItemButton
              onClick={() => router.push(item.href)}
              sx={{
                flex: "1 0 auto",
                justifyContent: "center",
                py: 1.5,
                px: 2.5,

                backgroundColor:
                  path.replace("/", "") === item.label.toLowerCase()
                    ? theme.palette.primary.light
                    : "transparent",
                ":hover": {
                  backgroundColor: "ffffff0d",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 2.4,
                  color: "white",
                  opacity: 0.85,
                }}
              >
                <StyledBadge
                  badgeContent={"2/24"}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  color="primary"
                >
                  <item.icon fontSize="small" />
                </StyledBadge>
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                disableTypography
                sx={{
                  color: "rgb(255, 255, 255)",
                  fontSize: "14px",
                  pt: "4px",
                  fontWeight: 700,
                  display: "flex",
                  opacity: ".85",

                  flex: 1,
                }}
              />
            </ListItemButton>
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
