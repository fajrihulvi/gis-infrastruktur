/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';

import {
  VStack,
  Box,
  Image,
  Flex,
  Center,
  Text,
} from "@chakra-ui/react";

import { MdSend } from "react-icons/md";

import Logo from "../../assets/logo.svg";
import BuildingSvg from "../../assets/buildings.svg";

import DocumentTextSvg from "../../assets/document-text.svg";
import HomeSvg from "../../assets/home-2.svg";
import ProfileSvg from "../../assets/profile-2user.svg";

import { ChevronLeftIcon, ChevronRightIcon, HamburgerIcon } from "@chakra-ui/icons";

const SidebarContent = () => {
  const navigate = useNavigate();
  const [selectedKecamatan , setSelectedKecamatan] = useState(null);
  const [selectedKelurahan , setSelectedKelurahan] = useState(null);
  
  return (
    <VStack alignItems="flex-start" w={`100%`}>
      <Box
        as='button'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='none'
        px='8px'
        rounded={`none`}
        fontSize='14px'
        fontWeight='semibold'
        color='#4b4f56'
        padding={`0.75rem 1.5rem 0.75rem 2rem`}
        textAlign={`left`}
        _hover={{ 
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        _active={{
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        width={`100%`}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={() => {
          navigate('/admin/dashboard');
        }}
      >
        <Flex alignItems={`center`} gap={4}>
          <Image align={"center"} src={HomeSvg} color='#4b4f56'/>
          <Text>
            Dashboard
          </Text>
        </Flex>
      </Box>
      <Box
        as='button'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='none'
        px='8px'
        rounded={`none`}
        fontSize='14px'
        fontWeight='semibold'
        color='#4b4f56'
        padding={`0.75rem 1.5rem 0.75rem 2rem`}
        textAlign={`left`}
        _hover={{ 
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        _active={{
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        width={`100%`}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={() => {
          navigate('/admin/user-management');
        }}
      >
        <Flex alignItems={`center`} gap={4}>
          <Image align={"center"} src={DocumentTextSvg} color='#4b4f56'/>
          <Text>
            User Management
          </Text>
        </Flex>
      </Box>
      <Box
        as='button'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='none'
        px='8px'
        rounded={`none`}
        fontSize='14px'
        fontWeight='semibold'
        color='#4b4f56'
        padding={`0.75rem 1.5rem 0.75rem 2rem`}
        textAlign={`left`}
        _hover={{ 
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        _active={{
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        width={`100%`}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={() => {
          navigate('/admin/infrastructure-category');
        }}
      >
        <Flex alignItems={`center`} gap={4}>
          <Image align={"center"} src={BuildingSvg} color='#4b4f56'/>
          <Text>
            Kategori Infrastruktur
          </Text>
        </Flex>
      </Box>
      <Box
        as='button'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='none'
        px='8px'
        rounded={`none`}
        fontSize='14px'
        fontWeight='semibold'
        color='#4b4f56'
        padding={`0.75rem 1.5rem 0.75rem 2rem`}
        textAlign={`left`}
        _hover={{ 
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        _active={{
          bg: '#F5FBFF' ,
          color: `#0C5A98`,
          borderLeft:`4px`
        }}
        width={`100%`}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        onClick={() => {
          navigate('/admin/activity-logs');
        }}
      >
        <Flex alignItems={`center`} gap={4}>
          <Image align={"center"} src={ProfileSvg} color='#4b4f56'/>
          <Text>
            Log Activity
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

const SideDrawer = () => {

  return (
    <Box zIndex={9}>
      <Box
        h={"100vh"}
        width={"320px"}
        backgroundColor={"white"}
        borderRight={`1px`}
        borderColor={`#E3E9F6`}
      >
        <Center padding={`1.5rem`} borderBottom={`1px`} borderColor={`#E3E9F6`} marginBottom={`2rem`}>
          <Image align={"center"} src={Logo} />
        </Center>
        <SidebarContent/>
      </Box>
    </Box>
  );
};

export default SideDrawer;
