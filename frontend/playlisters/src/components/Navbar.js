import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#161A1D",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: "none", sm: "block" } }}
          >
            {/* <img
              src={process.env.PUBLIC_URL + "/Plogo1.png"}
              alt="Logo"
              style={{ width: "45px", height: "45px", paddingTop: "10px" }}
            />{" "} */}
            <h5>Playlisters</h5>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ mr: 1 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            aria-label="person"
            style={{ color: "white", backgroundColor: "transparent" }}
            sx={{
              "&:hover": {
                color: "#D90429 !important",
              },
            }}
            component={Link}
            to="/"
          >
            <HomeRoundedIcon />
          </IconButton>

          <IconButton
            aria-label="person"
            style={{ color: "white", backgroundColor: "transparent" }}
            sx={{
              "&:hover": {
                color: "#D90429 !important",
              },
            }}
            component={Link}
            to="/add"
          >
            <AddBoxRoundedIcon />
          </IconButton>

          <IconButton
            aria-label="person"
            style={{ color: "white", backgroundColor: "transparent" }}
            sx={{
              "&:hover": {
                color: "#D90429 !important",
              },
            }}
            component={Link}
            to="/signup"
          >
            <PersonRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
