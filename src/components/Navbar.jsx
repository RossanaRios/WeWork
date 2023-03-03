import { Box, Flex, Button, Stack, HStack, useDisclosure, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Name from "./Name";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div id="navFix" className="App-navbar">
            <Box px={9} bg="white" width={["100%"]}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack>
                        <Name />
                    </HStack>
                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                        <HStack spacing={8} alignItems={"center"}>
                            <HStack as={"nav"} spacing={10} display={{ base: "none", md: "flex" }}>
                                <a href="#Locations">Ubicaciones</a>
                                <a href="#Work_Space">Espacio de trabajo</a>
                                <a href="#Companies">Grandes Empresas</a>
                                <a href="#Ideas">Ideas</a>
                            </HStack>
                        </HStack>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <HStack spacing={8} alignItems={"center"}>
                            <HStack as={"nav"} spacing={10} display={{ base: "none", md: "flex" }}>
                                <Stack direction={"row"} spacing={7} className="itemNav">
                                    <a href="#Home">Guardado</a>
                                    <a href="#About">Contacto</a>
                                    <a href="#About">Iniciar sesión</a>
                                    <FontAwesomeIcon icon={faUser} />
                                </Stack>
                            </HStack>
                        </HStack>
                    </Flex>
                    <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4} marginTop={180}>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <a href="#Home">
                                        {" "}
                                        <b>Ubicaciones</b>
                                    </a>
                                </Button>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <a href="#Work_Space">
                                        <b>Espacio de trabajo</b>
                                    </a>
                                </Button>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <a href="#Companies">
                                        <b>Grandes Empresas</b>
                                    </a>
                                </Button>
                                <Button
                                    onClick={isOpen ? onClose : onOpen}
                                    _hover={{
                                        textShadow: "#FC0 1px 0 10px",
                                        transform: "scale(1.2)",
                                    }}
                                >
                                    <a href="#Ideas">
                                        <b>Ideas</b>
                                    </a>
                                </Button>
                            </Stack>
                        </Box>
                    ) : null}
                </Flex>
            </Box>
        </div>
    );
}
