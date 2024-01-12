import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import userAuthBanner from "../../../assets/background-auth-user.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const UserAuthLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  return (
    <>
      <Flex w={`100vw`} alignItems={`center`} justifyContent={`center`} h={`100vh`} bgImage={userAuthBanner}>
        <Box w={`552px`}>
          <Box 
          bg={`white`}
          rounded={`2%`}
          boxShadow={`0px 4px 24px 0px rgba(0, 0, 0, 0.08)`}
          p={50}>
            <Flex flexDirection={`column`} gap={`2rem`}>
              <Box>
                <Text fontSize={`1.25rem`} fontWeight={500} textAlign={`center`}>Bersama kembangkan Pangkal Pinang</Text>
                <Text fontSize={`0.95rem`} fontWeight={500} textAlign={`center`}>Belum punya akun? Daftar Gratis</Text>
              </Box>
              <Box>
                <Flex flexDirection={`column`} gap={`0.5rem`}>
                  <Text fontSize={`0.875rem`} fontWeight={500} >Email</Text>
                  <Input
                    value={''}
                    onChange={''}
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
                      type={show ? 'text' : 'password'}
                      placeholder='Masukkan kata sandi'
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' bg={`transparent`} onClick={() => {handleClick}}>
                        {show ? <ViewOffIcon/> : <ViewIcon/>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  </Flex>
              </Box>
              <Box>
                <Button w={`100%`} p={2} colorScheme='blue' onClick={() => {
                  navigate('/admin/dashboard');
                }}>Masuk</Button>
              </Box>
              <Box>
                  <Text fontSize={`0.875rem`} fontWeight={500} textAlign={`center`}>Lupa Kata Sandi</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default UserAuthLogin;
