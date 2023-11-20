import Editora from '../model/Editora';

const editoras: Array<Editora> = [
    {
      codEditora: 1,
      nome: 'Panini Comics',
    },
    {
      codEditora: 2,
      nome: 'Shueisha',
    },
    {
      codEditora: 3,
      nome: 'Conrad',
    },
  ];
  
  export class ControleEditora {
    public getEditoras = (): Editora[] => {
      return editoras;
    };
  
    public getNomeEditora = (codEditora: number): string => {
      const editoraEncontrada = editoras.find(
        (editora) => editora.codEditora === codEditora
      );
      if (editoraEncontrada) {
        return editoraEncontrada.nome;
      } else {
        throw new Error('Editora não encontrada');
      }
    };
  
    public getEditora = (codEditora: number): Editora | undefined => {
      return editoras.find((editora) => editora.codEditora === codEditora);
    };
  }