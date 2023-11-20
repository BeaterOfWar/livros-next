import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            let codigo = Number(req.query.codigo);
            controleLivro.excluir(codigo);
            res.status(200).json({ message: 'Livro excluído com sucesso!' });
        } else {
            res.status(405).end({ message: "Método não permitido" });
        }
    } catch (e) {
        res.status(500).end({ message: " Exceção ocorrida no servidor" });
    }
}