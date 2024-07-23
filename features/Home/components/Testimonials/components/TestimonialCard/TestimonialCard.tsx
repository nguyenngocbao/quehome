import React from 'react';
import { TbQuote } from 'react-icons/tb';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const TestimonialCard: React.FC<{
  name: string;
  image: string;
  company: string;
  testimonial: string;
}> = ({ name, testimonial }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      marginBottom={{ base: '1rem', sm: '0' }}
    >
      <Text fontSize="2xl" color="#4299e1"> {name}</Text>
      <Text fontSize="lg" color="gray.500" marginY="1.8rem">
        {testimonial}
      </Text>
      
    </Box>
  );
};

export default TestimonialCard;
