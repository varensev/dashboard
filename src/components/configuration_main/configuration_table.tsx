import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Box, Button, Group, Input, Pagination, Text } from '@mantine/core';
import { TableList } from '@/components/table/table';

const ConfigurationTable = () => {
  return (
    <>
      <Input
        placeholder="Vous cherchez quel utilisateur ..."
        size="lg"
        mb={16}
        radius={12}
        leftSection={<IconSearch color="black" size={16} />}
      />
      <Button radius={12} mb={16} color="#4763E4" rightSection={<IconPlus size={14} />}>
        Ajouter un utilisateur
      </Button>
      <Box
        bg="white"
        style={{
          borderRadius: '12px',
          height: 'calc(100vh - 343px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box style={{ flex: 1, padding: '32px 32px 0 32px' }}>
          <TableList />
        </Box>

        <Group
          justify="space-between"
          style={{ borderTop: '1px solid rgb(250, 250, 250)', padding: '19px 32px' }}
        >
          <Text style={{ color: '#A1A1AA', fontWeight: 400, fontSize: '1rem' }}>
            100 utilisateurs
          </Text>
          <Pagination total={10} />
        </Group>
      </Box>
    </>
  );
};

export { ConfigurationTable };
