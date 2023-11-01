import storage from "./storage";
export const saveProduct = (data: any) => {
  storage.save({
    key: "products",
    data: data,
  });
};

export const getProducts = () => {
  const productStorage = storage
    .load({
      key: "products",
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true,
      },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn(err.message);
      switch (err.name) {
        case "NotFoundError":
          break;
        case "ExpiredError":
          break;
      }
    });
  return productStorage;
};
