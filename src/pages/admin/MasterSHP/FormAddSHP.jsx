import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

const FormAddSHP = () => {
  return (
    <Flex alignItems="flex-start" w={`100vw`}>
      <Box w={`100%`} background={`#F1F5F7`} h={`100vh`}>
        <Flex flexDirection={`column`}>
          <Breadcrumb p={`20px`}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={`#138CEC`}>
                Master Shape
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
            <Box background={`white`} m={`20px`} borderRadius={`0.5rem`}>
              <Flex flexDirection={`column`}>
                <Box p={`20px`} borderBottom={`1px`} borderColor={`#D8D8D8`}>
                  <Flex alignItems={`center`} gap={'10px'} fontSize={'20px'}>
                    <FiArrowLeft />
                    <Text fontWeight={'semibold'}>Unggah SHP</Text>
                  </Flex>
                </Box>
              </Flex>
              
            </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FormAddSHP;
