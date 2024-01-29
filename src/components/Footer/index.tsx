import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style["left-container"]}>
        <div className={style["container-adress"]}>
          <strong>Endereço:</strong>
          <span>Rua Ficticía, 10</span>
          <span>Centro</span>
          <span>Curitiba - Paraná</span>
        </div>
        <div className={style["container-social"]}>
          <img src={"/facebook-icon.svg"} alt="facebook" />
          <img src={"/instagram-icon.svg"} alt="instagram" />
        </div>
      </div>
      <div className={style["vertical-line"]} />
      <div className={style["right-container"]}>
        <div className={style["container-logo"]}>
          <img src={"/logo.svg"} alt="logo cubos academy" />
        </div>
      </div>
    </footer>
  );
}
