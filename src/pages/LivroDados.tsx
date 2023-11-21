import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../../componentes/Menu';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import ControleEditora  from '../../classes/control/ControleEditora';
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
        <main>
          <h1>Inclusão de Livro</h1>
          <form onSubmit={incluir}>
            <div className="mb-3">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="resumo" className="form-label">
                Resumo
              </label>
              <textarea
                className="form-control"
                id="resumo"
                value={resumo}
                onChange={(event) => setResumo(event.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="autores" className="form-label">
                Autores
              </label>
              <textarea
                className="form-control"
                id="autores"
                value={autores}
                onChange={(event) => setAutores(event.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="editora" className="form-label">
                Editora
              </label>
              <select
                className="form-select"
                id="editora"
                value={codEditora}
                onChange={tratarCombo}
              >
                {opcoes.map((opcao) => (
                  <option key={opcao.value} value={opcao.value}>
                    {opcao.text}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Incluir
            </button>
          </form>
        </main>
      );
    }
    
    export default LivroDados; 
