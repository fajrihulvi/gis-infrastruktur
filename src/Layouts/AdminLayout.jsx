import { Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";
import SideDrawer from "../components/Sidebar/AdminSidebar";
const AdminLayout = ({ children }) => {
  return (
    <Flex alignItems="flex-start" w={`100vw`}>
      <SideDrawer />
      {children}
    </Flex>
  );
};

export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
