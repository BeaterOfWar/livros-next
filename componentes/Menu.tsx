import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="/">
              Inicio
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link className="nav-link" href="/LivroLista">
                  Lista de Livros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/LivroDados">
                  Dados do livro
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };
    
export default Menu;