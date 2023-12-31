'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addCliente } from '@/actions/actions';
import { Cliente } from '@/types/types';

type Props = {
  cliente?: Cliente;
};

type ErrorComponentProps = {
  error: string;
};

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md w-fit self-center mx-auto max-w-7xl mt-5">
      {error}
    </div>
  );
};

const ComposePost = ({ cliente }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const nombrecompleto = formData.get('nombrecompleto') as string;
    const edad = formData.get('edad') as string;

    if (!nombrecompleto || !edad) {
      return setError('Por favor, llene todos los campos');
    }

    setError(null);
    await addCliente(formData, cliente?.id);
    router.push('/');
  };

  return (
    <>
      {error && <ErrorComponent error={error} />}
      <form
        action={handleSubmit}
        className="flex flex-col gap-y-4 max-w-3xl mx-auto [&>div]:flex [&>div]:flex-col [&>div>input]:bg-slate-600 [&>div>input]:p-2 [&>div>select]:bg-slate-600 [&>div>select]:p-2"
      >
        <div>
          <label htmlFor="nombrecompleto">Nombre Completo:</label>
          <input
            type="text"
            name="nombrecompleto"
            id="nombrecompleto"
            placeholder="Ingrese nombre de cliente"
            defaultValue={cliente?.nombrecompleto}
          />
        </div>

        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            name="edad"
            id="edad"
            min={1}
            max={119}
            placeholder="21"
            defaultValue={cliente?.edad}
          />
        </div>

        <div>
          <label htmlFor="genero">Genero:</label>
          <select
            name="genero"
            id="genero"
            required
            defaultValue={cliente?.genero}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>

        <div>
          <label htmlFor="estado">Estado:</label>
          <select
            name="estado"
            id="estado"
            required
            defaultValue={cliente?.estado ? 'true' : 'false'}
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>

        <div>
          <label htmlFor="maneja">Maneja:</label>
          <select
            name="maneja"
            id="maneja"
            defaultValue={cliente?.maneja ? 'true' : 'false'}
          >
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="lentes">Lentes:</label>
          <select
            name="lentes"
            id="lentes"
            defaultValue={cliente?.lentes ? 'true' : 'false'}
          >
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="diabetico">Diabetico:</label>
          <select
            name="diabetico"
            id="diabetico"
            defaultValue={cliente?.diabetico ? 'true' : 'false'}
          >
            <option value="">-</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <label htmlFor="enfermedad">Enfermedad:</label>
          <input
            type="text"
            name="enfermedad"
            id="enfermedad"
            placeholder="Ingrese enfermedad"
            defaultValue={cliente?.enfermedad}
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 rounded-md px-4 py-2 w-fit self-center"
        >
          {cliente ? 'Actualizar cliente' : 'Crear cliente'}
        </button>
      </form>
    </>
  );
};

export default ComposePost;
