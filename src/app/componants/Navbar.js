"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import logoBlack from "../../../public/images/bajco_black.png";
import logoWhite from "../../../public/images/bajco_white.png";
import Image from "next/image";
import Link from "next/link";
import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const pages = [
  { id: 1, title: "مغاسل رخام", url: "مغاسل_رخام" },
  {
    id: 2,
    title: "اتصل بنا",
    url: "",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ height: 100, backgroundColor: "#183D3D" }}>
          <Container sx={{ paddingTop: "15px" }} maxWidth="xl">
            <Toolbar
              sx={{ display: "flex", justifyContent: "space-between" }}
              className="justifyContentImportant"
            >
              <Box
                sx={{ display: { xs: "none", md: "flex" }, paddingLeft: 60 }}
              >
                <Link href="/">
                  <Image
                    style={{ display: { lg: "none" } }}
                    src={logoWhite}
                    alt=""
                    width={150}
                  />
                </Link>
              </Box>

              <Box
                maxWidth="48px"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <IconButton
                  onClick={handleClickOpen}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <Link
                        href={page.url}
                        textAlign="center"
                        className="fontTajwal"
                      >
                        {page.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  display: {
                    lg: "none",
                    justifyContent: "space-between",
                    md: "none",
                    justifyContent: "space-between",
                  },
                }}
              >
                <Link href="/">
                  <Image src={logoWhite} alt="" width={150} />
                </Link>
              </Box>

              <Box
                sx={{
                  gap: "20px",
                  color: "#FF6969",
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Link
                    href={page.url}
                    className="fontTajwal"
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontSize: "20px",
                    }}
                  >
                    {page.title}
                  </Link>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="صفحة التواصل">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <ContactPhoneIcon
                      sx={{ color: "white", fontSize: "30px", width: "48px" }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"الأقسام:"}</DialogTitle>
        <DialogContent className="css-1t1j96h-MuiPaper-root-MuiDialog-paper">
          <DialogContentText id="alert-dialog-description">
            <Box display="flex" paddingBottom={2} justifyContent="space-around">
              <div>مغاسل رخام</div>
              <div>أعمالنا</div>
            </Box>
            <Box display="flex" justifyContent="space-around">
              <div>معرض الصور</div>
              <div>المدونة</div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="red" onClick={handleClose} autoFocus>
            إغلاق
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
