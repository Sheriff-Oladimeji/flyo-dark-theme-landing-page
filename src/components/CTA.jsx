import Button from "./Button";

const CTA = () => {
  return (
    <div className="text-White bg-DarkBlueMain w-[90%] md:w-[60%] mx-auto">
      <div>
        <h2>et early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="flex flex-col md:flex-row items-center">
        <div className="w-[90%] md:w-[60%]">
        <input type="text" placeholder="example@email.com" className="w-[100%] p-[10px]"/>
        </div>
        <Button value="Get Started from free" style="w-[90%] md:w-[40%]"/>
      </form>
    </div>
  );
};

export default CTA;
