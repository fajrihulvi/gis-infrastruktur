import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  EditIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../../components/Table";
import { useNavigate } from "react-router-dom";
import { FiChevronDown, FiFileText, FiPlusCircle, FiPrinter, FiUpload } from "react-icons/fi";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Nama File",
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: "Tanggal Dibuat",
  }),
  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: "Size FIle",
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    header: "Action",
  }),
];

const AdminMasterSHP = () => {
  const navigate = useNavigate();

  const data = [
    {
      name: "Ahmad Karim",
      email: "12/5/2023",
      phone: "5 MB",
      action: (
        <>
          <Flex gap={2}>
            <Box
              as="button"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="1px"
              rounded={`50px`}
              fontSize="14px"
              fontWeight="semibold"
              color="#00549B"
              padding={`0.5rem 1rem`}
              textAlign={`left`}
              _hover={{
                bg: "#F5FBFF",
                color: `#0C5A98`,
              }}
              _active={{
                bg: "#F5FBFF",
                color: `#0C5A98`,
              }}
              width={`100%`}
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              <Flex alignItems={`center`} gap={4}>
                <EditIcon />
                <Text>Edit</Text>
              </Flex>
            </Box>
          </Flex>
        </>
      ),
    },
  ];

  return (
    <>
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
                  <Flex alignItems={`center`} gap={'1rem'}>
                    <Text fontWeight={'semibold'} fontSize="2xl">Daftar File Infrastruktur</Text>
                    <Spacer />
                    <Button
                      leftIcon={<FiPrinter />}
                      colorScheme="teal"
                      variant="outline"
                    >
                      Print
                    </Button>
                    <Button
                      rightIcon={<FiChevronDown />}
                      leftIcon={<FiUpload />}
                      colorScheme="teal"
                      variant="outline"
                    >
                      Export
                    </Button>
                    <Button
                      color={`white`}
                      leftIcon={<FiPlusCircle />}
                      backgroundColor={`#349DEF`}
                      variant="solid"
                      onClick={() => {
                        navigate("/admin/master-shp/add");
                      }}
                    >
                      Tambah File
                    </Button>
                  </Flex>
                </Box>
                <Box p={`20px`}>
                  <Flex alignItems={`center`} w={`100%`} gap={4}>
                    <InputGroup w={`18.75rem`}>
                      <InputLeftElement pointerEvents="none">
                        <Search2Icon color="gray.300" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        placeholder="Cari berdasarkan nama file"
                      />
                    </InputGroup>
                    <Input w={`10rem`} type="date" />
                    <Menu>
                      <MenuButton
                        p={`0.625rem`}
                        background={`white`}
                        border={`1px`}
                        borderColor={`#D8D8D8`}
                        as={Button}
                        leftIcon={<FiFileText />}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Size File
                      </MenuButton>
                      <MenuList>
                        <MenuItem>1 MB</MenuItem>
                        <MenuItem>1 MB</MenuItem>
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
                    <Select placeholder="10">
                      <option value="option2">25</option>
                      <option value="option3">50</option>
                    </Select>
                    <Text>Item</Text>
                  </Flex>
                </Box>
                <Spacer />
                <Box p={4}>
                  <Flex gap={2} alignItems={`center`}>
                    <IconButton
                      aria-label="Search database"
                      icon={<ArrowLeftIcon />}
                    />
                    <Button>1</Button>
                    <IconButton
                      aria-label="Search database"
                      icon={<ArrowRightIcon />}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AdminMasterSHP;
