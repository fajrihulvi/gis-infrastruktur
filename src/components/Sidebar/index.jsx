/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  Button,
  VStack,
  Box,
  Image,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Center,
  Text,
  Icon,
  Slide,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLogin } from "react-icons/md";

import Logo from "../../assets/logo.svg";

const SidebarContent = () => (
  <VStack alignItems="flex-start">
    <Text>Data Infrastruktur</Text>
    <Text>Infrastruktur Existing</Text>
    <Text>Indikator Makro</Text>
  </VStack>
);

const SideDrawer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box position={"absolute"} zIndex={9}>
      <Flex
        backgroundColor={"white"}
        borderRadius={"8px"}
        margin={5}
        marginLeft={isSidebarOpen? "360px" : ''}
        transition='ease-in'
        transitionDuration={'0.2s'}
        zIndex={1410}
      >
        <InputGroup size={"lg"} borderRadius={"8px"} w={"360px"}>
          <InputLeftElement
            cursor={"pointer"}
            fontSize="1.3em"
            onClick={toggleSidebar}
          >
            <HamburgerIcon />
          </InputLeftElement>
          <Input placeholder="Telusuri Infrastruktur" fontSize="1em" />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Slide
        direction="left"
        in={isSidebarOpen}
        style={{ zIndex: "9", width: '320px' }}
      >
        <Box
          position={"fixed"}
          top={0}
          h={"100vh"}
          width={"320px"}
          backgroundColor={"white"}
          padding={"1.5rem"}
        >
          <Center mb="3rem">
            <Image align={"center"} src={Logo} />
          </Center>
          <SidebarContent />
          <Box position="absolute" bottom="1.5rem" left={0} w="100%" p="3rem">
            <Button
              rightIcon={<Icon as={MdOutlineLogin} />}
              colorScheme="dark"
              variant="outline"
              w="100%"
            >
              Login as admin
            </Button>
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default SideDrawer;
