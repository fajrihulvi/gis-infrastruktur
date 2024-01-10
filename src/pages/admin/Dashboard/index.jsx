import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardBody, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

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

              <Box background={`white`} borderRadius={`0.5rem`}>
                <Flex p={4} gap={8}>
                  <Box>
                    <Box p={4} backgroundColor={`#25AAE1`} borderRadius={4} color={`white`}>
                      {React.createElement(HiOutlineBuildingOffice2, {size: '24px'})}
                    </Box>
                  </Box>
                  <Box w={`100%`}>
                    <Flex flexDirection={`column`}>
                      <Box><Heading size={`md`}>25</Heading></Box>
                      <Box>
                        <Text fontWeight={500} lineHeight={`1.25rem`} fontSize={`0.875rem`} color={`#667085`}>
                          Total Usulan Masyarakat yang baru masuk hari ini
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight={500} lineHeight={`1.25rem`} fontSize={`0.875rem`} color={`#0156D5`}>
                          Cek Selengkapnya
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box>
                    <Box p={4} backgroundColor={`#25AAE1`} borderRadius={4} color={`white`}>
                      {React.createElement(HiOutlineBuildingOffice2, {size: '24px'})}
                    </Box>
                  </Box>
                </Flex>
              </Box>

              <Box>
                <Text fontSize='2xl' pb={4}>Total Infrastruktur</Text>
                <Flex>
                    <Card
                      borderLeft={`4px`}
                      borderColor={`#0C5A98`}
                      direction={{ base: 'column', sm: 'row' }}
                      >
                      <Stack>
                        <CardBody>
                          <Heading size='md'>100</Heading>
                          <Text fontWeight={500} lineHeight={`1.25rem`} fontSize={`0.875rem`} color={`#667085`}>
                            Infrastruktur Existing
                          </Text>
                          <Text fontWeight={500} lineHeight={`1.25rem`} fontSize={`0.875rem`} color={`#0156D5`}>
                            Cek Selengkapnya
                          </Text>
                        </CardBody>
                      </Stack>
                      <Flex fontSize="24px" alignItems={`center`} m={`0 auto`} p={4}> 
                        <Box p={4} backgroundColor={`#25AAE1`} borderRadius={4} color={`white`}>
                          {React.createElement(HiOutlineBuildingOffice2, {size: '24px'})}
                        </Box>
                        </Flex>
                    </Card>
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
