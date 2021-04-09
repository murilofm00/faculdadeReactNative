import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Switch,
} from "react-native";
import { Aluno } from "../models/Aluno";
import PickerDescritiva from "./PickerDescritiva";
import DescritivaDados from "../../DescritivaDados.json";
import { Curso } from "../models/Curso";
import { Periodo } from "../models/Periodo";
import { Turno } from "../models/Turno";
import { Sexo } from "../models/Sexo";
import { get } from "lodash";
import Slider from "@react-native-community/slider";

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
      aluno: {
        nome: "",
        idade: "",
      },
    };

    this.updateAluno = this.updateAluno.bind(this);
    this.submitAluno = this.submitAluno.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.atributoIsInvalid = this.atributoIsInvalid.bind(this);
  }

  render() {
    return (
      <View style={styles.alunoForm}>
        <Text style={styles.descricaoParametros}>Selecione os parâmetros</Text>
        <TextInput
          style={[styles.input]}
          placeholder="Digite seu nome"
          value={this.state.aluno.nome}
          onChangeText={(text) => this.updateAluno("nome", text)}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={this.state.aluno.idade}
          onChangeText={(text) => this.updateAluno("idade", text)}
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
        <PickerDescritiva
          itens={this.state.sexos}
          label="Sexo"
          valueChange={(sexoSelecionado) =>
            this.updateAluno("sexo", sexoSelecionado)
          }
        />
        <View style={styles.campoCustom}>
          <Text>Renda:</Text>
          <Slider
            style={{ flex: 1, marginHorizontal: 8 }}
            minimumValue={0}
            maximumValue={100000}
            minimumTrackTintColor="#1c9ed6"
            maximumTrackTintColor="#292c2e"
            step={0.5}
            onValueChange={(valorRenda) =>
              this.updateAluno("renda", valorRenda)
            }
          />
          <Text>
            {this.state.aluno.renda?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
        <View style={styles.campoCustom}>
          <Text style={{ flex: 1, marginRight: 5 }}>Já Ganhou bolsa:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.aluno.jaGanhouBolsa ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(switchValor) =>
              this.updateAluno("jaGanhouBolsa", switchValor)
            
            
            
            }
            value={this.state.aluno.jaGanhouBolsa}
          />
        </View>
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

  atributoIsInvalid(attr: string) {
    const valorAttr = get(this.state.aluno, attr);

    return valorAttr == undefined || valorAttr == '';
  }

  submitAluno() {
    if (this.formIsValid()) {
      this.props.submitForm(this.state.aluno);
    }
  }

  async formIsValid() {
    const alunoAtributos: string[] = [
      "nome",
      "idade",
      "curso",
      "periodo",
      "turno",
      "sexo",
      "renda",
      "jaGanhouBolsa",
    ];
    let invalidos: string[] = [];
    for (let attr of alunoAtributos) {
      if (this.atributoIsInvalid(attr)) {
        invalidos.push(attr);
      }
    }
    if (invalidos.length > 0) {
      console.log(
        `Os seguintes campos não foram preenchidos: ${invalidos.join(", ")}.`
      );
      Alert.alert(
        "Campos não preenchidos",
        `Os seguintes campos não foram preenchidos: ${invalidos.join(", ")}.`
      );
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
  campoCustom: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },
});
