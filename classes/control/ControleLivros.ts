import Livro from "../model/Livro";

var livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'One piece',
    resumo: 'A trama segue Monkey D. Luffy, um jovem que tem a ambição de se tornar o Rei dos Piratas - aquele que consegue todas as coisas do mundo. Para isso, ele precisa encontrar o One Piece, o tesouro lendário deixado por Gol D. Roger, primeiro rei da pirataria.',
    autores: ['Eichiro Oda'],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'Naruto',
    resumo: 'Um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.',
    autores: ['Masashi Kishimoto'],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'Dragon Ball',
    resumo: 'A historia de um garoto que explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas.',
    autores: ['Akira Toriyama'],
  },
];

class ControleLivro {
  obterLivros(): Array<Livro> {
      return livros;
  }

  incluir(livro: Livro): void {
      let maxCodigo = Math.max(...livros.map(l => l.codigo));
      livro.codigo = maxCodigo + 1;
      livros.push(livro);
  }

  excluir(codigo: number): void {
      let index = livros.findIndex(l => l.codigo === codigo);
      if (index !== -1) {
          livros.splice(index, 1);
      }
  }
}