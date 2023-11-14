import Link from 'next/link';
import LogOutButton from './logout-button';
import { cookies } from 'next/headers';

type Props = {};

const AuthButton = (props: Props) => {
  const token = cookies().get('token');
  return <>{token ? <LogOutButton /> : <Link href="/login">Acceder</Link>}</>;
};

export default AuthButton;
