import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div>
        <h1>MODA MASCULINA</h1>
        <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
        <img src="logo.svg" alt="logo" />
      </div>
    </header>
  );
}
