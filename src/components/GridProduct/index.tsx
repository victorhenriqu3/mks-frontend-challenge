import { Card } from "./Card";
import { ProductsList } from "./styles";
import { IGridProduct } from "@/@types/Product";
export const GridProduct = ({ products }: IGridProduct) => {
  return (
    <>
      <ProductsList>
        <ul>
          {products.map(({ id, name, brand, description, photo, price }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                brand={brand}
                description={description}
                photo={photo}
                price={price}
              />
            );
          })}
        </ul>
      </ProductsList>
    </>
  );
};
