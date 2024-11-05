import { Box, Flex } from '@mantine/core';
import { Navbar_nested } from '@/components/nav_bar/navbar_nested/navbar_nested';

export function HomePage() {
  return (
    <>
      <Flex>
        <Navbar_nested />
        <Box bg="#FAFAFA" w="100%">
          cc
        </Box>
      </Flex>
    </>
  );
}
