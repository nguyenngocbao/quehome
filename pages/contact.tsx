import ContactForm from '@/features/common/modules/ContactForm';
import TextContentBox from '@/features/common/modules/TextContentBox';
import DefaultLayout from '@/features/Layout/DefaultLayout';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  return (
    <DefaultLayout
      title="Liên hệ"
      description='Liên hệ chúng tôi ngay khi bạn có bất động sản cần bán'
    >
      <Box
        backgroundColor="#f7f8f9"
        paddingY="3rem"
        paddingX={{ base: '1rem', md: '3rem' }}
      >
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap="5"
          maxWidth="1280px"
          margin="0 auto"
        >
          <GridItem colSpan={{ base: 6, md: 4 }}>
            <TextContentBox title="Liên hệ">
              <ContactForm />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, md: 2 }}>
            <TextContentBox title="Thông tin liên hệ:">
              <Text
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
                marginBottom="1rem"
              >
                (+84)5555555
              </Text>
              {/* <Text fontWeight="light" color="gray.600" fontSize="1rem">
                Abraham Lincoln <br />
                Public Relations Manager
                <br />
                774 NE 84th St Miami, FL 33879
              </Text> */}
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Contact;
