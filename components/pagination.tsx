import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface PaginationProps {
  numbers: number[];
  onClick: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ numbers, onClick }) => {
  return (
    <View style={styles.wrapper}>
      {numbers.map((number, index) => (
        <Pressable
          style={styles.button}
          key={number}
          onPress={() => onClick(number)}
        >
          <Text style={styles.btnText}>{index + 1}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    overflow: "scroll",
    width: 300,
  },

  button: {
    width: 40,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#00BE00",
    borderRadius: 2,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default Pagination;
