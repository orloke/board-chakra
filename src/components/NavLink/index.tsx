import { Icon, Link as ChackraLink, Text, LinkProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import ActiveLink from '../ActiveLink';

interface NavLinkProps extends LinkProps {
  icon: IconType;
  children: string;
  href: string;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </ActiveLink>
  );
}
