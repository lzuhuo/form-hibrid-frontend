import { Heading, Grid, Flex, Link, Button, Text, Stack } from '@chakra-ui/core'
import { useState } from 'react';
import InputMask from "react-input-mask";
import { Divider, Input, Select, InputDate} from '../components'
import {dateFormat, contatoFormat, clockFormat} from '../utils/converter';

export default function Home() { 
  const [state, setState] = useState({
    nm_usuario: "",
    nr_contato: "",
    dt_ocorrencia: "",
    hr_ocorrencia:"",
    cd_unidade:"",
    nr_sala:"",
    st_equipamento_empresa_usu:"",
    nm_equipamento:"",
    st_rede_adm_usu:"",
    st_microfone_usu:""
  })

  function handleChange(evt) {
    const value = evt.target.value.toUpperCase();
    setState({
      ...state,
      [evt.target.id]: value
    });
  }

  function handleDateChange(evt) {
    const value = dateFormat(evt.target.value);
    setState({
      ...state,
      [evt.target.id]: value
    });
  }

  function handleContactChange(evt){
    const value = contatoFormat(evt.target.value);
    setState({
      ...state,
      [evt.target.id]: value
    });
  }

  function handleClockChange(evt){
    const value = clockFormat(evt.target.value);
    setState({
      ...state,
      [evt.target.id]: value
    });
  }

  function handleButtonClick(){
    let formValid = true;
    let valores = Object.values(state)
    valores.forEach(valor => {
      if(valor == ""){
        formValid = false;
        return;
      }
    });

    if (formValid) {
      console.log(Object.values(state));
    }else{
      console.log("Campos vazios")
    }
    


  }
  

  


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
          <Input 
            name="Nome"
            id="nr_contato"
            value={state.nr_contato}
            onChange={handleChange} 
          />
          <Input 
            name="Contato com DDD"
            id="nm_usuario"
            value={state.nm_usuario}
            onChange={handleContactChange} 
          />
          <InputDate 
            name="Data da Ocorrencia"
            id="dt_ocorrencia"
            value={state.dt_ocorrencia}
            onChange={handleDateChange} 
          />
          <Input 
            name="Horário"
            id="hr_ocorrencia"
            value={state.hr_ocorrencia}
            onChange={handleClockChange} 
          />
        </Flex>
        
        <Flex>
          <Select 
            name="Unidade" 
            width={250}
            id="cd_unidade"
            value={state.cd_unidade}
            onChange={handleChange} 
          >
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
          <Input 
            name="Sala de Aula"
            type="number"
            id="nr_sala"
            value={state.nr_sala}
            onChange={handleChange} 
          />
          <Select 
            name="Equipamento Empresa?" 
            width={250}
            id="st_equipamento_empresa_usu"
            value={state.st_equipamento_empresa_usu}
            onChange={handleChange}
          >
            <option value="S">Sim</option>
            <option value="N">Não</option>
          </Select>
          <Input 
            name="Nome do Equipamento"
            id="nm_equipamento"
            value={state.nm_equipamento}
            onChange={handleChange}
          />
        </Flex>
        

        <Flex flexDir="row" alignItems="flex-start">
          <Select 
            name="Tipo de Conexão" 
            width={250}
            id="st_rede_adm_usu"
            value={state.st_rede_adm_usu}
            onChange={handleChange}
          >
            <option value="C">Cabeada</option>
            <option value="W">WI-FI</option>
          </Select>
          <Select 
            name="Mic Funcionando?" 
            width={250}
            id="st_microfone_usu"
            value={state.st_microfone_usu}
            onChange={handleChange}
          >
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
            onClick={handleButtonClick}
            _hover={{ backgroundColor: 'purple.500' }}
          >
            SALVAR
          </Button>
        </Stack>
      </Flex>
    </Grid>
  )
}
