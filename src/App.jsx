import {
  CTA,
  Business,
  Testimonials,
  Hero,
  Services,
  Navbar,
  Footer,
  About,
} from "./components";
import styles from "./style";
import "./index.css"

const App = () => {
  return (
    <div className="bg-DarkBlueIntro text-[14px] py-6">
      <div className={styles.container}>
        <Navbar />
        <Hero />
      </div>

      <section className={`w-full ${styles.container}`}>
        <About />
      </section>
    </div>
  );
};

export default App;
