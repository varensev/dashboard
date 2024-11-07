import { Flex } from '@mantine/core';
import { ConfigurationMain } from '@/components/configuration_main/configuration_main';
import { Navbar_nested } from '@/components/nav_bar/navbar_nested/navbar_nested';

export function HomePage() {
  return (
    <>
      <Flex>
        <Navbar_nested />
        <ConfigurationMain />
      </Flex>
    </>
  );
}
