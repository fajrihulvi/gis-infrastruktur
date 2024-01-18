import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Input, Select, Text,} from "@chakra-ui/react";
import SideDrawer from "../../../../../components/Sidebar/AdminSidebar";

const AdminFormEditInfrastructureCategory = () => {

  return (
    <Flex alignItems="flex-start" w={`100vw`} >
        <SideDrawer/>
        <Box w={`100%`} background={`#F1F5F7`} h={`100vh`}>
          <Flex flexDirection={`column`}>
            <Breadcrumb p={`20px`}>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Ketegori Infrastruktur</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#' color={`#138CEC`}>Edit Kategori Infrastruktur</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box background={`white`} m={`20px`} borderRadius={`0.5rem`}>
              <Flex flexDirection={`column`}>
                <Box p={`20px`} borderBottom={`1px`} borderColor={`#D8D8D8`}>
                  <Flex alignItems={`center`}>
                    <Text fontSize='2xl'>Edit Kategori Infrastruktur</Text>
                  </Flex>
                </Box>
                <Box p={`20px`}>
                    <Flex flexDirection={`column`} gap={4}>
                        <Grid
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(2, 1fr)'
                            gap={4}
                            >
                            <GridItem >
                                <Text mb='8px'>Nama Kategori</Text>
                                <Input
                                    placeholder='Isi nama'
                                    size='sm'
                                />
                            </GridItem>
                            <GridItem>
                                <Text mb='8px'>Jenis Kategori</Text>
                                <Select placeholder='Pilih Kategori' size={`sm`}>
                                    <option value='option1'>Existing</option>
                                    <option value='option2'>Dinas 2</option>
                                    <option value='option3'>Dinas 3</option>
                                </Select>
                            </GridItem>
                        </Grid>
                        <Flex justifyContent={`flex-end`} gap={4}>
                            <Button bg={`white`} color={`#3758F9`} border={`1px`}>Batal</Button>
                            <Button bg={`#3758F9`} color={`white`} >Edit kategori</Button>
                        </Flex>
                    </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
    </Flex>
  );
};

export default AdminFormEditInfrastructureCategory;
