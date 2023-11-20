import { NextApiRequest, NextApiResponse } from 'next';
import  ControleLivro  from '../../../../classes/control/ControleLivros';

export const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            res.status(200).json(controleLivro.obterLivros());
        } else if (req.method === 'POST') {
            controleLivro.incluir(req.body);
            res.status(200).json({ message: 'Livro incluído com sucesso!' });
        } else {
            res.status(405).end({ message: "Método não permitido" }); 
        }
    } catch (e) {
        res.status(500).end({ message: " Exceção ocorrida no servidor" });
    }
}
