import Styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={Styles.container}>
      <div className={Styles.tint} />
      <img
        alt="hero"
        className={Styles.image}
        src="https://i.pinimg.com/originals/da/33/eb/da33eb8dbb41c3813bc1524804ab9d54.gif"
      />
    </section>
  );
}
