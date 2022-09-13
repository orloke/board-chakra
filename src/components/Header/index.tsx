import { Flex } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { NotificationsNav } from '../NotificationsNav';
import { Profile } from '../Profile';
import { SearchBox } from '../SearchBox';

interface HeaderProps {
  isWideVersion?: boolean;
}

export default function Header({ isWideVersion }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth="1480"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
