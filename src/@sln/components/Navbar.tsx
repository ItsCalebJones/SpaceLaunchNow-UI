import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { SLNTypography } from "./SLNTypography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from '@mui/icons-material/ArrowDropDown';
import { MenuRoute, routes } from "@sln/routes";

import { NavLink } from "react-router-dom";
import { Link, useTheme } from "@mui/material";
import HorizontalRule from "./utils/HorizontalRule";

const ResponsiveAppBar = ({ transparent}) => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElLaunches, setAnchorElLaunches] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenLaunchMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLaunches(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLaunchMenu = () => {
    setAnchorElLaunches(null);
  };


  return (
    <AppBar position="static"
      style={{
      backgroundColor: transparent ? "transparent" : theme.palette.primary.main,
      boxShadow: transparent
        ? "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important"
        : undefined
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Expanded Title */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Space Launch Now
          </Typography>

          {/* Collapsed View */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Launch"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* Collapsed Title */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Space Launch Now
          </Typography>

          {/* Expanded Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map((route) => (
              <NavbarButton
                menuRoute={route}
                handleCloseNavMenu={handleCloseNavMenu}
                handleOpenLaunchMenu={handleOpenLaunchMenu}
                handleCloseLaunchMenu={handleCloseLaunchMenu}
                anchorElLaunches={anchorElLaunches}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

ResponsiveAppBar.defaultProps = {
  transparent: false,
}

interface NavbarButtonProps {
  menuRoute: MenuRoute;
  handleCloseNavMenu: any;
  handleOpenLaunchMenu: any;
  handleCloseLaunchMenu: any;
  anchorElLaunches: any;
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  menuRoute,
  handleCloseNavMenu,
  handleOpenLaunchMenu,
  handleCloseLaunchMenu,
  anchorElLaunches

}) => {
  if (menuRoute.submenu) {
    return (
      <div>
        <Button
          endIcon={<SendIcon />}
          onClick={handleOpenLaunchMenu}
          sx={{ my: 2, color: "white" }}

        >
          <SLNTypography kind="buttonText">{menuRoute.title}</SLNTypography>
        </Button>
        <Menu
          sx={{
            mt: "45px",
            transformOrigin: "0 0"
          }}
          id="menu-appbar"
          anchorEl={anchorElLaunches}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElLaunches)}
          onClose={handleCloseLaunchMenu}
        >
          {menuRoute.submenu.map((subroute) => (
            // If key is null then we use it as a spacer
            subroute.key
              ? <MenuItem key={subroute.key} onClick={handleCloseLaunchMenu}>
                <Link
                    key={subroute.key}
                    component={NavLink}
                    to={subroute.path}
                    underline="none"
                    variant="button"
                  >
                  <SLNTypography kind="subButtonText">{subroute.title}</SLNTypography>
                </Link>
              </MenuItem>
            : <HorizontalRule/>
          ))}
        </Menu>
      </div>
    );
  } else {
    return (
      <Link
        key={menuRoute.key}
        component={NavLink}
        to={menuRoute.path}
        underline="none"
        variant="button"
      >
        <Button
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white"}}
        >
          <SLNTypography kind="buttonText">{menuRoute.title}</SLNTypography>
        </Button>
      </Link>
    );
  }
};

export default ResponsiveAppBar;
