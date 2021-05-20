// import Head from 'next/head'

import { Heading, Grid, Flex, Link, Button, Text, Stack } from '@chakra-ui/core'
import { Divider, Input} from '../components'

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 400px 1000px 1fr"
      templateRows="1fr 500px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img width="75%" src="/aslan-logo.svg" alt="Rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Ticket de Ocorrências
        </Heading>
      </Flex>

      <Flex 
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={5}
      >

        <Flex>
          <Input name="Nome"/>
          <Input name="Contato com DDD"/>
          <Input name="Data da Ocorrencia"/>
          <Input name="Horário"/>
        </Flex>
        
        <Flex>
          <Input name="Unidade"/>
          <Input name="Sala de Aula"/>
          <Input name="Equipamento Empresa?"/>
          <Input name="Nome do Equipamento"/>
        </Flex>
        

        <Flex>
          <Input name="Tipo de Conexão"/>
          <Input name="Microfone Funcionando?"/>
          
        </Flex>

        <Divider />

        <Stack direction="row" align="right">
          <Button
            height="50px"
            flex="1"
            backgroundColor="gray.600"
            maxWidth="240px"
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
          >
            SALVAR
          </Button>
        </Stack>
      </Flex>
    </Grid>
  )
}
