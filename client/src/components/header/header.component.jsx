import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ModifiedAppBar } from "./header.style";

import {
  auth,
  signOut,
} from "../../firebase";

import {
  selectUser,
  signOutState,
} from "../../redux/features/users/userSlice";

const pages = [
  { name: "Home", url: "home" },
  { name: "Reports", url: "reports" },
  { name: "Health Articles", url: "articles" },
];
const settings = [{name: "Profile", url: "home"}, {name: "Your reports", url: 'reports'}, {name: "Logout", url: "logout"}];

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);


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

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // console.log("User signed out !!!");
        dispatch(signOutState());
      })
      .then(() => setAnchorElUser(null))
      .then(() => navigate('/'))
      .catch((error) => {
        const { code, message, email } = error;
        console.log(
          `Error !!! Code = ${code}, Message = ${message}, Mail = ${email}`
        );
        window.alert(`Error !!! Code = ${code}, Message = ${message}, Mail = ${email}`);
      })
  };

  return (
    <ModifiedAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: "1.5px",
              fontSize: "1.5em",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            Jeevan.Data
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
              {!user.isDoctor&&pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ letterSpacing: "2px" }}
                    onClick={() => navigate(`/${page.url}`)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              letterSpacing: "1.5px",
              fontSize: "1.5em",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            Jeevan.Data
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!user.isDoctor&&pages.map((page, i) => (
              <Button
                key={i}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(`/${page.url}`);
                }}
                sx={{
                  my: 2,
                  mx: 1.5,
                  color: "white",
                  display: "block",
                  letterSpacing: "2px",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user-avatar" src="/static/images/avatar/1.jpg" />
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
              {settings.map((setting, ind) => {
                  if(ind===2)
                    return(
                      <MenuItem key={ind} onClick={handleSignOut}>
                        <Typography textAlign="center">{setting.name}</Typography>
                      </MenuItem>
                    )
                  else 
                    if(!user.isDoctor)
                      return(
                        <MenuItem key={setting.name} onClick={() => {handleCloseUserMenu(); navigate(`/${setting.url}`)}}>
                          <Typography textAlign="center">{setting.name}</Typography>
                        </MenuItem>
                    )
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </ModifiedAppBar>
  );
};
export default Header;
