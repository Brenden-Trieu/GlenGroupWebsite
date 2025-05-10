import React, { useRef, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import CarouselCard from "./carouselCard"; // Import the card component

const Carousel = () => {
  const scrollRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const speed = 0.8;
  const frameRef = useRef();

  const cards = [
    {
      id: 1,
      title: "Glen Traffic",
      description: "Glen Traffic is a distinguished Traffic Management Company in Canada. Renowned for our expertise in ensuring safe traffic flow in diverse environments, we lead the industry with an unwavering commitment to safety, convenience, and efficient organization. Our foundation is built upon four key pillars that set us apart as a frontrunner in the field.",
      image: "https://glengroup.ca/wp-content/uploads/2023/06/Untitled-design.png",
      buttonText: "Explore",
      link: "https://glentraffic.ca/",
    },
    {
      id: 2,
      title: "Glen TSI Towing",
      description: "Empowering Businesses, Ensuring Safety",
      image: "https://glengroup.ca/wp-content/uploads/2024/03/4-1.webp",
      buttonText: "Contact Us",
      link: "https://glengroup.ca/contact-us/",
    },
    {
      id: 3,
      title: "Karas Securities",
      description: "Karas Security is one of the successful business verticals of Glen Group of Companies. From last 7 years, our specialty lies in providing exceptional security services. With an unwavering commitment to safety first, we prioritize the well-being and protection of our clients above all else. Our adept team provides bespoke security solutions, catering to clients’ distinct needs with expert security guards for exceptional protection.. We are fully committed to surpassing expectations and fostering long-term partnerships based on trust and reliability.",
      image: "https://www.karasgroup.ca/wp-content/uploads/2023/11/Its-not-just-walls-that-keep-intruders-out-its-Karas-Security.-1.webp",
      buttonText: "Explore",
      link: "https://www.karasgroup.ca/",
    },
    {
      id: 4,
      title: "Glen Recruiters",
      description: "Glen Recruiters is your trusted partner for connecting you with the most qualified and exceptional candidates in Canada. We understand the critical role that top talent plays in driving your business forward, and we are dedicated to revolutionizing your recruitment experience.",
      image: "https://glenrecruiters.ca/wp-content/uploads/2023/11/Glen-Recruiters-Bridging-Talent-Uniting-Success-1024x1024.webp",
      buttonText: "Explore",
      link: "https://glenrecruiters.ca/",
    },
    {
      id: 5,
      title: "Glen Homes",
      description: "Glen Homes, a construction company in Surrey and a subsidiary of Glengroup, brings over 5 years of dedicated service. Specializing in meticulous renovations and diverse construction projects, we bring modern designs to life.",
      image: "https://glenhomes.ca/wp-content/uploads/2023/12/Untitled-design-2023-12-02T141631.928.webp",
      buttonText: "Explore",
      link: "https://glenhomes.ca/",
    },
    {
      id: 6,
      title: "Glen Training School",
      description: "Glen Training School holds a position, as a leader in providing training for TCP (Traffic Control Person). Lct (Lane Closure Technician). Their primary goal is to promote community safety and effective management of infrastructure.",
      image: "https://glentrainingschool.ca/wp-content/uploads/2023/12/Glen-traffic-website-Banners-1200-%C3%97-780px-4-600x390-1.webp",
      buttonText: "Explore",
      link: "https://glentrainingschool.ca/",
    },
    {
      id: 7,
      title: "Glen Real Estate Group",
      description: "At Glen Real Estate Group, our commitment goes beyond merely selling properties; we strive to tailor the selling experience to meet your unique needs and preferences. “Let’s Find The Right Selling Option For You” encapsulates our dedication to understanding your goals, timeline, and expectations.",
      image: "https://glenrealestategroup.ca/wp-content/uploads/2022/11/h2.jpg",
      buttonText: "Explore",
      link: "https://glenrealestategroup.ca/",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const animate = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollLeft += direction * speed;

      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        setDirection(-1);
      } else if (scrollContainer.scrollLeft <= 0) {
        setDirection(1);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [direction]);

  return (
    <Box
      minW="350px"
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      overflow="hidden"
      p={4}
      flexShrink={0}
    >
      <Flex
        ref={scrollRef}
        direction="row"
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
        gap={4}
        p={2}
        w="100%"
        css={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // hide scrollbar on Firefox
        }}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none", // hide scrollbar on Chrome/Safari
          },
        }}
      >
        {cards.map((card) => (
          <Box as="div" display="inline-block" key={card.id}>
            <CarouselCard {...card} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
