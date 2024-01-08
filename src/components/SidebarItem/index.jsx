import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Box, Flex, Text } from "@chakra-ui/react";

const SidebarItem = ({ url, label, icon }) => {
  const navigate = useNavigate();
  return (
      <Box
        onClick={() => navigate(url)}
        as="button"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        border="none"
        px="8px"
        rounded={`none`}
        fontSize="14px"
        fontWeight="semibold"
        color="#4b4f56"
        padding={`0.75rem 1.5rem 0.75rem 2rem`}
        textAlign={`left`}
        _hover={{
          bg: "#F5FBFF",
          color: `#0C5A98`,
          borderLeft: `4px`,
        }}
        _active={{
          bg: "#F5FBFF",
          color: `#0C5A98`,
          borderLeft: `4px`,
        }}
        width={`100%`}
      >
        <Flex alignItems={`center`} gap={4}>
          <Box fontSize="24px">{icon}</Box>
          <Text>{label}</Text>
        </Flex>
      </Box>
  );
};

export default SidebarItem;

SidebarItem.propTypes = {
  icon: PropTypes.any,
  url: PropTypes.string,
  label: PropTypes.string,
};
