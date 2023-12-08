/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  Button,
  VStack,
  Box,
  Image,
  Flex,
  InputGroup,
  Center,
  Text,
  Icon,
  Slide,
  Select,
} from "@chakra-ui/react";

import { MdOutlineLogin, MdSend } from "react-icons/md";

import Logo from "../../assets/logo.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const sideBarItem = [
  {
    label: "Infrastruktur Existing",
    child: [
      {
        label: "Jalan",
      },
      {
        label: "List Item",
      },
    ],
  },
  {
    label: "Indikator Makro",
    child: [
      {
        label: "Kemiskinan",
      },
      {
        label: "Pengangguran",
      },
      {
        label: "PDRB",
      },
      {
        label: "Stunting",
      },
    ],
  },
];

const SidebarContent = () => (
  <VStack alignItems="flex-start">
    <Text color={"#666666"}>Regional </Text>
    <InputGroup
      size={"lg"}
      borderRadius={"8px"}
      backgroundColor={"white"}
      mb={2}
    >
      <Select placeholder="Pilih Kecamatan" cursor={"pointer"}>
        <option value="option1">Kecamatan Gerunggang</option>
        <option value="option2">Kecamatan Pangkalbalam</option>
        <option value="option3">Kecamatan Rangkui</option>
      </Select>
    </InputGroup>
    <InputGroup size={"lg"} borderRadius={"8px"} backgroundColor={"white"}>
      <Select placeholder="Pilih Kelurahan" cursor={"pointer"}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </InputGroup>
    {sideBarItem.map((item, index) => {
      return (
        <Box color={"#666666"} mb={2} key={`menu-items-${index}`}>
          <Text>{item.label}</Text>
          {item.child.map((subItem, subIdx) => (
            <Flex ml={3} key={subIdx}>
              <Text>{subItem.label}</Text>
            </Flex>
          ))}
        </Box>
      );
    })}
  </VStack>
);

const SideDrawer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* <Flex
        backgroundColor={"transparent"}
        borderRadius={"8px"}
        margin={5}
        marginLeft={isSidebarOpen ? "360px" : ""}
        transition="ease-in"
        transitionDuration={"0.2s"}
        zIndex={1410}
        gap={4}
        alignItems={"flex-end"}
        width={"100%"}
      >
        <InputGroup
          size={"lg"}
          borderRadius={"8px"}
          w={"360px"}
          backgroundColor={"white"}
        >
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
      </Flex> */}

      <InputGroup
        size={"lg"}
        borderRadius={"8px"}
        w={"200px"}
        backgroundColor={"white"}
        position={"absolute"}
        right={"1rem"}
        top={"1rem"}
        zIndex={9}
      >
        <Button
          rightIcon={<Icon as={MdSend} />}
          backgroundColor={`#0093DD`}
          textColor={`white`}
          w="100%"
        >
          Beri Usulan
        </Button>
      </InputGroup>
      <Box position={"absolute"} zIndex={9}>
        <Slide
          direction="left"
          in={isSidebarOpen}
          style={{ zIndex: "9", width: "320px" }}
        >
          <Box
            position={"fixed"}
            top={0}
            h={"100vh"}
            width={"320px"}
            backgroundColor={"white"}
            padding={"1.5rem"}
          >
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              w={"40px"}
              h={"56px"}
              backgroundColor={"white"}
              position={"absolute"}
              right={"-2.4rem"}
              top={"50%"}
              cursor={'pointer'}
              onClick={toggleSidebar}
              color={'#848484'}
            >
              {
                isSidebarOpen  ? <ChevronLeftIcon w={7} h={7} /> : <ChevronRightIcon w={7} h={7} />
              }
              
            </Flex>
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
    </>
  );
};

export default SideDrawer;
