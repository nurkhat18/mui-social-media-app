import React from 'react'
import { Box } from '@mui/material'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import styled from '@emotion/styled';
import HouseIcon from '@mui/icons-material/House';
import { theme }from '../theme'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountIcon from '@mui/icons-material/AccountBox';
import AccessibilityIcon from '@mui/icons-material/AccessibilityNew';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Sidebar({mode, setMode}) {
  
  const StyledListItemText = styled(ListItemText)({
    color: 'success',
  });

  const StyledListItemIcon = styled(ListItemIcon)({
    color: 'success'})
  return (
    <Box flex={2} p={2} sx={{
      display: {xs: 'none', sm: 'block'},
    }}>
      <Box sx={{
        position: "fixed"
      }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#homepage">
              <StyledListItemIcon>
                <HouseIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <StyledListItemIcon>
                <AccountIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <StyledListItemIcon>
                <Diversity1Icon />
              </StyledListItemIcon>
              <StyledListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <StyledListItemIcon>
                <GroupsIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#accessibilities">
              <StyledListItemIcon>
                <AccessibilityIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Accessibilities" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <StyledListItemIcon>
                <SettingsIcon />
              </StyledListItemIcon>
              <StyledListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#mode">
              <StyledListItemIcon>
                <DarkModeIcon />
              </StyledListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark": "light")} />
              
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}
