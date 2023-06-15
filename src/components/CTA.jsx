import Button from "./Button";

const CTA = () => {
  function handleClick(e){
  e.preventDefault()
    const input = document.getElementById("input")
    const error = document.getElementById('error')
if(input.value.trim() === ""){
  error.innerText = "Email cannot be empty"
}
else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim()))
  {
    error.innerText = "Please enter a valid email address"
  }
  }
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
      <form className="flex flex-col md:flex-row items-center md:gap-4  " onSubmit={handleClick}>
        <div className="w-[90%] md:w-[60%] mt-6 h-[56px]">
        <input type="text" placeholder="example@email.com" className="w-[100%] p-[15px] rounded-full outline-none text-black  placeholder:p-4" id="input"/>
        <small id="error" className="mt-4 text-[12px] text-LightRed"></small>
        </div>
        <Button value="Get Started for free" style="w-[90%] md:w-[40%] p-[15px]"/>
      </form>
    </div>
    </article>
  );
};

export default CTA;
