import { Icon, Link as ChackraLink, Text, LinkProps } from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface PropsNavLink extends LinkProps {
  icon: IconType;
  children: string;
  href: string;
}

export function NavLink({ icon, href, children, ...rest }: PropsNavLink) {
  return (
    <Link href={href} passHref>
      <ChackraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChackraLink>
    </Link>
  );
}
