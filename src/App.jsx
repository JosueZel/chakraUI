import * as React from 'react';
import {Box, Center, Img, Button, Text, ChakraProvider} from '@chakra-ui/react'
import './App.css'
import Header from './Header';

function App() {
  return (
  
    <ChakraProvider>
      <Header/>
    </ChakraProvider>
    
  )
}

export default App
