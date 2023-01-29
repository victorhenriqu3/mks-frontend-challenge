import { ProductsList } from "../GridProduct/styles";
import SkeletonCard from "./card";

const Skeleton = () => {
  return (
    <>
      <ProductsList>
        <ul>
          {new Array(8).fill(null).map((key) => (
            <SkeletonCard key={key} />
          ))}
        </ul>
      </ProductsList>
    </>
  );
};
export default Skeleton;
