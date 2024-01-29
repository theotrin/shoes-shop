import Footer from "../Footer";
import Header from "../Header";
import style from "./layout.module.scss";

interface Iprops {
  children: JSX.Element;
}

export default function Layout({ children }: Iprops) {
  return (
    <main className={style.container}>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
