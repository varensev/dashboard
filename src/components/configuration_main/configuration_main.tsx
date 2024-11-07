import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Box, Button, Input,  Title } from '@mantine/core';
import { Header } from '@/components/header/header';
import { ConfigurationTable } from '@/components/configuration_main/configuration_table';
import { ConfigurationEdit } from '@/components/configuration_main/configuration_edit';

const ConfigurationMain = () => {
  return (
    <Box bg="#FAFAFA" w="100%">
      <Header />
      <Box
        style={{
          margin: '20px 40px 63px 40px',
        }}
      >
        <Title order={2} size={32} mb={12}>
          Configuration
        </Title>
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
        {/*<ConfigurationTable/>*/}
        {/*<ConfigurationEdit/>*/}
      </Box>
    </Box>
  );
};

export { ConfigurationMain };
