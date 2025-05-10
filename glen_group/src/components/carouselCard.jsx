import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Link as ChakraLink,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const CarouselCard = ({ title, description, image, buttonText, link }) => {
  return (
    <Box
      minW="400px"
      maxW="550px"
      h="100%"
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      overflow="hidden"
      p={4}
      flexShrink={0}
      display="flex"
      flexDirection="column"
    >
      <Flex direction="column" h="100%">
        <Image
          src={image}
          borderRadius="md"
          w="100%"
          h="150px"
          objectFit="cover"
          mb={3}
        />
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          {title}
        </Text>
        <Text
          fontSize="sm"
          color="gray.600"
          mb={3}
          whiteSpace="normal"
          overflow="visible"
          textOverflow="unset"
        >
          {description}
        </Text>
        <Spacer />
        <ChakraLink href={link} isExternal w="full" mt={3}>
          <Button size="sm" colorScheme="teal" w="full">
            {buttonText}
          </Button>
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default CarouselCard;
