import { Badge, Button, Group, Table } from '@mantine/core';

const elements = [
  {
    name: 'Alexander',
    surname: 'Foley',
    email: 'alexander.foley@gmail.com',
    phone: '+237 6 99 88 77 66',
    status: 'Validé',
    id: 1,
  },
  {
    name: 'Alexander',
    surname: 'Foley',
    email: 'alexander.foley@gmail.com',
    phone: '+237 6 99 88 77 66',
    status: 'Validé',
    id: 2,
  },
  {
    name: 'Alexander',
    surname: 'Foley',
    email: 'alexander.foley@gmail.com',
    phone: '+237 6 99 88 77 66',
    status: 'Validé',
    id: 3,
  },
  {
    name: 'Alexander',
    surname: 'Foley',
    email: 'alexander.foley@gmail.com',
    phone: '+237 6 99 88 77 66',
    status: 'Validé',
    id: 4,
  },
];

// TODO: справить стили
const TableList = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.id} style={{ borderBottom: '1px solid rgb(250, 250, 250)', padding: '20px 0'}}   >

        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.surname}</Table.Td>
        <Table.Td>{element.email}</Table.Td>
        <Table.Td>{element.phone}</Table.Td>
        <Table.Td>
          <Badge color="blue">{element.status}</Badge>
        </Table.Td>
      <Table.Td>
        <Group>
          <Button
            radius={8}
            variant="outline"
            size="xs"
            style={{ border: '1px solid #5C73DB', color: '#5C73DB' }}
          >
            Suspendre
          </Button>
          <Button radius={8} size="xs" style={{ background: '#DC2626', color: '#ffffff' }}>
            Supprimer
          </Button>
        </Group>
      </Table.Td>


    </Table.Tr>
  ));
  return (
    <Table  verticalSpacing="md" withRowBorders={false}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Noms</Table.Th>
          <Table.Th>Prénoms</Table.Th>
          <Table.Th>E-mails</Table.Th>
          <Table.Th>Téléphone</Table.Th>
          <Table.Th>Statut</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export { TableList };
