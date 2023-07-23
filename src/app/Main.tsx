import { Content } from './Content';
import { User } from './api/authenticate';

type Props = {
  user: undefined | User;
  permissions: undefined | string[];
};

export function Main({ user, permissions }: Props) {
  return (
    <main>
      <h1>Welcome</h1>
      <p>{user ? `Hello ${user.name}!` : 'Please sign in'}</p>
      <Content permissions={permissions} />
    </main>
  );
}
