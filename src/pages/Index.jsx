import { Box, Flex, VStack, HStack, IconButton, Text, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaHome, FaChartBar } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex as="nav" bg={bg} p={4} justifyContent="space-between" alignItems="center" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold">
        Dashboard
      </Text>
      <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <VStack as="aside" bg="gray.700" color="white" w="200px" p={4} spacing={4} alignItems="flex-start" height="100vh">
      <Link href="#" display="flex" alignItems="center">
        <FaHome />
        <Text ml={2}>Home</Text>
      </Link>
      <Link href="#" display="flex" alignItems="center">
        <FaChartBar />
        <Text ml={2}>Analytics</Text>
      </Link>
    </VStack>
  );
};

const Content = () => {
  return (
    <Box as="main" p={4} flex="1">
      <Text fontSize="2xl">Welcome to the Dashboard</Text>
      <Text mt={4}>This is where your main content will go.</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Flex direction="column" height="100vh">
      <Navbar />
      <Flex flex="1">
        <Sidebar />
        <Content />
      </Flex>
    </Flex>
  );
};

export default Index;
