import { Curso } from "./Curso";
import { Periodo } from "./Periodo";
import { Turno } from "./Turno";

export interface Aluno {
  nome?: string;
  curso?: Curso;
  periodo?: Periodo;
  turno?: Turno;
}
