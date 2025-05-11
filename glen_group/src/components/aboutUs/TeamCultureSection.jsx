import { Box, Flex, Heading, Text, List, ListItem, Link } from "@chakra-ui/react";
import "../../styles/TeamCultureSection.css";

const TeamCultureSection = () => {
  return (
    <Box className="team-culture-section" py={{ base: 12, md: 20 }} px={{ base: 4, md: 12 }}>
      <Flex direction={{ base: "column", md: "row" }} gap={12} maxW="7xl" mx="auto">
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="white">
            Our People
          </Heading>
          <Text color="white" mb={4}>
            All employees are encouraged to contribute their unique perspectives and ideas in an atmosphere that encourages teamwork and mutual support at Glen Group of Companies. Every time a customer interacts with our business, our employees go above and beyond to ensure their satisfaction.
          </Text>
          <Text color="white" mb={4}>
            The culture of the organization promotes a good work-life balance and continuous professional development, creating an environment where individuals can flourish. In this perfect setting that values professional and personal growth, ideas flourish in an atmosphere that promotes collaboration and fun.
          </Text>
          <Text color="white">
            Explore our Glen Culture and delve deeper on how Glen Group is committed to fostering relationships with our clients, employees, and community as a whole.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TeamCultureSection;
