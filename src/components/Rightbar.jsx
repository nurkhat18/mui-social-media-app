import React from 'react'
import { 
  Box, Typography, Avatar, 
  AvatarGroup, 
  List,
  ListItemText,
  ListItem, 
  ListItemAvatar,

} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';


export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{
      display: {xs: 'none', md: 'block'}
    }} >
      <Box position='fixed'>
        <Typography variant="h5" fontWeight={100} >
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="./person1.jpeg" />
          <Avatar alt="Travis Howard" src="./person2.webp" />
          <Avatar alt="Cindy Baker" src="./person3.jpg" />
          <Avatar alt="Trevor Henderson" src="./person4.webp" />
          <Avatar alt="Trevor Henderson" src="./person4.webp" />
        </AvatarGroup>
        <List sx={{ 
          width: '100%', 
          maxWidth: 360, bgcolor: 
          'background.paper',
          marginTop: '1rem'
       }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CakeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Birthday" secondary="Feb 18, 2004" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Workplace" secondary="FaceZonAppGoogFlix" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary="Tucson, US" />
          </ListItem>
        </List>

      </Box>
    </Box>
  )
}
