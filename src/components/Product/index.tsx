import { ProductType } from "@/types/ProducType";
import style from "./product.module.scss";
import { convertMoney } from "@/utils/formatter";

interface Iprops {
  product: ProductType;
  handleSelectProduct: (product: ProductType) => void;
}

export default function Product({ handleSelectProduct, product }: Iprops) {
  return (
    <div
      className={style.container}
      onClick={() => handleSelectProduct(product)}
    >
      <img src={product.image} alt={product.name} />
      <span>{product.name}</span>

      <div className="prices">
        <span>R{convertMoney(product.oldPrice)}</span>
        <h2>R$ {convertMoney(product.currentPrice)}</h2>
      </div>
      <div className="installments">
        <h4>6 x de {convertMoney(product.currentPrice / 6)} </h4>
        <span>sem juros!</span>
      </div>
    </div>
  );
}
