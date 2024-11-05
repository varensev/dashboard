import React from 'react';
import { Anchor, Checkbox, Group } from '@mantine/core';

interface AuthOptionsProps {
  showCheckbox?: boolean;
  anchorColorBlack?: boolean;
  justifyCenter?: boolean;
  anchorText: string;
  onAnchorClick: () => void;
  labelCheckbox?: string;
}

const AuthOptions: React.FC<AuthOptionsProps> = ({
  showCheckbox = false,
  anchorColorBlack = false,
  justifyCenter = false,
  anchorText,
  labelCheckbox,
  onAnchorClick,
}) => {
  return (
    <Group mt={16} justify={justifyCenter ? 'center' : 'left'}>
      {showCheckbox && <Checkbox label={labelCheckbox} color="indigo" size="sm" />}
      <Anchor
        component="button"
        size="sm"
        style={{ color: anchorColorBlack ? '#000000' : '#5C73DB' }}
        fw={400}
        underline="never"
        onClick={onAnchorClick}
      >
        {anchorText}
      </Anchor>
    </Group>
  );
};

export { AuthOptions };
