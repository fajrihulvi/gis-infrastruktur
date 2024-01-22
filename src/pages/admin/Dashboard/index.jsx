import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from "@chakra-ui/react";
import AdminDashboardCard from "../../../components/Card/AdminDashboardCard";
import AdminDashboardCardHeader from "../../../components/Card/AdminDashboardCardHeader";

const AdminDashboard = () => {

  return (
    <div>
      <Flex alignItems="flex-start" w={`100vw`} >
          <Box w={`100%`} background={`#F1F5F7`} h={`100vh`}>
            <Flex flexDirection={`column`} m={`20px`} gap={4}>
              <Breadcrumb p={`20px`}>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
 
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#' color={`#138CEC`}>Home</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>

              <AdminDashboardCardHeader/>

              <Box>
                <Text fontSize='2xl' pb={4}>Total Infrastruktur</Text>
                <Flex>
                    <AdminDashboardCard/>
                </Flex>
              </Box>

              <Box background={`white`} borderRadius={`0.5rem`}>
              </Box>

            </Flex>
          </Box>
      </Flex>
    </div>
  );
};

export default AdminDashboard;
