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
import { mobile, desktop } from "./assets";
const App = () => {
  return (
    <div className="bg-DarkBlueIntro text-[14px] p-6">
      <div className="px-6 md:px-12 w-full ">
        <Navbar />
        <Hero />
      </div>
      <section className={`bg-DarkBlueMain`}>
        <About />
      </section>
    </div>
  );
};

export default App;
