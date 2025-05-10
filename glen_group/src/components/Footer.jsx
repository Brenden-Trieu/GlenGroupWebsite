import { Box, Flex, Text, Link, Stack, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-r, gray.900, gray.800, gray.900)"
      color="white"
      py={10}
      px={{ base: 4, md: 10 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Image
          src="https://glengroup.ca/wp-content/uploads/2023/11/GG-With-TaglineW.webp"
          alt="The Glen Group"
          maxH="60px"
          objectFit="contain"
        />
        <Stack direction="row" spacing={6}>
          <Link href="/">Home</Link>
          <Link href="/About">About Us</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
