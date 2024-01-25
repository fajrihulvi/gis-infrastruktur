import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Grid, GridItem, Input, Select, Text,} from "@chakra-ui/react";
import SideDrawer from "../../../../../components/Sidebar/AdminSidebar";
import { updateCategory } from "../../../../../services/categoryInfrastructure";
import { useMutation } from "react-query";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser } from "../../../../../app/store/auth";

const AdminFormEditInfrastructureCategory = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      id: location.state.id ?? '',
      name: location.state.name ?? '',
      type: location.state.type ?? '',
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (someProps) => {
      try {
        const response = await updateCategory(someProps);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },onSuccess(res) {
      console.log(res);
      navigate('/admin/infrastructure-category')
    },onError(err){
      console.log(err);
    }
  });



  const onSubmit = async (data) => {
    try {
      const auth = getUser();

      const payload = {
        "id": location.state.id,
        "created_by": auth.id,
        "updated_by": auth.id,
        "name": data.name,
        "type": data.type,
      }
      mutate(payload);
    } catch (e) {
      console.log(e)
    }
  }

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
                    <FormProvider {...methods}>
                    <Flex flexDirection={`column`} gap={4}>
                        <Grid
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(2, 1fr)'
                            gap={4}
                            >
                            <GridItem >
                                <Text mb='8px'>Nama Kategori</Text>
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
                                <Text mb='8px'>Jenis Kategori</Text>
                                  <Controller
                                    name={'type'}
                                    control={methods.control}
                                    defaultValue=''
                                    render={({ field: { onChange, value }, fieldState: {invalid} }) => (
                                      <Select placeholder='Jenis Kategori' size={`sm`} value={value} onChange={onChange} isError={invalid}>
                                        <option value='1'>Jalan</option>
                                      </Select>
                                    )}
                                  />
                            </GridItem>
                        </Grid>
                        <Flex justifyContent={`flex-end`} gap={4}>
                            <Button onClick={() => navigate(-1)} bg={`white`} color={`#3758F9`} border={`1px`}>Batal</Button>
                            <Button onClick={() => methods.handleSubmit(onSubmit)()} bg={`#3758F9`} color={`white`} >Buat kategori</Button>
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

export default AdminFormEditInfrastructureCategory;
