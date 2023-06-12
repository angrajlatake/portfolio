import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import { Link } from "react-router-dom";

const DrawerOptions = [
  {
    name: "Home",
    icon: <HomeRoundedIcon />,
    links: "/admin",
  },
  {
    name: "Projects",
    icon: <Inventory2RoundedIcon />,
    links: "./projects",
  },
  {
    name: "Blog",
    icon: <BookRoundedIcon />,
    links: "./blog",
  },
];

const DashDrawer = () => {
  const drawerWidth = 240;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {DrawerOptions.map((element, index) => (
            <Link key={element.name} to={element.links}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>{element.icon}</ListItemIcon>
                  <ListItemText primary={element.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DashDrawer;
