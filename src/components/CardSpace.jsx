import React from "react";
import { Card, CardBody, Text, Stack, Box} from '@chakra-ui/react'

export function CardSpace(props){
    return(
        <Card border='1px' borderColor='gray.200'>
            <CardBody>
                <Stack direction={['row']}>
                    <Box w='50%'>
                        <img src={props.img} alt="work"></img>
                    </Box>
                    <Box w='100%'  paddingTop={4}>
                        <Text as='b'>{props.title}</Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}