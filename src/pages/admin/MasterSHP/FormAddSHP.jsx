import { useRef, useState } from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft, FiUpload } from "react-icons/fi";

const FormAddSHP = () => {
  const [value, setValue] = useState("");
  const refUploadFile = useRef();
  const handleChange = (event) => setValue(event.target.value);

  const handleUpload = (e) => {
    console.log("file", e.target.value);
  };

  return (
    <Flex alignItems="flex-start" w={`100vw`}>
      <Box w={`100%`} background={`#F1F5F7`} h={`100vh`}>
        <Flex flexDirection={`column`}>
          <Breadcrumb p={`20px`}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#" color={`#138CEC`}>
                Master Shape
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box background={`white`} m={`20px`} borderRadius={`0.5rem`}>
            <Flex flexDirection={`column`}>
              <Box p={`20px`} borderBottom={`1px`} borderColor={`#D8D8D8`}>
                <Flex alignItems={`center`} gap={"10px"} fontSize={"20px"}>
                  <FiArrowLeft />
                  <Text fontWeight={"semibold"}>Unggah SHP</Text>
                </Flex>
              </Box>
              <Box p="3rem">
                <Grid templateColumns="repeat(2, 1fr)" gap={5} mb={"2rem"}>
                  <GridItem w="100%">
                    <Text fontWeight={"semibold"} mb="8px">
                      Nama File SHP:
                    </Text>
                    <Input
                      value={value}
                      onChange={handleChange}
                      placeholder="Here is a sample placeholder"
                    />
                  </GridItem>
                  <GridItem w="100%">
                    <Text fontWeight={"semibold"} mb="8px">
                      Nama Kategori:
                    </Text>
                    <Select placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </GridItem>
                </Grid>
                <Box mb={"2rem"}>
                  <Text fontWeight={"semibold"} mb="8px">
                    File SHP:
                  </Text>

                  <Input
                    type="file"
                    ref={refUploadFile}
                    hidden
                    multiple={false}
                    onChange={handleUpload}
                  />
                  <Box
                    p={6}
                    border={"1px"}
                    borderColor={"#DFE4EA"}
                    textAlign={"center"}
                    color={"#9CA3AF"}
                    cursor={"pointer"}
                    borderRadius={"6px"}
                    onClick={() => refUploadFile.current.click()}
                  >
                    <Box w="30px" margin={"0 auto 10px"}>
                      <FiUpload fontSize={"24px"} w="30px" />
                    </Box>
                    <Text>Unggah file.shp atau drop file disini</Text>
                  </Box>
                </Box>
                <Grid templateColumns="repeat(2, 1fr)" gap={5} mb={"2rem"}>
                  <GridItem w="100%">
                    <Text fontWeight={"semibold"} mb="8px">
                      List Data SHP
                    </Text>
                    <Box border={"1px"} borderColor={"#DFE4EA"} borderRadius={'6px'} padding={'1rem'}>
                      askdkasd
                      asjdkljasl
                    </Box>
                  </GridItem>
                  <GridItem w="100%">
                    <Text fontWeight={"semibold"} mb="8px">
                      Nama Kategori:
                    </Text>
                    <Select placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </GridItem>
                </Grid>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FormAddSHP;
