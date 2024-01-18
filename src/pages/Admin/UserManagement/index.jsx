import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer,  Text, useDisclosure,} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ChevronDownIcon, DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../../../components/Sidebar/AdminSidebar";


const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Name"
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: "Email"
  }),
  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: "Phone"
  }),
  columnHelper.accessor("departement", {
    cell: (info) => info.getValue(),
    header: "Departement"
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    header: "Role",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    header: "Action"
  }),
];


const AdminUserManagement = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const data = [
    {
      name: "Ahmad Karim",
      email: "Papin@gmail.com",
      phone: "08788833300",
      departement: "Perencanaan",
      role: "Admin",
      action: (
        <>
          <Flex gap={2}>
              <Box
                as='button'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                rounded={`50px`}
                fontSize='14px'
                fontWeight='semibold'
                color='#00549B'
                padding={`0.5rem 1rem`}
                textAlign={`left`}
                _hover={{ 
                  bg: '#F5FBFF' ,
                  color: `#0C5A98`,
                }}
                _active={{
                  bg: '#F5FBFF' ,
                  color: `#0C5A98`,
                }}
                width={`100%`}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
              >
                <Flex alignItems={`center`} gap={4}>
                  <EditIcon/>
                  <Text>
                    Edit
                  </Text>
                </Flex>
              </Box>
              <Box
                as='button'
                lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                border='1px'
                rounded={`50px`}
                fontSize='14px'
                fontWeight='semibold'
                color='#E84040'
                padding={`0.5rem 1rem`}
                textAlign={`left`}
                _hover={{ 
                  bg: '#F5FBFF' ,
                  color: `#0C5A98`,
                }}
                _active={{
                  bg: '#F5FBFF' ,
                  color: `#0C5A98`,
                }}
                width={`100%`}
                _focus={{
                  boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                }}
                onClick={onOpen}
              >
                <Flex alignItems={`center`} gap={4}>
                  <DeleteIcon/>
                  <Text>
                    Hapus
                  </Text>
                </Flex>
              </Box>
          </Flex>
        </>
      ),
    },
  ];

  return (
    <>
      <Flex alignItems="flex-start" w={`100vw`} >
          <SideDrawer/>
          <Box w={`100%`} background={`#F1F5F7`} h={`100vh`}>
            <Flex flexDirection={`column`}>
              <Breadcrumb p={`20px`}>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href='#' color={`#138CEC`}>User Management</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box background={`white`} m={`20px`} borderRadius={`0.5rem`}>
                <Flex flexDirection={`column`}>
                  <Box p={`20px`} borderBottom={`1px`} borderColor={`#D8D8D8`}>
                    <Flex alignItems={`center`}>
                      <Text fontSize='2xl'>Daftar User Admin</Text>
                      <Spacer/>
                      <Button color={`white`} leftIcon={<MdAdd />} backgroundColor={`#349DEF`} variant='solid' onClick={() => {
                          navigate('/admin/user-management/add');
                        }}>
                        Tambah User Admin
                      </Button>
                    </Flex>
                  </Box>
                  <Box p={`20px`}>
                    <Flex alignItems={`center`} w={`100%`} gap={4}>
                      <InputGroup w={`18.75rem`}>
                        <InputLeftElement pointerEvents='none'>
                          <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Cari User' />
                      </InputGroup>
                      <Menu >
                        <MenuButton p={`0.625rem`} background={`white`} border={`1px`} borderColor={`#D8D8D8`} as={Button} leftIcon={<CalendarIcon/>} rightIcon={<ChevronDownIcon />}>
                          Pilih Departement
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Perencanaan</MenuItem>
                        </MenuList>
                      </Menu>
                      <Menu>
                        <MenuButton p={`0.625rem`} background={`white`} border={`1px`} borderColor={`#D8D8D8`} as={Button} leftIcon={<CalendarIcon/>} rightIcon={<ChevronDownIcon />}>
                          Pilih Role
                        </MenuButton>
                        <MenuList>
                          <MenuItem>Admin</MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </Box>
                </Flex>
                <DataTable columns={columns} data={data} />
                <Flex alignItems={`center`}>
                  <Box p={4}>
                    <Flex gap={2} alignItems={`center`}>
                      <Text>Menampilkan</Text>
                      <Select placeholder='10'>
                        <option value='option2'>25</option>
                        <option value='option3'>50</option>
                      </Select>
                      <Text>Item</Text>
                    </Flex>
                  </Box>
                  <Spacer/>
                  <Box p={4}>
                    <Flex gap={2} alignItems={`center`}>
                      <IconButton aria-label='Search database' icon={<ArrowLeftIcon />} />
                      <Button>
                        1
                      </Button>
                      <IconButton aria-label='Search database' icon={<ArrowRightIcon />} />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yakin hapus user admin?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Box bg={`#F8F9F9`} p={4}>
            <Grid
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(5, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1} textAlign={`center`} m={`1rem auto`}><CalendarIcon/></GridItem>
              <GridItem colSpan={4}>Ahmad Karim</GridItem>
              <GridItem colSpan={4}>Bappeda</GridItem>
            </Grid>
          </Box>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button>Hapus</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminUserManagement;
