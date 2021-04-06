import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Aluno } from "../models/Aluno";
import PickerDescritiva from "./PickerDescritiva";
import DescritivaDados from "../../DescritivaDados.json";
import { Curso } from "../models/Curso";
import { Periodo } from "../models/Periodo";
import { Turno } from "../models/Turno";
import { Sexo } from "../models/Sexo";
// import isEmpty from 'lodash/isEmpty';
import { get, isEmpty } from "lodash";

interface IProps {
  aluno: Aluno;
  submitForm: (aluno: Aluno) => void;
}
interface IState {
  aluno: Aluno;
  cursos: Curso[];
  periodos: Periodo[];
  turnos: Turno[];
  sexos: Sexo[];
}
export default class AlunoInfos extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      ...DescritivaDados,
      aluno: {},
    };

    this.updateAluno = this.updateAluno.bind(this);
    this.submitAluno = this.submitAluno.bind(this);
  }

  render() {
    return (
      <View style={styles.alunoForm}>
        <Text style={styles.descricaoParametros}>Selecione os parâmetros</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Digite seu nome"
          value={this.props.aluno.nome}
          onChangeText={(text) => this.updateAluno("nome", text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Idade"
          onChangeText={(text) => this.updateAluno("idade", parseInt(text))}
          keyboardType="number-pad"
        ></TextInput>
        <PickerDescritiva
          itens={this.state.cursos}
          label="Curso"
          valueChange={(cursoSelecionado) =>
            this.updateAluno("curso", cursoSelecionado)
          }
        />
        <PickerDescritiva
          itens={this.state.periodos}
          label="Periodo"
          valueChange={(periodoSelecionado) =>
            this.updateAluno("periodo", periodoSelecionado)
          }
        />
        <PickerDescritiva
          itens={this.state.turnos}
          label="Turno"
          valueChange={(turnoSelecionado) =>
            this.updateAluno("turno", turnoSelecionado)
          }
        />
        <Button title="Salvar" onPress={this.submitAluno} />
      </View>
    );
  }

  updateAluno(key: string, value: any) {
    this.setState((state) => ({
      aluno: {
        ...state.aluno,
        [key]: value,
      },
    }));
  }

  atributoIsValid(attr: string) {
    return isEmpty(get(this.state.aluno, attr));
  }

  submitAluno() {
    if (this.formIsValid()) {
      this.props.submitForm(this.state.aluno);
    }
  }

  formIsValid() {
    const aluno = this.state.aluno;
    let invalidos: string[] = [];
    for (let attr in aluno) {
      this.atributoIsValid(attr) && invalidos.push(attr);
    }
    if (invalidos.length > 0) {
      return false;
    }
    return true;
  }
}

const styles = StyleSheet.create({
  alunoForm: {
    flex: 1,
  },
  descricaoParametros: {
    paddingBottom: 15,
  },
  input: {
    borderWidth: 0.3,
    borderColor: "#545454",
    borderRadius: 5,
    padding: 7,
    marginBottom: 15,
  },
});
