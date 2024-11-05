import { Paper, PasswordInput, TextInput } from '@mantine/core';
import { AuthButton } from '@/components/auth/auth_button/auth_button';
import { AuthOptions } from '@/components/auth/auth_options/auth_options';

const Login = () => {
  return (
    <Paper mt={40} w={520}>
      <TextInput
        description=" "
        label="Email"
        radius={12}
        placeholder="johndoe@gmail.com"
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

      <AuthOptions
        anchorText="Mot de passe oublié ?"
        onAnchorClick={() => {}}
        anchorColorBlack
        justifyCenter
      />

      <AuthButton
        buttonText="Se connecter"
        questionText=" Vous n’avez pas de compte ?"
        linkText="Créer un compte"
        onLinkClick={() => {}}
        showIcon
      />
    </Paper>
  );
};

export { Login };
