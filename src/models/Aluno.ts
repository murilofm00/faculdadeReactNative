import { Curso } from "./Curso";
import { Periodo } from "./Periodo";
import { Sexo } from "./Sexo";
import { Turno } from "./Turno";

export interface Aluno {
  nome?: string;
  idade?: string;
  curso?: Curso;
  periodo?: Periodo;
  turno?: Turno;
  sexo?: Sexo;
  renda?: number;
  jaGanhouBolsa?: boolean;
}
