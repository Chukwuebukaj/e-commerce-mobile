import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface SortProps {
  onSelectOption: (option: string) => void;
  selected: string;
}
const sortOptions: string[] = [
  "A - Z",
  "Z - A",
  "Oldest - Newest",
  "Newest - Oldest",
];
const Sort: React.FC<SortProps> = ({ onSelectOption, selected }) => {
  return (
    <View style={styles.container}>
      <Text>Sort:</Text>
      <Picker
        selectedValue={selected}
        onValueChange={(itemValue: string) => onSelectOption(itemValue)}
      >
        <Picker.Item label="Select an option" value="" />
        {sortOptions.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});

export default Sort;
