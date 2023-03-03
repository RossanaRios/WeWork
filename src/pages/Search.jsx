import React from "react";
import { Box, Stack, Text} from "@chakra-ui/react";
import { CardSpace } from "../components/CardSpace";
export function Search(){
  const array = [{id: 1,
      title: "Espacio de trabajo 1", 
      img:"https://ctfassets.imgix.net/vh7r69kgcki3/3j9aqbBpEAl7GYPX1CbAIo/6ee0f13d82cc6e1ad53b5affb75d30ab/Hot_Desks_274x274.png?"},{
      id: 2,
      title: "Espacio de trabajo 2",
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?"},{
      id: 3,
      title: "Espacio de trabajo 3",
      img: "https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?",
      },{id: 4,
        title: "Espacio de trabajo 4", 
        img:"https://ctfassets.imgix.net/vh7r69kgcki3/35qhYMr0wIJvd2o5MAuSHd/c45139bad5decb1cf980735f9f632a05/Meeting_Small_274x274.png?"}];
  return (
    <div id="About" className="App-container">
      <Stack direction={['column', 'row']} w="100%" paddingTop={10}>
        <Box w='100%'>
          <Text fontSize='2xl' textAlign='left'>Buscar por espacio de trabajo</Text>
        </Box>
        <Box w='100%'>
          <Text fontSize='md' textAlign='right' color="blue"> 
            <a href="#Locations">Ver todas las soluciones</a>
          </Text>
        </Box>
      </Stack>
      <Box paddingTop={6} marginBottom={4}>
      <Stack direction={['column', 'row']} spacing='24px'>
        {array.map((x) => (
          <Box w='100%' key={x.id}>
            <CardSpace title={x.title} img={x.img}/>
          </Box>
        ))}
      </Stack>
      </Box>
    </div>
  );
};