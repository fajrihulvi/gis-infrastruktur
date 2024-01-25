import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spacer,  Text, useDisclosure,} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../../../components/Sidebar/AdminSidebar";
import { deleteAdmin, getList } from "../../../services/userManagement";
import { useMutation, useQuery } from "react-query";
import { useEffect, useState } from "react";
import { getListDinas, getListRoles } from "../../../services/masterData";
import { getUser } from "../../../app/store/auth";

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
  const auth = getUser();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [paramsTable, setParamsTable] = useState({});
  const [valueTable, setValueTable] = useState([]);
  const [listDinas, setListDinas] = useState([])
  const [listRoles, setListRoles] = useState([])
  const [selectedAdmin, setSelectedAdmin] = useState(null)

  const {data: masterDataDinas} = useQuery({
    queryKey: ["master-data-dinas-list", {}],
    queryFn: async () => {
      const res = await getListDinas();
      return res?.data?.data
    },
    retry: 1,
  });

  const {data: masterDataRoles} = useQuery({
    queryKey: ["master-data-roles-list", {}],
    queryFn: async () => {
      const res = await getListRoles();
      return res?.data?.data?.data
    },
    retry: 1,
  });

  const {data: userList} = useQuery({
    queryKey: ["user-management-list", paramsTable],
    queryFn: async () => {
      const res = await getList(paramsTable);
      const data = [];
      if (res) {
        setParamsTable({...paramsTable, page : res?.data?.data?.meta?.current_page})
        if (res?.data?.data?.data.length > 0) {
          res?.data?.data?.data.map((value) => {
            data.push(
              {
                name: value?.name,
                email: value?.email,
                phone: value?.phone,
                departement: value?.dinas?.name,
                role: value?.role?.name,
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
                          onClick={() => {navigate(`/admin/user-management/edit/${value.id}`, { state:{ 
                            id:value.id,
                            email: value.email,
                            password: value.password,
                            name: value.name,
                            phone: value.phone,
                            dinas_id: value.dinas.id,
                            nip: value.nip
                          }});}}
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
                          onClick={()=>{
                            setSelectedAdmin(
                              {
                                id: value?.id,
                                email: value?.email,
                                password: value?.password,
                                name: value?.name,
                                phone: value?.phone,
                                dinas_id: value?.dinas?.id,
                                dinas: value?.dinas?.name,
                                role: value?.role?.name,
                                nip: value?.nip,
                                updated_by: auth.id,
                              }
                            )
                            onOpen()
                          }}
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
              }
            )
          })
        }
      }
      return data
    },
    retry: 1,
  });

  const { mutate } = useMutation({
    mutationFn: async (someProps) => {
      try {
        const response = await deleteAdmin(someProps);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },onSuccess(res) {
      console.log(res)
      onClose()
      setParamsTable({})
      navigate('/admin/user-management')
    },onError(err){
      console.log(err);
    }
  });

  useEffect(() => {
    setValueTable(userList)
  }, [userList])

  useEffect(() => {
    setListDinas(masterDataDinas);
  }, [masterDataDinas])

  useEffect(() => {
    setListRoles(masterDataRoles);
  }, [masterDataRoles])

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
                      <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                          <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input type='text' placeholder='Cari User' onChange={(e) => {
                          setParamsTable({...paramsTable, name : e.target.value})
                        }} />
                      </InputGroup>
                      <Select placeholder='Pilih Dinas' onChange={(e)=> {setParamsTable({...paramsTable, department_id : e.target.value})}} >
                          {listDinas && listDinas.map((data, index) => {
                            return (<option key={index} value={data.id}>{data.name}</option>)
                          })}
                      </Select>
                      <Select placeholder='Pilih Role' onChange={(e)=> {setParamsTable({...paramsTable, role_id : e.target.value})}} >
                          {listRoles && listRoles.map((data, index) => {
                            return (<option key={index} value={data.id}>{data.name}</option>)
                          })}
                      </Select>
                    </Flex>
                  </Box>
                </Flex>
                <DataTable columns={columns} data={valueTable} />
                <Flex alignItems={`center`}>
                  <Box p={4}>
                    <Flex gap={2} alignItems={`center`}>
                      <Text>Menampilkan</Text>
                      <Select placeholder='10' onChange={(e) => {
                        setParamsTable({...paramsTable, limit: e.target.value})
                      }}>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
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
              <GridItem colSpan={4}>{selectedAdmin?.name}</GridItem>
              <GridItem colSpan={4}>{selectedAdmin?.dinas}</GridItem>
            </Grid>
          </Box>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Batal
            </Button>
            <Button onClick={()=>{mutate(selectedAdmin)}}>Hapus</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminUserManagement;
