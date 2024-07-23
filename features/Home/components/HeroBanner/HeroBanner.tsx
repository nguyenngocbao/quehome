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
              Giải Pháp Mua, Bán Nhà Hiệu Quả với <strong>QueHome.VN</strong>
            </Text>
            <Text fontSize={{ base: 'lg', sm: '2xl' }}>
            Bạn là người bán đang tìm kiếm người mua hoặc nhà đầu tư phù hợp mà không gặp bất kỳ khó khăn nào? <strong>QueHome.VN</strong> chính là giải pháp dành cho bạn. Chúng tôi loại bỏ hoa hồng, phí tiếp thị và các chi phí quảng cáo liên quan khác, đảm bảo bạn tiết kiệm chi phí trong khi tìm được đối tác lý tưởng cho nhu cầu của mình.
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
