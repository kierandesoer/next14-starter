import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We beleive in good ideas flexibility and precision. Fugiat sint minim proident tempor enim irure incididunt non. Exercitation ad commodo ea quis non in laboris anim cillum. Eu commodo cupidatat ea aliqua cillum proident veniam non ex mollit mollit anim. Voluptate nisi officia quis voluptate laboris tempor. Qui commodo ut mollit tempor fugiat aliquip magna elit fugiat. Nulla tempor pariatur sint adipisicing ut fugiat aliqua qui Lorem fugiat quis proident labore eiusmod. Laborum occaecat reprehenderit labore laboris eu magna ad excepteur dolor.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 K+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 K+</h1>
            <p>Services and plugins</p>
          </div>
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image 
          src="/about.png"
          alt="About"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
};

export default About;