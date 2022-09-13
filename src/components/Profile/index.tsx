import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Júnior Dering</Text>
          <Text color="gray.300" fontSize="small">
            juniordering@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        name="Júnior Dering"
        size="sm"
        src="https://github.com/orloke.png"
      />
    </Flex>
  );
}
