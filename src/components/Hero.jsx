import { intro } from "../assets";
const Hero = () => {
  return (
    <div className="flex justify-center mt-6">
      <img src={intro} alt="hero" className=" w-[80%]md:w-[40%] " />
    </div>
  );
};

export default Hero;
