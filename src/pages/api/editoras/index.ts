import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora } from '../../../../classes/control/ControleEditora';

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            res.status(200).json(controleEditora.getEditoras());
        } else {
            res.status(405).end({ message: "Método não permitido" }); 
        }
    } catch (e) {
        res.status(500).end({ message: " Exceção ocorrida no servidor" });
    }
}
