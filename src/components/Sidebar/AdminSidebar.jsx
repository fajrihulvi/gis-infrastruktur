import {
  VStack,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";

import Logo from "../../assets/logo-alt.svg";

import adminMenu from '../../statics/adminMenu';
import SidebarItem from "../SidebarItem";


const SidebarContent = () => {
  
  return (
    <VStack alignItems="flex-start" w={`100%`}>
      {
        adminMenu.map((menu, i) => (
          <SidebarItem icon={menu.icon} label={menu.label} url={menu.url} key={i} />
        ))
      }
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
