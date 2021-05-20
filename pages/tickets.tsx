import {Grid, Flex, Stack, Box, Heading, Text, Button } from "@chakra-ui/core";
import { Input} from '../components'

export default function Home() {
  function Feature({ nome, contato, unidade, sala, data, ...rest }) {
    return (
      <Box p={4} width={1000} shadow="md" borderWidth="1px" {...rest}>
        <Flex>
          <Heading fontSize="xl" marginRight={10}>{nome}</Heading>
          <Button height={6} backgroundColor="gray.600" _hover={{ backgroundColor: 'purple.500' }}>
              View
          </Button>
        </Flex>
        <Flex>
          <Input name="Contato" value={contato} isDisabled></Input>
          <Input name="Unidade" value={unidade} isDisabled></Input>
          <Input name="Sala" value={sala} isDisabled></Input>
          <Input name="Data Ocorrência" value={data} isDisabled></Input>
        </Flex>
      </Box>
    );
  }
  
  function StackEx() {
    return (
      <Stack spacing={4}>
        <Feature
          nome="Bruna Ribeiro"
          contato="91991770337"
          unidade="Mauriti"
          sala="117"
          data="11/05/2021"
        />
        <Feature
          nome="Ana Karoline"
          contato="92984602327"
          unidade="Aleixo"
          sala="201"
          data="19/05/2021"
        />        
      </Stack>
    );
  }
  
  return(
    <Grid
      as="main"
      height="100%"
      templateRows="120px auto "
      justifyContent="center"
      alignItems="center"
      templateAreas="
        
        '. header'
        '. table'
        
      "
    >
      <Flex gridArea="header" flexDir="row" alignItems="flex-start">
        <img width="20%" src="/aslan-logo.svg" alt="ASLAN" />
        <Heading size="2xl" lineHeight="shorter" marginLeft={6}>
          Tabela de Registro - Híbrido
        </Heading>
      </Flex>

      <Flex 
        gridArea="table"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        alignItems="stretch"
        padding={5}
      >
        <StackEx />
      </Flex>
    </Grid>
        
  );
}
