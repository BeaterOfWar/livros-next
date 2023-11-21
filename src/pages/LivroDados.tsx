import React, { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { ControleEditora } from '../../classes/control/ControleEditora';
import Livro from '../../classes/model/Livro';

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api/livros";

const incluirLivro = async (livro: Livro) => {
    const res = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    });
    return res.ok;
}

export const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(controleEditora.getEditoras()[0].codEditora);
    const opcoes = controleEditora.getEditoras().map((editora, index) => ({ value: editora.codEditora, text: editora.nome }));
    const router = useRouter();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    }

    const incluir = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora
        };
        incluirLivro(livro).then(() => router.push('/LivroLista'));
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
                    Dados do Livro
                </h1>
                <form onSubmit={incluir}>
                    <label>
                        Título:
                        <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                    </label>
                    <label>
                        Resumo:
                        <textarea value={resumo} onChange={e => setResumo(e.target.value)} />
                    </label>
                    <label>
                        Autores:
                        <textarea value={autores} onChange={e => setAutores(e.target.value)} />
                    </label>
                    <label>
                        Editora:
                        <select value={codEditora} onChange={tratarCombo}>
                            {opcoes.map((opcao, index) => <option key={index} value={opcao.value}>{opcao.text}</option>)}
                        </select>
                    </label>
                    <button type="submit">Incluir</button>
                </form>
            </main>
        </div>
    );
}

