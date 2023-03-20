import {
  Business,
  Testimonials,
  Main,
  Services,
  Navbar,
  Footer,
  CTA,
} from "./components";

const App = () => {
  return (
    <div className="bg-DarkBlueIntro text-[14px] pt-6 overflow-hidden">
      <Navbar />
      <Main />
      <Services />
      <Business/>
      <Testimonials/>
    <div>
      <CTA/>
      <Footer/>
    </div>
    </div>
  );
};

export default App;
