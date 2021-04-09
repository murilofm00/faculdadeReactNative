import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlunoForm from "./src/components/AlunoForm";
import AlunoInfos from "./src/components/AlunoInfos";
import AppBar from "./src/components/AppBar";
import { Aluno } from "./src/models/Aluno";

interface IState {
  aluno: Aluno;
}
export default class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      aluno: {
      },
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <AppBar />
          <View style={styles.container}>
            <AlunoForm
              aluno={this.state.aluno}
              submitForm={(aluno) => this.setState({ aluno: aluno })}
            ></AlunoForm>
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
