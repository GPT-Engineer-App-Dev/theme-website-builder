import { Container, Box, Heading, Text, VStack, Image, Flex, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box
        bgImage="url('/path-to-your-image.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Our Stunning Visual Experience
        </Heading>
        <Text fontSize="xl">Immerse yourself in the beauty of our design</Text>
      </Box>

      {/* Key Visual Elements Section */}
      <Box py={10} px={5} bg="gray.100">
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Key Visual Elements
          </Heading>
          <Flex direction={isMobile ? "column" : "row"} spacing={10} justify="space-around" align="center">
            <Box maxW="sm" textAlign="center">
              <Image src="/path-to-element1.jpg" alt="Element 1" borderRadius="md" />
              <Text mt={4}>Element 1 Description</Text>
            </Box>
            <Box maxW="sm" textAlign="center">
              <Image src="/path-to-element2.jpg" alt="Element 2" borderRadius="md" />
              <Text mt={4}>Element 2 Description</Text>
            </Box>
            <Box maxW="sm" textAlign="center">
              <Image src="/path-to-element3.jpg" alt="Element 3" borderRadius="md" />
              <Text mt={4}>Element 3 Description</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Concept Section */}
      <Box py={10} px={5}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Our Concept
          </Heading>
          <Text fontSize="lg" textAlign="center" maxW="3xl">
            Our design is inspired by the intricate patterns and vibrant colors found in nature. We aim to create a visually
            appealing and immersive experience for our users.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;