import uuid from "react-native-uuid";
import { images } from "../assets";
import { ImageSourcePropType } from "react-native";

export interface ProductsProps {
  id: string | number[];
  name: string;
  price: number;
  category: string;
  imageUrl: ImageSourcePropType;
  createdAt: string;
}

export const products: ProductsProps[] = [
  {
    id: uuid.v4(),
    name: "Apples",
    price: 2999,
    category: "Fruits",
    imageUrl: images.image1,
    createdAt: "2023-10-19T08:20:15.123+00:00",
  },
  {
    id: uuid.v4(),
    name: "Maize",
    price: 3999,
    category: "Grains",
    imageUrl: images.image2,
    createdAt: "2023-10-19T09:35:42.987+00:00",
  },
  {
    id: uuid.v4(),
    name: "Avocado",
    price: 7999,
    category: "Fruits",
    imageUrl: images.image3,
    createdAt: "2023-10-19T10:50:21.234+00:00",
  },
  {
    id: uuid.v4(),
    name: "Garlic",
    price: 4999,
    category: "Veggies",
    imageUrl: images.image4,
    createdAt: "2023-10-19T12:05:03.876+00:00",
  },
  {
    id: uuid.v4(),
    name: "Ginger",
    price: 5999,
    category: "Veggies",
    imageUrl: images.image5,
    createdAt: "2023-10-19T13:20:29.543+00:00",
  },
  {
    id: uuid.v4(),
    name: "Strawberries",
    price: 6999,
    category: "Fruits",
    imageUrl: images.image6,
    createdAt: "2023-10-19T14:35:17.765+00:00",
  },
  {
    id: uuid.v4(),
    name: "Coconuts",
    price: 9999,
    category: "Fruits",
    imageUrl: images.image7,
    createdAt: "2023-10-19T15:50:50.321+00:00",
  },
  {
    id: uuid.v4(),
    name: "Bananas",
    price: 7999,
    category: "Fruits",
    imageUrl: images.image8,
    createdAt: "2023-10-19T17:05:08.432+00:00",
  },
  {
    id: uuid.v4(),
    name: "Blueberries",
    price: 8999,
    category: "Fruits",
    imageUrl: images.image9,
    createdAt: "2023-10-19T18:20:39.999+00:00",
  },
  {
    id: uuid.v4(),
    name: "Lemon",
    price: 6999,
    category: "Fruits",
    imageUrl: images.image10,
    createdAt: "2023-10-19T19:35:59.111+00:00",
  },
  {
    id: uuid.v4(),
    name: "Tangerine",
    price: 5999,
    category: "Fruits",
    imageUrl: images.image11,
    createdAt: "2023-10-19T20:50:02.888+00:00",
  },
  {
    id: uuid.v4(),
    name: "Wheat",
    price: 8999,
    category: "Grains",
    imageUrl: images.image12,
    createdAt: "2023-10-19T22:05:47.222+00:00",
  },
  {
    id: uuid.v4(),
    name: "Pepper",
    price: 3999,
    category: "Veggies",
    imageUrl: images.image13,
    createdAt: "2023-10-20T08:20:13.444+00:00",
  },
  {
    id: uuid.v4(),
    name: "Tomatoes",
    price: 550.0, 
    category: "Fruits",
    imageUrl: images.image14,
    createdAt: "2023-10-20T09:35:56.789+00:00",
  },
  {
    id: uuid.v4(),
    name: "Onions",
    price: 670.0, 
    category: "Veggies",
    imageUrl: images.image15,
    createdAt: "2023-10-20T10:50:24.333+00:00",
  },
  {
    id: uuid.v4(),
    name: "Irish Potato",
    price: 780.0, 
    category: "Tubers",
    imageUrl: images.image16,
    createdAt: "2023-10-20T12:05:09.111+00:00",
  },
  {
    id: uuid.v4(),
    name: "Cucumber",
    price: 930.0, 
    category: "Veggies",
    imageUrl: images.image17,
    createdAt: "2023-10-20T13:20:35.777+00:00",
  },
  {
    id: uuid.v4(),
    name: "Cabbage",
    price: 450.0, 
    category: "Veggies",
    imageUrl: images.image18,
    createdAt: "2023-10-20T14:35:58.999+00:00",
  },
  {
    id: uuid.v4(),
    name: "Beans and Corn",
    price: 880.0, 
    category: "Grains",
    imageUrl: images.image19,
    createdAt: "2023-10-20T15:50:42.666+00:00",
  },
  {
    id: uuid.v4(),
    name: "Sea foods",
    price: 520.0, 
    category: "Frozen Foods",
    imageUrl: images.image20,
    createdAt: "2023-10-20T17:05:22.888+00:00",
  },
  {
    id: uuid.v4(),
    name: "Beef",
    price: 760.0, 
    category: "Frozen Foods",
    imageUrl: images.image21,
    createdAt: "2023-10-20T18:20:17.222+00:00",
  },
  {
    id: uuid.v4(),
    name: "Hamper",
    price: 880.0, 
    category: "Specials",
    imageUrl: images.image22,
    createdAt: "2023-10-20T19:35:49.555+00:00",
  },
  // {
  //   id: uuid.v4(),
  //   name: "Product 70",
  //   price: 930.0, 
  //   category: "Electronics",
  //   imageUrl: images.image23,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 71",
  //   price: 64000, 
  //   category: "Clothing",
  //   imageUrl: images.image24,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 72",
  //   price: 75000, // 75.00 in thousands
  //   category: "Home Decor",
  //   imageUrl: images.image25,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 73",
  //   price: 57000, // 57.00 in thousands
  //   category: "Electronics",
  //   imageUrl: images.image26,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 74",
  //   price: 89000, // 89.00 in thousands
  //   category: "Clothing",
  //   imageUrl: images.image27,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 75",
  //   price: 42000, // 42.00 in thousands
  //   category: "Home Decor",
  //   imageUrl: images.image28,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 76",
  //   price: 69000, // 69.00 in thousands
  //   category: "Electronics",
  //   imageUrl: images.image29,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 77",
  //   price: 82000, // 82.00 in thousands
  //   category: "Clothing",
  //   imageUrl: images.image30,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 78",
  //   price: 77000, // 77.00 in thousands
  //   category: "Home Decor",
  //   imageUrl: images.image31,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 79",
  //   price: 93000, // 93.00 in thousands
  //   category: "Electronics",
  //   imageUrl: images.image32,
  // },
  // {
  //   id: uuid.v4(),
  //   name: "Product 80",
  //   price: 48000, // 48.00 in thousands
  //   category: "Clothing",
  //   imageUrl: images.image33,
  // },
];

export default products;
