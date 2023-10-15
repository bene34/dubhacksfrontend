import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Dashboard, AccountCircle } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link} from 'react-router-dom';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
      <ListItem >
            <ListItemButton>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
            <ListItemText primary="Dashboard" />
            </ListItemButton>
        </ListItem>
        <ListItem >
            <ListItemButton>
                <ListItemIcon>
                    <CreateIcon />
                </ListItemIcon>
            <ListItemText primary="Create Form" />
            </ListItemButton>
        </ListItem>
        <ListItem >
            <ListItemButton>
                <ListItemIcon>
                    <DescriptionIcon />
                </ListItemIcon>
            <ListItemText primary="View Past Forms" />
            </ListItemButton>
        </ListItem>
        <ListItem >
            <ListItemButton component={Link} to={'/settings'}>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
            <ListItemText primary="Settings" />
            </ListItemButton>
        </ListItem>
        <ListItem >
            <ListItemButton component={Link} to={'/invite'}>
                <ListItemIcon>
                    <PersonAddAlt1Icon />
                </ListItemIcon>
            <ListItemText primary="New Employee" />
            </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;