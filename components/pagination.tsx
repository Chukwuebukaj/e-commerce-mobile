import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

interface PaginationProps {
  numbers: number[];
  currentPage: number;
  onClick: (page: number, index: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  numbers,
  onClick,
}) => {
  return (
    <View style={styles.wrapper}>
      {numbers?.map((number, index) => (
        <Pressable
          style={[
            styles.button,
            { backgroundColor: currentPage === index ? "#fff" : "#00BE00" },
          ]}
          key={number}
          onPress={() => onClick(number, index)}
        >
          <Text
            style={[
              styles.btnText,
              { color: currentPage === index ? "#00BE00" : "#fff" },
            ]}
          >
            {index + 1}
          </Text>
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
    borderRadius: 2,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default Pagination;
