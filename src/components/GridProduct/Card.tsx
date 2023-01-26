import Image from "next/image";
import { IProduct } from "@/@types/Product";

export const Card = ({
  id,
  name,
  brand,
  description,
  photo,
  price,
}: Omit<IProduct, "updatedAt" | "createdAt">) => {
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

      <button type="button">
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
