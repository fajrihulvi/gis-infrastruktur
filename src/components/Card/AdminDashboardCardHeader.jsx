import {
    Box,
    Heading,
    Text,
    Flex,
  } from "@chakra-ui/react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import React from "react";
  
  const AdminDashboardCardHeader = () => {
    return (
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
    );
  };
  
  export default AdminDashboardCardHeader;
  