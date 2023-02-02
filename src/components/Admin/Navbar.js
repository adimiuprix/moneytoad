import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import TextField from "@mui/material/TextField";
import ETH_TOKEN_IMAGE from "../../assets/image/ETH Main Logo.png";

import useWindowDimensions from "../../hooks/useDimension";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box minWidth={`250px`} height={`100vh`}>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          background: "#2b442b",
          color: "white",
          height: "100vh",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{
              backgroundColor: "unset",
              color: "white",
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img src={ETH_TOKEN_IMAGE} alt="" style={{ width: "50px" }} />
              <Box fontSize={`24px`}>Boxa Admin</Box>
            </NavLink>
          </ListSubheader>
        }
      >
        <ListItemButton sx={{ marginTop : `15px`}}>
          <ListItemIcon>
            <SendIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <NavLink
            to="/admin/AccessLog"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItemText primary="Access Logo" />
          </NavLink>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        {/* <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon sx={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse> */}
      </List>
    </Box>
  );
}

export default Navbar;
