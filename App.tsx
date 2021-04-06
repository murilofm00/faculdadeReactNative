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
import { Sexo } from "./src/models/Sexo";
import AlunoForm from "./src/components/AlunoForm";

interface IState {
  aluno: Aluno;
}
export default class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      aluno: {
      }
    };
    // this.updateAluno = this.updateAluno.bind(this);
  }
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <AppBar />
          <View style={styles.container}>
            <AlunoForm aluno={this.state.aluno} ></AlunoForm>
            <Text style={styles.titulo}>Informações Inseridas:</Text>
            <AlunoInfos aluno={this.state.aluno} />
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 25,
  },
});
