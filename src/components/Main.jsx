import { desktop, mobile, intro } from "../assets";
import Button from "./Button";
const Main = () => {
  return (
    <main className="w-screen h-auto md:h-auto cover flex justify-center items-center relative overflow-hidden">
      <div className="flex-col bg-DarkBlueIntro flex justify-center items-center mx-auto">
        <img src={intro} alt="intro" className="w-[80%] z-20 mt-6" />
        <h1 className="text-White text-[2rem]  text-center font-bold font-heading z-20">
          All your files in one secure <br className="md:hidden block" />{" "}
          location,
          <br className="hidden md:block" />
          accessible anywhere.
        </h1>
        <p className="text-White text-[16px] font-normal font-body text-center max-w-[450px] mt-4 z-20">
          Flyo stores all your most important files in one secure location.
          Access them whenever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button value="Get Started" style="z-20  mb-[100px] md:mb-[70px]" />
      </div>
    
      <div className="w-screen h-auto absolute right-0 bottom-0 z-10 ">
        <img
          className="w-full bg-no-repeat bg-right-top  bg-cover"
          src={desktop}
          alt="curvy shape background"
        />
      </div>
    </main>
  );
};

export default Main;
