import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'

export default function Feed() {
  return (
    <Box flex={4} p={2} sx={{
    
    }}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}
