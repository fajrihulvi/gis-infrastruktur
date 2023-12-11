/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

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

const SidebarContent = ({listRegion, setFilterRegion}) => {
  const [selectedKecamatan , setSelectedKecamatan] = useState(null);
  const [selectedKelurahan , setSelectedKelurahan] = useState(null);
  
  useEffect(() => {
    selectedKecamatan ? setFilterRegion({kecamatan: selectedKecamatan}) : setFilterRegion(null)
  },[selectedKecamatan])

  useEffect(() => {
    selectedKelurahan ? setFilterRegion({kecamatan: selectedKecamatan, kelurahan: selectedKelurahan}) : selectedKecamatan ? setFilterRegion({kecamatan: selectedKecamatan}) : setFilterRegion(null)
  },[selectedKelurahan])

  return (
    <VStack alignItems="flex-start">
      <Text color={"#666666"}>Regional </Text>
      <InputGroup
        size={"lg"}
        borderRadius={"8px"}
        backgroundColor={"white"}
        mb={2}
      >
        <Select placeholder="Pilih Kecamatan" cursor={"pointer"} onChange={(e) => {setSelectedKecamatan(e.target.value)}}>
          {listRegion ? Object.keys(listRegion).map((data, index) => (
            <option key={index} value={data}>{data}</option>
          )) : ''}
        </Select>
      </InputGroup>
      <InputGroup size={"lg"} borderRadius={"8px"} backgroundColor={"white"}>
        <Select disabled={!selectedKecamatan} placeholder="Pilih Kelurahan" cursor={"pointer"} onChange={(e) => {setSelectedKelurahan(e.target.value)}}>
          {listRegion ? Object.keys(listRegion).map((data, index) => {
            if(data == selectedKecamatan) {
              {return listRegion[data].map((item, indexItem) => (
                <option key={indexItem} value={item}>{item}</option>
              ))}
            }
          }) : ''}
        </Select>
      </InputGroup>
    </VStack>
  );
};

const SideDrawer = ({listRegion, setFilterRegion}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
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
            <SidebarContent listRegion={listRegion} setFilterRegion={setFilterRegion}/>
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
