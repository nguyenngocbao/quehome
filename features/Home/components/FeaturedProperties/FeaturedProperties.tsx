import React from 'react';
import PropertySlider from '@/features/Home/components/FeaturedProperties/components/PropertySlider';
import { Box, Text } from '@chakra-ui/react';

const FeaturedProperties: React.FC<{ featuredProperties: Array<any> }> = ({
  featuredProperties,
}) => {
  return (
    <Box backgroundColor="blue.50">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="gray.600"
        paddingY={{ base: '3rem', sm: '6rem' }}
      >
        <Text
          fontSize={{ base: '4xl', sm: '5xl' }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Về chúng tôi
        </Text>
        <Text
          fontSize="2xl"
          fontWeight="light"
          marginTop="1rem"
          marginBottom="3rem"
          paddingX="2rem"
          textAlign="center"
        >
          Nơi giúp việc bán bất động sản của bạn dễ dàng hơn
        </Text>
        <div className="relative w-full pt-[56.25%] mb-[82px] 2xl:mb-[140px]">
      <iframe
        className="absolute top-0 left-0 w-full h-full shadow-md"
        src={`https://www.youtube.com/embed/GZQSTxy_oBk?si=fEWKGU_WMJjisfUh&start=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
        {/* <PropertySlider featuredProperties={featuredProperties} /> */}
      </Box>
    </Box>
  );
};

export default FeaturedProperties;
