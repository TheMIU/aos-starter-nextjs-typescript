import styles from "@/app/page.module.css";

export default function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.headingContainer}>
        <h1>AOS + Next.Js + TypeScript</h1>
        <br />
        <p>Scroll Down </p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2 className={styles.title}>Example 1</h2>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quis consequatur, deleniti quasi distinctio dolorum, totam non nobis
            expedita obcaecati quisquam ad odio. Soluta laudantium eligendi
            reprehenderit amet est ut!
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>Example 2</h2>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quis consequatur, deleniti quasi distinctio dolorum, totam non nobis
            expedita obcaecati quisquam ad odio. Soluta laudantium eligendi
            reprehenderit amet est ut!
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.title}>Example 3</h2>
          <p className={styles.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quis consequatur, deleniti quasi distinctio dolorum, totam non nobis
            expedita obcaecati quisquam ad odio. Soluta laudantium eligendi
            reprehenderit amet est ut!
          </p>
        </div>

      </div>
    </div>
  );
}
