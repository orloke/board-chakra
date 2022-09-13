import { Icon, Link, Text, LinkProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface PropsNavLink extends LinkProps {
  icon: IconType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: PropsNavLink) {
  return (
    <Link href="/signIn" display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
