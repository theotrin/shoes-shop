import { convertMoney } from "@/utils/formatter";
import styles from "./Modal.module.scss";
import { ProductType } from "@/types/ProducType";

interface IProps {
  open: boolean;
  product: ProductType;
  handleClose: () => void;
}

function Modal({ open, handleClose, product }: IProps) {
  return (
    <>
      {open && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <img
              src="/close-icon.svg"
              alt="close"
              className={styles.close}
              onClick={() => handleClose()}
            />
            <div className={styles["modal-body"]}>
              <img
                src={product.image}
                alt="product"
                className={styles["product-image"]}
              />
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <div className={styles["container-buy"]}>
                <button className="btn--green">Comprar</button>
                <div className={styles["container-prices"]}>
                  <div className="prices">
                    <span>{convertMoney(product.oldPrice)}</span>
                    <h2>{convertMoney(product.currentPrice)}</h2>
                  </div>

                  <div className="installments">
                    <h4>6x {convertMoney(product.currentPrice / 6)}</h4>
                    <span>Sem juros</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
