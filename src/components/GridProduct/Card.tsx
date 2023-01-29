import Image from "next/image";
import { ICartItem } from "@/@types/Cart";
import { IProduct } from "@/@types/Product";
import { addToCart } from "@/store/CartSlice";
import { useAppDispatch } from "@/store/hooks";

export const Card = ({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: Omit<IProduct, "updatedAt" | "createdAt">) => {
  const dispatch = useAppDispatch();
  const hadleAddToCard = (product: ICartItem) => {
    dispatch(addToCart(product));
  };
  return (
    <li key={id}>
      <picture>
        <img src={photo} alt={name} />
      </picture>

      <p>
        <strong>{`${brand} ${name}`}</strong>
        <span>R${Number(price).toLocaleString("pt-BR")}</span>
      </p>

      <p className="description">{description}</p>

      <button
        type="button"
        onClick={() => {
          hadleAddToCard({
            id,
            name,
            brand,
            description,
            photo,
            price,
          } as ICartItem);
        }}
      >
        <Image
          width={18}
          height={18}
          src="/images/shopping-bag.svg"
          alt="shopping-bag"
        />

        <span>comprar</span>
      </button>
    </li>
  );
};
