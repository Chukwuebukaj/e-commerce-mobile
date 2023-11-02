import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface FilterProps {
  onSelectOption: (option: string) => void;
  selected: string;
  categoryOptions: string[];
  selectFilter: (option: string) => void;
}
const filterOptions: string[] = ["category", "price-range"];
const priceRange: string[] = [
  "All",
  "₦0 - ₦1000",
  "₦1001 - ₦2000",
  "₦2001 - ₦3000",
  "₦3001 - ₦4000",
  "₦4001 - ₦5000",
  "₦5001 - ₦6000",
  "₦6001 - ₦7000",
  "₦7001 - ₦8000",
  "₦8001 - ₦9000",
  "₦9001 - ₦10000",
];

const Filter: React.FC<FilterProps> = ({
  onSelectOption,
  selected,
  categoryOptions,
  selectFilter,
}) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleSelectFilterOption = (value: string) => {
    setCurrentFilter(value);
    selectFilter(value);
  };
  return (
    <View style={styles.container}>
      <Text>Filter by:</Text>
      <View style={styles.selectors}>
        <View style={styles.filters}>
          {filterOptions?.map((option) => (
            <Pressable
              key={option}
              onPress={() => handleSelectFilterOption(option)}
              style={[
                styles.button,
                {
                  backgroundColor:
                    currentFilter === option ? "#33CC33" : "#fff",
                  borderColor: currentFilter === option ? "#33CC33" : "",
                },
              ]}
            >
              <Text
                style={{ color: currentFilter === option ? "#fff" : "#000" }}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue: string) => onSelectOption(itemValue)}
        >
          <Picker.Item
            label={`Select a ${
              currentFilter === "price-range" ? "price range" : "category"
            }`}
            value=""
          />
          {currentFilter === "price-range"
            ? priceRange?.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))
            : categoryOptions?.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    gap: 8,
  },

  filters: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  selectors: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  button: {
    // backgroundColor: "#fff",
    padding: 4,
    // borderColor: "#33CC33",
    borderWidth: 1,
    // borderStyle: "solid",
    borderRadius: 2,
  },

  btnText: {},
});

export default Filter;
