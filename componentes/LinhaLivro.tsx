import React from 'react';
import  Livro  from '../classes/model/Livro';
import  ControleEditora  from '../classes/control/ControleEditora';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <tr>
            <td>
                {props.livro.titulo}
                <button type="button" className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>
                    Excluir
                </button>
            </td>
            <td>{nomeEditora}</td>
            <td>{props.livro.resumo}</td>
            <td>
                <ul>
                    {props.livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}