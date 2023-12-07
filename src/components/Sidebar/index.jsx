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
  Select,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { MdOutlineLogin , MdSend} from "react-icons/md";

import Logo from "../../assets/logo.svg";

const sideBarItem = [
  {
    label: 'Data Infrastruktur',
    child: [
      {
        label: 'Administrasi'
      },
      {
        label: 'Drainase'
      }
    ]
  },{
    label: 'Infrastruktur Existing',
    child: [
      {
        label: 'Jalan'
      },
      {
        label: 'List Item'
      }
    ]
  },{
    label: 'Indikator Makro',
    child: [
      {
        label: 'Kemiskinan'
      },
      {
        label: 'Pengangguran'
      },
      {
        label: 'PDRB'
      },
      {
        label: 'Stunting'
      }
    ]
  }
]

const SidebarContent = () => (
  <VStack alignItems="flex-start">
    {
      sideBarItem.map((item, index) => {
        return (
          <div key={`menu-items-${index}`}>
            <Text>{item.label}</Text>
          </div>
        )
      })
    }
  </VStack>
);

const SideDrawer = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Box position={"absolute"} zIndex={9}>
      <Flex
        backgroundColor={"transparent"}
        borderRadius={"8px"}
        margin={5}
        marginLeft={isSidebarOpen? "360px" : ''}
        transition='ease-in'
        transitionDuration={'0.2s'}
        zIndex={1410}
        gap={4}
      >
        <InputGroup size={"lg"} borderRadius={"8px"} w={"360px"}
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
        <InputGroup size={"lg"} borderRadius={"8px"} w={"200px"}
        backgroundColor={"white"}
        >
          <Select placeholder='Pilih Kecamatan'>
              <option value='option1'>Kecamatan Gerunggang</option>
              <option value='option2'>Kecamatan Pangkalbalam</option>
              <option value='option3'>Kecamatan Rangkui</option>
            </Select>
        </InputGroup>
        <InputGroup size={"lg"} borderRadius={"8px"} w={"200px"}
        backgroundColor={"white"}
        >
          <Select placeholder='Pilih Kelurahan'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
        </InputGroup>
        <InputGroup size={"lg"} borderRadius={"8px"} w={"200px"}
        backgroundColor={"white"}
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
