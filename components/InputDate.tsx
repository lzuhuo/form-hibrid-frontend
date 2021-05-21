import React, { useEffect, useState } from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps, InputGroup, Text, Stack } from '@chakra-ui/core'


const Input: React.FC<ChakraInputProps> = ({name, ...props}) => {
  
  return (
    <Stack 
      spacing={4} 
      marginLeft={2}
      marginRight={2}
      marginTop={5}
      >
        <Text>{name}</Text>
        <ChakraInput
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          maxWidth="220px"
          name={name}
          type="text"
          placeholder="dd/mm/aaaa"
          {...props}
        />
    </Stack>
  )
}

export default Input;