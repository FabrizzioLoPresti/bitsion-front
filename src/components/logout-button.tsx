'use client';

import { useRouter } from 'next/navigation';
import { deleteSession } from '@/actions/actions';

type Props = {};

const LogOutButton = (props: Props) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await deleteSession();
        router.refresh();
      }}
    >
      Salir
    </button>
  );
};

export default LogOutButton;
