import Button from "./Button";

const CTA = () => {
  return (
<article className="bg-DarkBlueMain w-full relative flex justify-center">
    <div className="text-White bg-DarkBlueIntro w-[90%] md:w-[50%] mx-auto shadow rounded-[10px] absolute -bottom-36 py-12 md:py-8 px-6">
      <div>
        <h2 className="text-center text-[1.5rem] font-bold font-heading">Get early access today</h2>
        <p className="font-normal text-center font-body">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="flex flex-col md:flex-row items-center">
        <div className="w-[90%] md:w-[60%]">
        <input type="text" placeholder="example@email.com" className="w-[100%] p-[10px] rounded-full"/>
        <small></small>
        </div>
        <Button value="Get Started from free" style="w-[90%] md:w-[40%]"/>
      </form>
    </div>
    </article>
  );
};

export default CTA;
