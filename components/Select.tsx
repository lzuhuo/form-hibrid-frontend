import React from 'react';
import { Select as ChakraSelect, SelectProps as ChakraSelectProps, Text, Stack } from '@chakra-ui/core'


const Select: React.FC<ChakraSelectProps> = ({name, ...props}) => {
  return (
    <Stack 
      spacing={4} 
      marginLeft={2}
      marginRight={2}
      marginTop={5}
      >
        <Text>{name}</Text>
        <ChakraSelect
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          maxWidth="220px"
          placeholder={name}
          {...props}
        />
    </Stack>
  )
}

export default Select;