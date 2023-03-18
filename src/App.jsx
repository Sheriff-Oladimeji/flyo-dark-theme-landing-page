import {
  CTA,
  Business,
  Testimonials,
  Main,
  Services,
  Navbar,
  Footer,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-DarkBlueIntro text-[14px] py-6 overflow-hidden">
      <Navbar />
      <Hero/>
      <Main />
    </div>
  );
};

export default App;
