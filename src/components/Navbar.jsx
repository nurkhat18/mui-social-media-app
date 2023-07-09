import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { AppBar, Typography, Toolbar, Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import styled from '@emotion/styled'
import LogoDevIcon from '@mui/icons-material/LogoDevOutlined';
import MailIcon from '@mui/icons-material/MailOutlineOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';

export default function  Navbar() {
  const [open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between",
  })
  const Search = styled('div')(({theme}) =>({
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%"
    
  }))
  const IconsContainer = styled(Box)(({theme}) =>({
    display: "flex",
    gap: "1rem",
    alignItems: 'center'
  }))

  return (
      <AppBar position="sticky" color='primary'>
        <StyledToolbar>
          <Typography variant="h6" sx={{
            display: {xs: 'none', sm: 'block'}
          }}>
            Nurkhat Jumabaev
          </Typography>
          <LogoDevIcon sx={{
            display: {xs: 'block', sm: 'none'},
            fontSize: '3rem'
            }}></LogoDevIcon>
          <Search><InputBase placeholder='Search'></InputBase></Search>
          <IconsContainer>
            <Badge badgeContent={4} color="error" sx={{
              display: {xs: 'none', sm: "block"}
            }}>
              <MailIcon color='white'></MailIcon>
            </Badge>
            <Badge badgeContent={2} color="error" sx={{
              display: {xs: 'none', sm: "block"}
            }}>
              <NotificationIcon color='white'></NotificationIcon>
            </Badge>
            <Avatar sx={{
              width: "2rem",
              height: "2rem"
            }} onClick={e=>setOpen(true)}></Avatar>
          </IconsContainer>
        
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose = {e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
      
  )
}
