import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import Carousel from "./carousel/page";
import styles from "./page.module.css"
export default function Home() {
  return (
  <>
  <Header />
  <main className={styles.body2}>
    <Carousel />
  </main>
  <Footer />
  </>
  );
};
