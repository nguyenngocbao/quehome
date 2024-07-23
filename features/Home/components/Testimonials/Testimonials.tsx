import TestimonialCard from '@/features/Home/components/Testimonials/components/TestimonialCard';
import { testimonials } from '@/features/Home/components/Testimonials/testomonialConst';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Testimonials = () => {
  return (
    <Box backgroundColor="blue.50">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{ base: '3rem', sm: '6rem' }}
      >
        <Text
          fontSize={{ base: '4xl', sm: '5xl' }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Tại Sao Nên Chọn QueHome.VN?
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          
        </Text>
        <SimpleGrid
          columns={4}
          minChildWidth="200px"
          gap={{ base: '0.5rem', sm: '2.5rem' }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial}/>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
