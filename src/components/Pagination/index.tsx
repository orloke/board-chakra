import { Box, HStack, Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { PaginationItem } from '../PaginationItem';

interface PropsPagination {
  currentPage: number;
  total: number | undefined;
  onPageChange: Dispatch<SetStateAction<number>>;
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

  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} numberOfPages={1} />
            {currentPage > 2 + siblingsCount && (
              <Text w="8" align="center" h="8" bg="gray.900">
                ...
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map(item => (
            <PaginationItem
              onPageChange={onPageChange}
              key={item}
              numberOfPages={item}
            />
          ))}
        <PaginationItem
          onPageChange={onPageChange}
          isCurrent
          numberOfPages={currentPage}
        />
        {nextPage.length > 0 &&
          nextPage.map(item => (
            <PaginationItem
              onPageChange={onPageChange}
              key={item}
              numberOfPages={item}
            />
          ))}
        {currentPage + 1 < lastPage && (
          <>
            {currentPage < lastPage - siblingsCount - 1 && (
              <Text w="8" align="center" h="8" bg="gray.900">
                ...
              </Text>
            )}
            <PaginationItem
              onPageChange={onPageChange}
              numberOfPages={lastPage}
            />
          </>
        )}
      </HStack>
    </HStack>
  );
}
