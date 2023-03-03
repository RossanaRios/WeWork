import React from "react";
import { Box, 
  Stack,
  Button,
  Text,
  Heading,
  Select} from '@chakra-ui/react';
  import { CustonCarousel } from "../components/CustonCarousel";
export function Home(){
  return (
    <div id="Locations" className="App-container">
      <Stack direction={['column', 'row']}  h="100%" align='stretch'>
        <Box w='50%'>
          <Heading as='h3' size='lg' className="heading">
            <p>Revoluciona tu espacio de trabajo</p>
          </Heading>
          <Text fontSize='md' paddingTop={5} className="description">
            Independientemente si diriges una empresa emergente o compañia consolidada, descubre espacios de trabajo en los que podrás generar un impacto positivo.
          </Text>
          <Select placeholder='Encuentra espacio de trabajo en' className="App-select">
            <option value='option1'>Bogota</option>
            <option value='option2'>Medellin</option>
            <option value='option3'>Cartagena</option>
          </Select>
          <Button size="md" w="100%" borderRadius='3px' className='App-bottom'>Comenzar</Button>
        </Box>
        <Box w='100%'>
          <CustonCarousel />
        </Box>
      </Stack>
    </div>
  );
};
