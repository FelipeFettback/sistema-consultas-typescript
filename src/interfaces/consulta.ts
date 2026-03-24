import { Medico } from "./medico";
import { Paciente } from "../types/especialidade";
import { StatusConsulta } from "./statusConsulta";
export interface Consulta {
    id: number;
    medico: Medico;
    paciente: Paciente;
    dataHora: Date;
    valor : number;
    status: StatusConsulta;
    observacoes?: string;
}