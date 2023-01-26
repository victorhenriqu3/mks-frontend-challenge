import { api } from "./api";

export const fetchProducts = async () => {
  const response = await api.get(
    `/products?page=1&rows=20&sortBy=id&orderBy=DESC`
  );

  return response.data.products;
};
