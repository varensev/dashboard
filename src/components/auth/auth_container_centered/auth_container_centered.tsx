import React from 'react';
import { Box, Container, Text } from '@mantine/core';
import classes from '@/components/auth/auth_container_centered/auth_container_centered.module.scss';
import { Logo } from '@/components/icons/logo';

interface AuthContainerCenteredProps {
  children: React.ReactNode;
  showTitle?: boolean;
}

const AuthContainerCentered = ({ children, showTitle = false }: AuthContainerCenteredProps) => {
  return (
    <Container className={classes.center}>
      <Box ta="center">
        <Logo />
        {showTitle && (
          <Text fw={500} size="xl" mt={8}>
            Merci d'entrer vos informations de connexion
          </Text>
        )}
        {children}
      </Box>
    </Container>
  );
};

export { AuthContainerCentered };
