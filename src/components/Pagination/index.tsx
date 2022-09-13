import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { PaginationItem } from '../PaginationItem';

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent numberOfPages={1} />
        <PaginationItem numberOfPages={2} />
        <PaginationItem numberOfPages={3} />
        <PaginationItem numberOfPages={4} />
      </HStack>
    </HStack>
  );
}
