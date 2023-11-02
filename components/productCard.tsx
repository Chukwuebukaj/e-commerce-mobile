import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
} from "react-native";

interface ProductCardProps {
  bgImg: ImageSourcePropType;
  name: string;
  category: string;
  price: string;
  nameArr: string[];
  onPressAddToCart: (name: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  bgImg,
  name,
  category,
  price,
  nameArr,
  onPressAddToCart,
}) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={bgImg} style={styles.image}></ImageBackground>
      <Text>{name}</Text>
      <Text>{category}</Text>
      <Text>{price}</Text>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: nameArr.includes(name) ? "#fff" : "#33CC33" },
        ]}
        onPress={() => onPressAddToCart(name)}
      >
        <Text
          style={[
            styles.btnText,
            { color: nameArr.includes(name) ? "#33CC33" : "#fff" },
          ]}
        >
          {`${nameArr.includes(name) ? "Remove from" : "Add to"} Cart`}
        </Text>
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
    // backgroundColor: "#33CC33",
    padding: 8,
    borderRadius: 2,
    borderColor: "#33CC33",
    borderWidth: 1,
    borderStyle: "solid",
  },

  btnText: {
    color: "#fff",
  },
});

export default ProductCard;
