import React from 'react'
import { Card, CardActions ,CardMedia, CardHeader, CardContent, Typography, Avatar, IconButton, } from '@mui/material'
import { MoreVert, Favorite, Share } from '@mui/icons-material'

export default function Post() {
  return (
    <Card sx={{
      margin: "1rem"
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "lightblue" }} >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Nurkhat Jumabaev"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="nature1.avif"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Nature is a captivating tapestry of earth, air, water, and sunlight. It offers solace, beauty, and a deep connection to the world. From towering mountains to serene lakes, it showcases life's diversity. Nature teaches resilience and reminds us to cherish and protect our planet. It inspires, heals, and connects us to ourselves and the world around us.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
    </Card>
  )
}
