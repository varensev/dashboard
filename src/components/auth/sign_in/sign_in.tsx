import React from 'react';
import { Paper, PasswordInput, TextInput } from '@mantine/core';
import { AuthOptions } from '@/components/auth/auth_options/auth_options';
import { AuthButton } from '@/components/auth/auth_button/auth_button';

const SignIn = () => {
  return (
    <Paper mt={40} w={520}>
      <TextInput
        description=" "
        label="Adresse e-mail"
        radius={12}
        placeholder="force@adresseemail.com"
        ta="start"
        size="md"
      />
      <TextInput
        description=" "
        label="Numéro de téléphone"
        radius={12}
        placeholder="(+237) 696 88 77 55"
        ta="start"
        size="md"
      />

      <PasswordInput
        size="md"
        description=" "
        radius={12}
        label="Mot de passe"
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

      <AuthOptions
        labelCheckbox="J'accepte"
        anchorText="les termes et les conditions d'utilisation."
        showCheckbox
        onAnchorClick={() => {}}
      />

      <AuthButton
        buttonText="S’inscrire"
        questionText="Vous possedez déjà un compte ?"
        linkText="Se connecter"
        onLinkClick={() => {}}
      />
    </Paper>
  );
};

export { SignIn };