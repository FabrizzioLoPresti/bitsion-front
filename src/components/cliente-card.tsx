import Link from 'next/link'
import { Cliente } from '@/types/types'
import DeleteButton from './delete-button'

type Props = {
  cliente: Cliente
}

const ClienteCard = ({cliente}: Props) => {
  return (
    <div className='py-10 border-b border-b-gray-500'>
      <h3 className='text-xl'>{cliente.nombrecompleto}</h3>
      <p>Edad: {cliente.edad}</p>
      <p>Genero: {cliente.genero}</p>
      <p>Estado: {cliente.estado ? 'Activo' : 'Inactivo'}</p>
      
      <div className='my-2'>
        <p>Maneja: {cliente.maneja ? 'Si' : 'No'}</p>
        <p>Lentes: {cliente.lentes ? 'Si' : 'No'}</p>
        <p>Diabetico: {cliente.diabetico ? 'Si' : 'No'}</p>
        <p>Enfermedad: {cliente.enfermedad ?? 'Ninguna'}</p>
      </div>

      <div className='flex flex-row gap-x-4'>
      <Link href={`/editar/${cliente.id}`} className='bg-yellow-600 px-4 py-2 rounded-md inline-block'>
        Editar
      </Link>
      <DeleteButton id={cliente?.id ?? 0} />
      </div>
    </div>
  )
}

export default ClienteCard