import React from 'react'
import {Box} from '@sanity/ui'

export function Logo(props) {
  return (
    <Box padding={3} className="logo">
      {props.title}
    </Box>
  )
}
