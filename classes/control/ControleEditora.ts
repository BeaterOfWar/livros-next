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
  
export default class ControleEditora {
  public getNomeEditora(codEditora: number): string {
    const filtro = 
  editoras.filter((edt) => 
  edt.codEditora === codEditora);
    const editora = filtro.find((edt) => true);
    return editora ? editora.nome : 'Editora não encontrada';
  }
  
  public getEditoras(): Array<Editora> {
    return editoras;
  }
}