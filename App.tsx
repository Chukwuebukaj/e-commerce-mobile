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
  const [cartIndexes, setCartIndexes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [page, setPage] = useState<{ start: number; end: number }>({
    start: 0,
    end: 5,
  });

  const handleFilterState = (option: string) => {
    setFilterState(option);
    setFilter("");
  };

  const handlePages = (index: number, newPage: number) => {
    const rem: any = items.length % 5;
    setPage({
      start: index,
      end: index + 5 > items.length ? index + rem : index + 5,
    });
    setCurrentPage(newPage);
  };

  const handleCartIndexes = (name: string) => {
    cartIndexes.includes(name)
      ? setCartIndexes((prevIndexes) =>
          prevIndexes.filter((item) => item !== name)
        )
      : setCartIndexes((prevIndexes) => [...prevIndexes, name]);
  };

  const categories: string[] = items?.map((item) => item.category);
  const uniqueCategories: string[] = Array.from(new Set(categories));
  const convertedPriceRange =
    filterState === "price-range"
      ? filter?.split(" - ")?.map((item) => Number(item.slice(1)))
      : [];

  const filtered = [...items]
    ?.filter((item) =>
      filter && filter !== "All"
        ? filterState === "category"
          ? item.category.toLowerCase() === filter.toLowerCase()
          : filterState === "price-range"
          ? item.price >= convertedPriceRange[0] &&
            item.price <= convertedPriceRange[1]
          : item
        : item
    )
    ?.sort((a, b) => b?.createdAt.localeCompare(a?.createdAt))
    ?.slice(page.start, page.end);

  const sortOldestToNewest = [...filtered]?.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt)
  );

  const sortAscending = [...filtered]?.slice()?.sort((a, b) => {
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

  const sortDescending = [...filtered]?.slice()?.sort((a, b) => {
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
    ?.map((item, index) => item && index % 5 === 0 && index)
    ?.filter((item) => item !== false);

  useEffect(() => {
    // saveProduct(products)
    const getAllProducts = async () => {
      try {
        const allProducts = await getProducts();
        if (allProducts) {
          setItems(allProducts);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon style={styles.icon} name="shopping-cart" />
        {cartIndexes.length > 0 && (
          <Text style={styles.counter}>{cartIndexes?.length}</Text>
        )}
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
        onClick={(page: number, index: number) => handlePages(page, index)}
        currentPage={currentPage}
      />
      {filtered.length === 0 && (
        <Text>No Items Match this {filter ? "filter" : "sort"} value</Text>
      )}
      <FlatList
        data={finalArr}
        renderItem={({ item }) => (
          <ProductCard
            bgImg={item.imageUrl}
            name={item.name}
            category={item.category}
            price={`₦${item.price}`}
            onPressAddToCart={(name: string) => handleCartIndexes(name)}
            nameArr={cartIndexes}
          />
        )}
        keyExtractor={(item: any) => item?.id}
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
  },
  icon: { fontSize: 16 },
  counter: {
    position: "absolute",
    top: -10,
    right: -10,
    color: "#fff",
    backgroundColor: "#33CC33",
    width: 16,
    height: 16,
    textAlign: "center",
    borderRadius: 8,
  },
});
