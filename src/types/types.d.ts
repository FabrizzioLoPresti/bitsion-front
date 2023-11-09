interface Cliente {
  id?: number;
  nombrecompleto: string;
  edad: number;
  genero: string;
  estado: boolean;
  maneja?: boolean;
  lentes?: boolean;
  diabetico?: boolean;
  enfermedad?: string;
}

type Clientes = Cliente[];

export { Cliente, Clientes };