import { Box, Button, Flex, Image, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import adminLoginBanner from "../../../assets/admin-login-banner.png";
import { useState } from "react";

const AuthLogin = () => {

  const [show, setShow] = useState(false)

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
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  </Flex>
              </Box>
              <Box>
                <Button w={`100%`} p={2} colorScheme='blue'>Masuk</Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default AuthLogin;
