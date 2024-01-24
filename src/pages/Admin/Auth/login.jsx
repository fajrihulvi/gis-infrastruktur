import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import adminLoginBanner from "../../../assets/admin-login-banner.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { login } from "../../../services/auth";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { saveAuth } from "../../../app/store/auth";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { mutate } = useMutation({
    mutationFn: async (someProps) => {
      try {
        const response = await login(someProps);
        return response;
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    },onSuccess(res) {
      saveAuth(res?.data);
      navigate('/admin/dashboard')
    },onError(err){
      console.log(err);
    }
  });

  const handleClick = () => setShow(!show)

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
                  mutate(
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
