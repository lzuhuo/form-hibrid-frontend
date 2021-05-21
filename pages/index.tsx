// import Head from 'next/head'

import { Heading, Grid, Flex, Link, Button, Text, Stack } from '@chakra-ui/core'
import { Divider, Input, Select} from '../components'

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
          <Select name="Unidade" width={250}>
            <option value="1">Tamandaré</option>
            <option value="2">Cidade Nova - PA</option>
            <option value="3">Gentil</option>
            <option value="4">Mauriti</option>
            <option value="6">Augusto Montenegro</option>
            <option value="7">Aleixo</option>
            <option value="8">Cidade Nova - AM</option>
            <option value="9">Umarizal</option>
            <option value="10">BR Ananindeua</option>
            <option value="11">Grande Circular</option>
            <option value="12">Djalma Batista</option>
            
          </Select>
          <Input name="Sala de Aula"/>
          <Select name="Equipamento Empresa?" width={250}>
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </Select>
          <Input name="Nome do Equipamento"/>
        </Flex>
        

        <Flex flexDir="row" alignItems="flex-start">
          <Select name="Tipo de Conexão" width={250}>
            <option value="C">Cabeada</option>
            <option value="W">WI-FI</option>
          </Select>
          <Select name="Microfone Funcionando?" width={250}>
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </Select>
          
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
