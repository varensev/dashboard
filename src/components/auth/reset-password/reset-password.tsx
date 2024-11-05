import React from 'react';
import { Paper, PasswordInput, TextInput } from '@mantine/core';
import { AuthButton } from '@/components/auth/auth_button/auth_button';

const ResetPassword = ({ confirm = false }: { confirm?: boolean }) => {
  return (
    <Paper mt={40} w={520}>
      {!confirm ? (
        <TextInput
          description=" "
          label="Adresse e-mail"
          radius={12}
          placeholder="force@adresseemail.com"
          ta="start"
          size="md"
        />
      ) : (
        <>
          <PasswordInput
            size="md"
            description=" "
            radius={12}
            label="Nouveau mot de passe"
            placeholder="********************"
            mt={12}
            ta="start"
          />
          <PasswordInput
            size="md"
            description=" "
            radius={12}
            label="Confirmer votre mot de passe"
            placeholder="********************"
            mt={12}
            ta="start"
          />
        </>
      )}
      <AuthButton
        buttonText="Se connecter"
        linkText="Retour à la page connexion"
        onLinkClick={() => {}}
      />
    </Paper>
  );
};

export { ResetPassword };
