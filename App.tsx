import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getProducts, saveProduct } from "./helpers";
import products, { ProductsProps } from "./components/productsData";
import ProductCard from "./components/productCard";
import Sort from "./components/sort";
import Filter from "./components/filter";
import Pagination from "./components/pagination";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [items, setItems] = useState<ProductsProps[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [filterState, setFilterState] = useState<string>("category");
  const [cartIndexes, setCartIndexes] = useState<number[]>([]);
  const [page, setPage] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });
  console.log(cartIndexes);

  const handleFilterState = (option: string) => {
    setFilterState(option);
    setFilter("");
  };

  const handlePages = (index: number) => {
    const rem: any = items.length % 5;
    setPage({
      start: index,
      end: index + 5 > items.length ? index + rem : index + 5,
    });
  };

  const handleCartIndexes = (num: number) => {
    cartIndexes.includes(num)
      ? setCartIndexes((prevIndexes) =>
          prevIndexes.filter((item) => item !== num)
        )
      : setCartIndexes((prevIndexes) => [...prevIndexes, num]);
  };

  const categories: string[] = items.map((item) => item.category);
  const uniqueCategories: string[] = Array.from(new Set(categories));
  const convertedPriceRange =
    filterState === "price-range"
      ? filter?.split(" - ")?.map((item) => Number(item.slice(1)))
      : [];

  const filtered = [...items]
    .filter((item) =>
      filter && filter !== "All"
        ? filterState === "category"
          ? item.category.toLowerCase() === filter.toLowerCase()
          : filterState === "price-range"
          ? item.price >= convertedPriceRange[0] &&
            item.price <= convertedPriceRange[1]
          : item
        : item
    )
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(page.start, page.end);

  const sortOldestToNewest = [...filtered].sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );

  const sortAscending = [...filtered].slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const sortDescending = [...filtered].slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });

  const finalArr =
    selected === "A - Z"
      ? sortAscending
      : selected === "Z - A"
      ? sortDescending
      : selected === "Oldest - Newest"
      ? sortOldestToNewest
      : filtered;
  const pages: any = items
    .map((item, index) => index % 5 === 0 && index)
    .filter((item) => item !== false);

  useEffect(() => {
    // saveProduct(products)
    const getAllProducts = async () => {
      const allProducts = await getProducts();
      setItems(allProducts);
    };
    getAllProducts();
  }, [items]);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon style={styles.icon} name="shopping-cart" />
        <Text style={styles.counter}>
          {cartIndexes.length > 0 && cartIndexes.length}
        </Text>
      </View>
      <View style={styles.controllers}>
        <Sort
          onSelectOption={(option: string) => setSelected(option)}
          selected={selected}
        />
        <Filter
          onSelectOption={(option: string) => setFilter(option)}
          selected={filter}
          categoryOptions={["All", ...uniqueCategories]}
          selectFilter={(option: string) => handleFilterState(option)}
        />
      </View>
      <Pagination
        numbers={[...pages]}
        onClick={(page: number) => handlePages(page)}
      />
      {filtered.length === 0 && (
        <Text>No Items Match this {filter ? "filter" : "sort"} value</Text>
      )}
      <FlatList
        data={finalArr}
        renderItem={({ item, index }) => (
          <ProductCard
            bgImg={item.imageUrl}
            name={item.name}
            category={item.category}
            price={`₦${item.price}`}
            index={index}
            onPressAddToCart={(index: number) => handleCartIndexes(index)}
          />
        )}
        keyExtractor={(item: any) => item.id}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    gap: 16,
    padding: 16,
  },

  list: {
    display: "flex",
  },

  controllers: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 16,
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    width: 323,
    position: "relative",
  },
  icon: { fontSize: 16 },
  counter: {
    position: "absolute",
    top: -10,
    right: -8,
  },
});
