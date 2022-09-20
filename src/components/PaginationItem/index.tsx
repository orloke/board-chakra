import { Button } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface PaginationItemProps {
  numberOfPages: number;
  isCurrent?: boolean;
  onPageChange: Dispatch<SetStateAction<number>>;
}

export function PaginationItem({
  numberOfPages,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {numberOfPages}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
        cursor: 'default',
      }}
      onClick={() => onPageChange(numberOfPages)}
    >
      {numberOfPages}
    </Button>
  );
}
