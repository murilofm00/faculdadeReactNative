import React, { Component } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet } from "react-native";
import { Descritiva } from "../models/Descritiva";

interface IProps {
  label: string;
  itens: Descritiva[];
  valueChange: (item: Descritiva) => void;
}
export default class PickerDescritiva extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.valueChange = this.valueChange.bind(this);
  }

  render() {
    let items = this.props.itens.map((item) => {
      return (
        <Picker.Item label={item.descricao} value={item.id} key={item.id} />
      );
    });
    return (
      <View style={styles.pickerDiv}>
        <Text>{this.props.label}:</Text>
        <Picker style={styles.picker} onValueChange={this.valueChange}>
          {items}
        </Picker>
      </View>
    );
  }
  valueChange(itemId: number) {
    const item = this.props.itens.find((item) => item.id == itemId);
    console.log(item);
    if (item) {
      this.props.valueChange(item);
    }
  }
}

const styles = StyleSheet.create({
  pickerDiv: {
    paddingVertical: 10,
  },
  picker: {
    padding: 5,
    borderRadius: 5,
  },
});
