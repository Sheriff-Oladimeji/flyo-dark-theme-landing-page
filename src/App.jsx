import {
  CTA,
  Business,
  Testimonials,
  Main,
  Services,
  Navbar,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-DarkBlueIntro text-[14px] pt-6 overflow-hidden">
      <Navbar />
      <Main />
      <Services />
      <Business/>
    </div>
  );
};

export default App;
