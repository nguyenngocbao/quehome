import React from 'react';
import { Box, Fade, Text } from '@chakra-ui/react';
import HeroForm from '@/features/Home/components/HeroForm';

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: '150vh', sm: '60vh' }}
        backgroundImage={`url('./hero/main.jpg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        overflow="hidden"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.5"
          backgroundColor="blue.900"
        />
        <Box
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'flex-start', sm: 'space-between' }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box width={{ base: '100%', sm: '50%' }}>
            <Text
              fontSize={{ base: '4xl', sm: '5xl' }}
              lineHeight="shorter"
              marginBottom="1.5rem"
            >
              "Bán nhà không lo lắng - <strong>QueHome.vn</strong> hỗ trợ toàn diện
            </Text>
            <Text fontSize={{ base: 'lg', sm: '2xl' }}>
            Tại QueHome.vn, chúng tôi cam kết hỗ trợ bạn trong toàn bộ quá trình bán nhà đất một cách chuyên nghiệp và hiệu quả, mà không thu bất kỳ khoản phí nào, giúp bạn tối ưu hóa giá trị bất động sản của mình trên khắp Việt Nam.
            </Text>
          </Box>
          <Box
            width={{ base: '100%', sm: 'auto' }}
            marginTop={{ base: '2rem', sm: '0' }}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
