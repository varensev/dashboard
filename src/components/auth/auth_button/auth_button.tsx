import React from 'react';
import { Anchor, Button, Text } from '@mantine/core';
import { IconArrowRight } from '@/components/auth/icons/icon_arrow_right';

interface AuthButtonProps {
  buttonText: string;
  questionText?: string;
  linkText: string;
  onLinkClick: () => void;
  showIcon?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  buttonText,
  questionText,
  linkText,
  onLinkClick,
  showIcon = false,
}) => {
  return (
    <>
      <Button
        fullWidth
        radius={12}
        rightSection={showIcon && <IconArrowRight />}
        color="#4763E4"
        mt={16}
        mb={8}
      >
        {buttonText}
      </Button>

      {questionText && (
        <Text fw={400} component="span" pr={8}>
          {questionText}
        </Text>
      )}

      <Anchor
        component="button"
        size="sm"
        style={{ color: '#5C73DB' }}
        fw={400}
        underline="always"
        onClick={onLinkClick}
      >
        {linkText}
      </Anchor>
    </>
  );
};

export { AuthButton };
