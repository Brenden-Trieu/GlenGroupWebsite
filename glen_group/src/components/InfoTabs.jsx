import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import "../styles/InfoTabs.css";

const InfoTabs = () => {
  return (
    <div id='snapshotContainer'>
      <h1 id="inforTabsTitle">Few Reasons to Choose Glen Group</h1>
      <Box className="tabs-container">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Expert Team</Tab>
            <Tab>Commitment to Quality</Tab>
            <Tab>Customized Solutions</Tab>
            <Tab>Customer Satisfaction</Tab>
            <Tab>Innovation and Adaptability</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                Our team of professionals is highly skilled, experienced, and dedicated to delivering excellence in every aspect of our business. When you choose Glen Group, you can trust that your needs will be handled by knowledgeable experts committed to your satisfaction.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Quality is at the core of everything we do. From the services we offer to the customer experience we provide; we are committed to maintaining the highest standards.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                We understand that every client is unique, with specific requirements and preferences. That’s why we offer tailored solutions designed to meet your individual needs.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                Our clients are our top priority, and their satisfaction is paramount. We go the extra mile to understand your needs, listen to your feedback, and deliver solutions that truly meet your expectations.
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                We leverage advanced technologies and industry best practices to deliver cutting-edge solutions. Our ability to adapt to evolving market trends ensures that we remain at the forefront of our industry, providing you with the latest advancements and solutions that best suit your requirements.
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default InfoTabs;
