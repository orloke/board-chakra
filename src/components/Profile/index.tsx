import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import React from 'react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Júnior Dering</Text>
        <Text color="gray.300" fontSize="small">
          juniordering@hotmail.com
        </Text>
      </Box>
      <Avatar
        name="Júnior Dering"
        size="sm"
        src="https://github.com/orloke.png"
      />
    </Flex>
  );
}
