import React from 'react';
import { Anchor, Box, Breadcrumbs, Flex } from '@mantine/core';
import { ChevronRight } from '@/components/icons/chevron_right';
import { Alert } from '@/components/icons/alert';

const items = [
  { title: 'Utilisateurs', href: '#' },
  { title: 'Liste des utilisateurs', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index} style={{color: '#4658AC' , fontWeight: 500 , fontSize: "1rem"}}>
    {item.title}
  </Anchor>
));


const Header = () => {
  return (
    <Box  bg="white" mt={0}>
      <Flex align="center" justify="space-between" style={{padding: "28px 40px"}}>
        <Breadcrumbs separator={<ChevronRight/>} separatorMargin="md" >
          {items}
        </Breadcrumbs>
        <Alert/>
      </Flex>
    </Box>
  );
};

export { Header };