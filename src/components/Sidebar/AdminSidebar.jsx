import { VStack, Box, Image, Center, Text } from "@chakra-ui/react";

import Logo from "../../assets/logo-alt.svg";

import adminMenu from "../../statics/adminMenu";
import SidebarItem from "../SidebarItem";

const SidebarContent = () => {
  const menuMaster = adminMenu.filter((res) => res.group === "master");
  const defaultMenu = adminMenu.filter((res) => res.group !== "master");
  return (
    <VStack alignItems="flex-start" w={`100%`}>
      {defaultMenu.map((menu, i) => (
        <SidebarItem
          icon={menu.icon}
          label={menu.label}
          url={menu.url}
          key={i}
        />
      ))}
      <Box width={"100%"}  my={2} px={"2rem"}>
        <Text color={'#8A8A8A'} fontWeight={'bold'} textTransform={'uppercase'} fontSize={'14px'}>Master</Text>
      </Box>
      {menuMaster.map((menu, i) => (
        <SidebarItem
          icon={menu.icon}
          label={menu.label}
          url={menu.url}
          key={i}
        />
      ))}
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
        <Center
          padding={`1.5rem`}
          borderBottom={`1px`}
          borderColor={`#E3E9F6`}
          marginBottom={`2rem`}
        >
          <Image align={"center"} src={Logo} />
        </Center>
        <SidebarContent />
      </Box>
    </Box>
  );
};

export default SideDrawer;
