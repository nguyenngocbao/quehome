import { agents } from '@/features/Home/components/MeetTheTeam/agentConst';
import AgentCard from '@/features/Home/components/MeetTheTeam/components/AgentCard';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const MeeTheTeam = () => {
  return (
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
        ĐỘI NGŨ CỦA CHÚNG TÔI
      </Text>
      <Text
        fontSize="2xl"
        fontWeight="light"
        marginTop="1rem"
        marginBottom="3rem"
        paddingX="2rem"
        textAlign="center"
      >
        Những chuyên gia bất động sản khi bạn cần giúp đỡ
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        gap="1.5rem"
      >
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </Flex>
    </Box>
  );
};

export default MeeTheTeam;
