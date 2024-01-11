import {
    Box,
    Card,
    Stack,
    CardBody,
    Heading,
    Text,
    Flex,
  } from "@chakra-ui/react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import React from "react";
  
  const AdminDashboardCard = () => {
    return (
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
    );
  };
  
  export default AdminDashboardCard;
  