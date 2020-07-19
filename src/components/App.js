import React from 'react'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'

import '../stylesheets/App.css'

import NavigationContainer from './Navigation/NavigationContainer'

const App = () => {
  return (
    <Container maxWidth="sm">
      <NavigationContainer />
      <Typography>
        Hello
      </Typography>
    </Container>
  )
}

export default App;
