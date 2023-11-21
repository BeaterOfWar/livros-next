import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import { LinhaLivro } from '../../componentes/LinhaLivro';
import styles from '../styles/Home.module.css';

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
    const res = await fetch(baseURL);
    return res.json();
}

const excluirLivro = async (codigo: number) => {
    const res = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return res.ok;
}

export const LivroLista: React.FC = () => {
    const [livros, setLivros] = useState<any[]>([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            obter().then(data => {
                setLivros(data);
                setCarregado(true);
            });
        }
    }, [carregado]);

    const excluir = (codigo: number) => {
        excluirLivro(codigo).then(() => setCarregado(false));
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Lista de Livros
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />)}
                    </tbody>
                </table>
            </main>
        </div>
    );
}
