import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import adminLoginBanner from "../../../assets/admin-login-banner.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getCategoryList, login } from "../../../services/auth";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { data } = useQuery({
    queryKey: ["category-list", {}],
    queryFn: async () => {
      const res = await getCategoryList(`kecamatan_id=1&kelurahan_id=1`);
      return res?.data?.data || [];
    },
    retry: 1,
  });

  const mutation = useMutation({
    mutationFn: async (someProps) => {
      try {
        const response = await login(someProps);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }
  });

  const handleClick = () => setShow(!show)

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Flex w={`100vw`} h={`100vh`} bgGradient={`linear(180deg, #E0F2F4 0%, #FCFEFE 100%)`}>
        <Box w={`100%`} color='white' >
          <Image fit={`cover`} src={adminLoginBanner} alt='admin login banner' w={`100%`} h={`100%`}/>
        </Box>
        <Box w={`100%`} px={20} my={`auto`} >
          <Box 
          bg={`white`}
          rounded={`5%`}
          boxShadow={`0px 4px 24px 0px rgba(0, 0, 0, 0.08)`}
          p={50}>
            <Flex flexDirection={`column`} gap={`2rem`}>
              <Box>
                <Text fontSize={`1.25rem`} fontWeight={500} textAlign={`center`}>Silahkan login atau masuk terlebih dahulu</Text>
              </Box>
              <Box>
                <Flex flexDirection={`column`} gap={`0.5rem`}>
                  <Text fontSize={`0.875rem`} fontWeight={500} >User ID</Text>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='ID/Email'
                    size='md'
                  />
                </Flex>
              </Box>
              <Box>
                <Flex flexDirection={`column`} gap={`0.5rem`}>
                  <Text fontSize={`0.875rem`} fontWeight={500} >Kata Sandi</Text>
                  <InputGroup size='md'>
                    <Input
                      pr='4.5rem'
                      onChange={(e) => setPassword(e.target.value)}
                      type={show ? 'text' : 'password'}
                      placeholder='Masukkan kata sandi'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <ViewOffIcon/> : <ViewIcon/>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  </Flex>
              </Box>
              <Box>
                <Button w={`100%`} p={2} colorScheme='blue' onClick={() => {
                  mutation.mutate(
                    {
                      email,
                      password
                    }
                  );
                  // navigate('/admin/dashboard');
                }}>Masuk</Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AuthLogin;
