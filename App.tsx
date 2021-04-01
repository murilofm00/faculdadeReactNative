import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlunoInfos from "./src/components/AlunoInfos";
import AppBar from "./src/components/AppBar";
import PickerDescritiva from "./src/components/PickerDescritiva";
import { Aluno } from "./src/models/Aluno";
import { Curso } from "./src/models/Curso";
import { Periodo } from "./src/models/Periodo";
import { Turno } from "./src/models/Turno";

interface IState {
  aluno: Aluno;
  cursos: Curso[];
  periodos: Periodo[];
  turnos: Turno[];
}
export default class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    let periodos: Periodo[] = [];
    for (let i = 1; i <= 10; i++) {
      periodos.push({ id: i, descricao: i + "º Período" });
    }
    this.state = {
      aluno: {
        nome: "",
      },
      cursos: [
        {
          id: 1,
          descricao: "Sistemas de Informação",
        },
        {
          id: 2,
          descricao: "Administração",
        },
        {
          id: 3,
          descricao: "História",
        },
        {
          id: 4,
          descricao: "Letras",
        },
        {
          id: 5,
          descricao: "Direito",
        },
      ],
      periodos: periodos,
      turnos: [
        {
          id: 1,
          descricao: "Diurno",
        },
        {
          id: 2,
          descricao: "Noturno",
        },
        {
          id: 3,
          descricao: "Integral",
        },
      ],
    };
    this.updateAluno = this.updateAluno.bind(this);
  }
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <AppBar />
          <View style={styles.container}>
            <Text style={styles.descricaoParametros}>
              Selecione os parâmetros
            </Text>
            <TextInput
              style={styles.nomeInput}
              placeholder="Digite seu nome"
              value={this.state.aluno.nome}
              onChangeText={(text) => this.updateAluno('nome', text)}
            ></TextInput>
            <PickerDescritiva
              itens={this.state.cursos}
              label="Curso"
              valueChange={(cursoSelecionado) =>
                this.updateAluno('curso',cursoSelecionado)
              }
            />
            <PickerDescritiva
              itens={this.state.periodos}
              label="Periodo"
              valueChange={(periodoSelecionado) =>
                this.updateAluno('periodo',periodoSelecionado)
              }
            />
            <PickerDescritiva
              itens={this.state.turnos}
              label="Turno"
              valueChange={(turnoSelecionado) =>
                this.updateAluno('turno',turnoSelecionado)
              }
            />
            <Text style={styles.titulo}>Informações Inseridas:</Text>
            <AlunoInfos aluno={this.state.aluno} />
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  updateAluno(key: string, value: any) {
    this.setState((state) => ({
      aluno: {
        ...state.aluno,
        [key]: value
      }
    }))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  descricaoParametros: {
    paddingBottom: 15,
  },
  nomeInput: {
    borderWidth: 0.3,
    borderColor: "#545454",
    borderRadius: 5,
    padding: 7,
  },
  titulo: {
    fontSize: 25,
  },
});
