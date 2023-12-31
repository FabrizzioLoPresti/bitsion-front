import Link from 'next/link';
import AuthButton from './auth-button';

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <nav className="sticky top-0 bg-slate-900">
      <div className="mx-auto max-w-7xl flex flex-row items-center justify-between py-6">
        <Link href="/">Inicio</Link>

        <div className="flex flex-row items-center gap-x-6">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/create">Nuevo Cliente</Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
