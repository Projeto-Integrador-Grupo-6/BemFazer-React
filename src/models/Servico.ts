import Categoria from "./Categoria";

interface Servico{
id: number;
titulo: string;
descricao: string;
valor: string;
data: string;
categorias?: Categoria | null;
}

export default Servico;