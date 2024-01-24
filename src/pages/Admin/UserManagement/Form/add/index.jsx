import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Input, InputGroup, InputRightElement, Select, Text,} from "@chakra-ui/react";
import SideDrawer from "../../../../../components/Sidebar/AdminSidebar";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useMutation, useQuery } from "react-query";
import { createAdmin } from "../../../../../services/userManagement";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../../../app/store/auth";
import { getListDinas } from "../../../../../services/masterData";

const AdminFormAddUserManagement = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [listDinas, setListDinas] = useState([])

  const methods = useForm({
    defaultValues: {
      name: "",
    },
  });

  const {data: masterDataDinas, isLoading} = useQuery({
    queryKey: ["master-data-dinas-list", {}],
    queryFn: async () => {
      const res = await getListDinas();
      return res?.data?.data
    },
    retry: 1,
  });

  const { mutate } = useMutation({
    mutationFn: async (someProps) => {
      try {
        const response = await createAdmin(someProps);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },onSuccess(res) {
      console.log(res);
      navigate('/admin/user-management')
    },onError(err){
      console.log(err);
    }
  });



  const onSubmit = async (data) => {
    try {
      const auth = getUser();

      const payload = {
        "email": data.email,
        "password": data.password,
        "created_by": auth.id,
        "updated_by": auth.id,
        "name": data.name,
        "phone": data.phone,
        "dinas_id": data.dinas,
        "nip": data.nik
      }
      mutate(payload);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    setListDinas(masterDataDinas);
  }, [masterDataDinas])

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
                    <FormProvider {...methods}>
                      <Flex flexDirection={`column`} gap={4}>
                          <Grid
                              templateRows='repeat(2, 1fr)'
                              templateColumns='repeat(2, 1fr)'
                              gap={4}
                              >
                              <GridItem >
                                  <Text mb='8px'>Nama</Text>
                                  <Controller
                                    name={'name'}
                                    control={methods.control}
                                    defaultValue=''
                                    render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                      <div className="w-full">
                                        <Input
                                            placeholder='Isi nama'
                                            size='sm'
                                            value={value} onChange={onChange} isError={invalid}
                                        />
                                        {invalid && <div className="text-xs text-error-600 mt-2">{error?.message}</div>}
                                      </div>
                                    )}
                                  />
                              </GridItem>
                              <GridItem>
                                  <Text mb='8px'>Nomor Handphone</Text>
                                    <Controller
                                      name={'phone'}
                                      control={methods.control}
                                      defaultValue=''
                                      render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                        <div className="w-full">
                                          <Input
                                              placeholder='Contoh: 08700000000'
                                              size='sm'
                                              value={value} onChange={onChange} isError={invalid}
                                          />
                                          {invalid && <div className="text-xs text-error-600 mt-2">{error?.message}</div>}
                                        </div>
                                      )}
                                    />
                              </GridItem>
                              <GridItem >
                                  <Text mb='8px'>Email</Text>
                                    <Controller
                                      name={'email'}
                                      control={methods.control}
                                      defaultValue=''
                                      render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                        <div className="w-full">
                                          <Input
                                              placeholder='Contoh: abc@gmail.com'
                                              size='sm'
                                              value={value} onChange={onChange} isError={invalid}
                                          />
                                          {invalid && <div className="text-xs text-error-600 mt-2">{error?.message}</div>}
                                        </div>
                                      )}
                                    />
                              </GridItem>
                              <GridItem>
                                  <Text mb='8px'>Password</Text>
                                    <Controller
                                      name={'password'}
                                      control={methods.control}
                                      defaultValue=''
                                      render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                        <InputGroup size='sm'>
                                          <Input
                                            pr='4.5rem'
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter password'
                                            value={value} onChange={onChange} isError={invalid}
                                          />
                                          <InputRightElement width='4.5rem'>
                                            <Button h='1.75rem' size='sm' bg={`transparent`} onClick={() => {setShowPassword(!showPassword)}}>
                                              {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                                            </Button>
                                          </InputRightElement>
                                          {invalid && <div className="text-xs text-error-600 mt-2">{error?.message}</div>}
                                        </InputGroup>
                                      )}
                                    />
                              </GridItem>
                              <GridItem>
                                  <Text mb='8px'>Dinas</Text>
                                    <Controller
                                      name={'dinas'}
                                      control={methods.control}
                                      defaultValue=''
                                      render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                        <Select placeholder='Pilih Dinas' size={`sm`} value={value} onChange={onChange} isError={invalid}>
                                            {listDinas && listDinas.map((data, index) => {
                                              return (<option key={index} value={data.id}>{data.name}</option>)
                                            })}
                                        </Select>
                                      )}
                                    />
                              </GridItem>
                              <GridItem>
                                  <Text mb='8px'>Nomor Induk Pegawai</Text>
                                  <Controller
                                    name={'nik'}
                                    control={methods.control}
                                    defaultValue=''
                                    render={({ field: { onChange, value }, fieldState: {invalid, error} }) => (
                                      <div className="w-full">
                                        <Input
                                            placeholder='Isi nomor induk pegawai'
                                            size='sm'
                                            value={value} onChange={onChange} isError={invalid}
                                        />
                                        {invalid && <div className="text-xs text-error-600 mt-2">{error?.message}</div>}
                                      </div>
                                    )}
                                  />
                              </GridItem>
                          </Grid>
                          <Flex justifyContent={`flex-end`} gap={4}>
                              <Button onClick={() => navigate(-1)} bg={`white`} color={`#3758F9`} border={`1px`}>Batal</Button>
                              <Button onClick={() => methods.handleSubmit(onSubmit)()} bg={`#3758F9`} color={`white`} >Buat user</Button>
                          </Flex>
                      </Flex>
                    </FormProvider>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
    </Flex>
  );
};

export default AdminFormAddUserManagement;
