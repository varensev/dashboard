import { Box, Button, Grid, Text, TextInput } from '@mantine/core';

const ConfigurationEdit = () => {
  return (
    <Box
      bg="white"
      style={{
        borderRadius: '12px',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        style={{
          padding: '32px 22px 42px 22px',
        }}
      >
        <Text size="xl"> Editer un compte </Text>
      </Box>

      <Box
        mb={58}
        style={{
          padding: '0 22px',
        }}
      >
        <Grid grow>
          <Grid.Col span={6}>
            {' '}
            <TextInput
              description=" "
              label="Adresse e-mail"
              radius={12}
              placeholder="alexander.foley@mail.com"
              ta="start"
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              description=" "
              label="Numéro de téléphone"
              radius={12}
              placeholder="(+237) 696 88 77 55"
              ta="start"
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              description=" "
              label="Nom"
              radius={12}
              placeholder="Alexander"
              ta="start"
              size="md"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              description=" "
              label="Prénom"
              radius={12}
              placeholder="Foley"
              ta="start"
              size="md"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              description=" "
              label="Date de création de compte"
              radius={12}
              placeholder="alexander.foley@mail.com"
              ta="start"
              size="md"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              description=" "
              label="Date de dernière connexion"
              radius={12}
              placeholder="alexander.foley@mail.com"
              ta="start"
              size="md"
            />
          </Grid.Col>
        </Grid>
      </Box>
      <Box style={{ borderTop: '1px solid rgb(250, 250, 250)', padding: '16px 22px' }}>
        <Button radius={12} color="#4763E4">
          Modifier
        </Button>
      </Box>
    </Box>
  );
};

export { ConfigurationEdit };
