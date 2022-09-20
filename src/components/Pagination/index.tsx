import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { PaginationItem } from '../PaginationItem';

interface PropsPagination {
  currentPage: number;
  total: number | undefined;
  onPageChange: () => void;
}

const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(item => item > 0);
};

const siblingsCount = 1;

export function Pagination({
  currentPage = 1,
  total = 10,
  onPageChange,
}: PropsPagination) {
  const lastPage = Math.ceil(total / 10);
  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPage =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];
  console.log(nextPage);

  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem numberOfPages={1} />
            {currentPage > 2 + siblingsCount && (
              <Text w="8" align="center" h="8" bg="gray.900">
                ...
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map(item => (
            <PaginationItem key={item} numberOfPages={item} />
          ))}
        <PaginationItem isCurrent numberOfPages={currentPage} />
        {nextPage.length > 0 &&
          nextPage.map(item => (
            <PaginationItem key={item} numberOfPages={item} />
          ))}
        {currentPage + 1 < lastPage && (
          <>
            {currentPage < lastPage - siblingsCount - 1 && (
              <Text w="8" align="center" h="8" bg="gray.900">
                ...
              </Text>
            )}
            <PaginationItem numberOfPages={lastPage} />
          </>
        )}
      </HStack>
    </HStack>
  );
}
