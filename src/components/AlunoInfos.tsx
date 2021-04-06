import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Aluno } from "../models/Aluno";

interface IProps {
  aluno: Aluno;
}
export default class AlunoInfos extends Component<IProps> {
  render() {
    return (
      <View style={styles.alunoDiv}>
        <View>
          <Text style={styles.info}>
            <Text style={styles.cabecalho}>Nome:</Text>
            {this.props.aluno.nome}
          </Text>
        </View>
        <View>
          <Text style={styles.info}>
            <Text style={styles.cabecalho}>Idade:</Text>
            {this.props.aluno.idade}
          </Text>
        </View>
        <View>
          <Text style={styles.info}>
            <Text style={styles.cabecalho}>Curso:</Text>
            {this.props.aluno.curso?.descricao}
          </Text>
        </View>
        <View style={[styles.dFlex, { flexDirection: "row" }]}>
          <View style={styles.dFlex}>
            <Text style={styles.info}>
              <Text style={styles.cabecalho}>Periodo:</Text>
              {this.props.aluno.periodo?.descricao}
            </Text>
          </View>
          <View style={styles.dFlex}>
            <Text style={styles.info}>
              <Text style={styles.cabecalho}>Turno:</Text>
              {this.props.aluno.turno?.descricao}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alunoDiv: {
    flex: 1,
  },
  dFlex: {
    flex: 1,
  },
  cabecalho: {
    fontWeight: "bold",
    paddingRight: 5,
  },
  info: {
    paddingBottom: 15,
    fontSize: 15,
  },
});
