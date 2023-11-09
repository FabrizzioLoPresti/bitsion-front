import { Cliente, Clientes } from '@/types/types'
import ClienteCard from './cliente-card'

type Props = {
  clientes: Clientes
}

const ClientesList = ({clientes}: Props) => {
  return (
    <div>
      {
        clientes.map((cliente: Cliente) => (
          <ClienteCard key={cliente.id} cliente={cliente} />
        ))
      }
    </div>
  )
}

export default ClientesList