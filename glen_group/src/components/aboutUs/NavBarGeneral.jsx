import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import "../../styles/NavBarGeneral.css";

const NavBarGeneral = ({ heroRef }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" }
    );

    if (heroRef?.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef?.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef]);

  return (
    <Box
      as="nav"
      id="nav-general"
      className={isSticky ? "nav-general-sticky" : "nav-general-default"}
      position={isSticky ? "fixed" : "relative"}
      top={isSticky ? 0 : "auto"}
      width="100%"
      bg="#6bb544"
      boxShadow={isSticky ? "md" : "sm"}
      zIndex="sticky"
      transition="all 0.3s ease"
      py={3}
      height="70px"
    >
      <Flex justify="center" id="nav-content">
        <Text as={Link} to="/" fontWeight="bold" color="white" _hover={{ color: "blue.100" }}>
          Home
        </Text>
        <Text as={Link} to="/about" fontWeight="bold" color="white" _hover={{ color: "blue.100" }} ml={6}>
          About Us
        </Text>
      </Flex>
    </Box>
  );
};

export default NavBarGeneral;
