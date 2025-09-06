import { Usuario } from '../../1entidades/Usuario';
import { ViewUsuarioDTO } from "../../1entidades/ViewUsuarioDTO";
import { AtualizarUsuarioDTO } from '../../1entidades/dtos/AtualizarUsuarioDTO';
import { CriarUsarioDTO } from "../../1entidades/dtos/CriarUsarioDTO";

export default interface UsuarioServiceInterface {

    buscarId(id: number): ViewUsuarioDTO;

    buscarTodos(): ViewUsuarioDTO[];

    criarUsuario(dadosUsuario: CriarUsarioDTO): Usuario[];

    atualizarUsuarioParcial(id: number, dadosAtualizacao: Partial<AtualizarUsuarioDTO>): ViewUsuarioDTO;

    substituirUsuario(id: number, dadosCompletos: Usuario): ViewUsuarioDTO;

    deletarUsuario(id: number): boolean;
    // eslint-disable-next-line semi
}