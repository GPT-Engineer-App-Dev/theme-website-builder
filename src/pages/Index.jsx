import { Container, Box, VStack, Heading, Text, Image, Flex } from "@chakra-ui/react";

const Index = () => {
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
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">
            Welcome to Our Stunning Visual Experience
          </Heading>
          <Text fontSize="xl">Immerse yourself in the beauty of our design</Text>
        </VStack>
      </Box>

      {/* Key Visual Elements Section */}
      <Box py={10} px={5} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Key Visual Elements
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" align="center">
          <Box maxW="sm" mb={{ base: 5, md: 0 }}>
            <Image src="/path-to-element1.jpg" alt="Element 1" borderRadius="md" />
            <Text mt={2} fontSize="lg" textAlign="center">
              Element 1 Description
            </Text>
          </Box>
          <Box maxW="sm" mb={{ base: 5, md: 0 }}>
            <Image src="/path-to-element2.jpg" alt="Element 2" borderRadius="md" />
            <Text mt={2} fontSize="lg" textAlign="center">
              Element 2 Description
            </Text>
          </Box>
          <Box maxW="sm">
            <Image src="/path-to-element3.jpg" alt="Element 3" borderRadius="md" />
            <Text mt={2} fontSize="lg" textAlign="center">
              Element 3 Description
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Concept Section */}
      <Box py={10} px={5}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Concept
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="3xl" mx="auto">
          Our design is inspired by the intricate details and vibrant colors of the image. We aim to create a visually appealing and immersive experience for our users.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;