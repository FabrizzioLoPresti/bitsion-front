'use client';

import { deleteCliente } from '@/actions/actions';

type Props = {
  id: number;
};

const DeleteButton = ({ id }: Props) => {
  const handleDelete = async () => {
    if (confirm('¿Estás seguro de eliminar este cliente?')) {
      const res = await deleteCliente(id);
      console.log( res )
      if (res) {
        alert(res);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-600 rounded-md px-4 py-2">
      Eliminar
    </button>
  );
};

export default DeleteButton;
