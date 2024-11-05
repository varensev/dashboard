import { AuthContainerCentered } from '@/components/auth/auth_container_centered/auth_container_centered';
import { ResetPassword } from '@/components/auth/reset-password/reset-password';


export function AuthPage() {
  return (
    <AuthContainerCentered showTitle>
      <ResetPassword confirm />
    </AuthContainerCentered>
  );
}
