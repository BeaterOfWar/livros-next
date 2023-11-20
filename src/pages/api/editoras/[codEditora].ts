import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            let codEditora = Number(req.query.codEditora);
            res.status(200).json({ nome: controleEditora.getNomeEditora(codEditora) });
        } else {
            res.status(405).end({ message: "Método não permitido" });
        }
    } catch (e) {
        res.status(500).end({ message: " Exceção ocorrida no servidor" }); 
    }
}