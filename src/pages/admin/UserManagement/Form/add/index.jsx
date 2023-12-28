import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Input, Select, Text,} from "@chakra-ui/react";
import SideDrawer from "../../../../../components/Sidebar/AdminSideBar";

const AdminFormAddUserManagement = () => {

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
                <BreadcrumbLink href='#'>User Management</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#' color={`#138CEC`}>New User</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box background={`white`} m={`20px`} borderRadius={`0.5rem`}>
              <Flex flexDirection={`column`}>
                <Box p={`20px`} borderBottom={`1px`} borderColor={`#D8D8D8`}>
                  <Flex alignItems={`center`}>
                    <Text fontSize='2xl'>Buat User admin</Text>
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
                                <Text mb='8px'>Nama</Text>
                                <Input
                                    placeholder='Isi nama'
                                    size='sm'
                                />
                            </GridItem>
                            <GridItem>
                                <Text mb='8px'>Nomor Handphone</Text>
                                <Input
                                    placeholder='Contoh: 08700000000'
                                    size='sm'
                                />
                            </GridItem>
                            <GridItem >
                                <Text mb='8px'>Email</Text>
                                <Input
                                    placeholder='Contoh: abc@gmail.com'
                                    size='sm'
                                />
                            </GridItem>
                            <GridItem>
                                <Text mb='8px'>Dinas</Text>
                                <Select placeholder='Pilih Dinas' size={`sm`}>
                                    <option value='option1'>Dinas 1</option>
                                    <option value='option2'>Dinas 2</option>
                                    <option value='option3'>Dinas 3</option>
                                </Select>
                            </GridItem>
                            <GridItem colSpan={2}>
                                <Text mb='8px'>Nomor Induk Pegawai</Text>
                                <Input
                                    placeholder='Isi nomor induk pegawai'
                                    size='sm'
                                />
                            </GridItem>
                        </Grid>
                        <Flex justifyContent={`flex-end`} gap={4}>
                            <Button bg={`white`} color={`#3758F9`} border={`1px`}>Batal</Button>
                            <Button bg={`#3758F9`} color={`white`} >Buat user</Button>
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

export default AdminFormAddUserManagement;
