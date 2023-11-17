import Link from 'next/link';
import { cookies } from 'next/headers';
import LogOutButton from './logout-button';
import { getProfile } from '@/actions/actions';

type Props = {};

const AuthButton = async (props: Props) => {
  const token = cookies().get('token');
  const username = await getProfile();

  return (
    <>
      {token ? (
        <div className="flex flex-row gap-x-2">
          <span className="text-white">| {username}</span>
          <LogOutButton />
        </div>
      ) : (
        <Link href="/login">Acceder</Link>
      )}
    </>
  );
};

export default AuthButton;
