import { UnstyledButton, Group, Avatar, Text} from '@mantine/core';
import classes from './user_button.module.scss';

export function User_button() {
  return (
    <UnstyledButton className={classes.user} >
      <Group >
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>


      </Group>
    </UnstyledButton>
  );
}
