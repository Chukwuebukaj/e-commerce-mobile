import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import styled from "styled-components/native";

interface ProductCardProps {
  bgImg: ImageSourcePropType;
  name: string;
  category: string;
  price: string;
  index: number;
  onPressAddToCart: (index: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  bgImg,
  name,
  category,
  price,
  index,
  onPressAddToCart,
}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={bgImg} style={styles.image}></ImageBackground>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Pressable style={styles.button} onPress={() => onPressAddToCart(index)}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: 323,
    // height: 384,
    margin: "auto",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 32,
    borderRadius: 4,
  },

  image: {
    width: 200,
    height: 200,
  },

  button: {
    backgroundColor: "#33CC33",
    padding: 8,
    borderRadius: 2,
  },

  btnText: {
    color: "#fff",
  },
});

export default ProductCard;
