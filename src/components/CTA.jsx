import Button from "./Button"

const CTA = () => {
  return (
    <section className="text-White bg-DarkBlueMain">
<div className="w-[90%] md:w-[70%]  mx-auto bg-DarkBlueIntro">
  <div className="w-[80%] mx-auto text-center">
<h2 className="text-white font-bold font-heading text-[1.5rem] text-center">Get early access today</h2>
<p className="font-normal font-body max-w-[600px] text-center"> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
<p></p>
</div>
<form className="flex flex-col md:flex-row w-[80%] items-center mx-auto">
<input type="text" className="p-0 px-2 h-12 w-[90%] md:w-[60%] mt-6 rounded-full" placeholder="example@email.com"/>
  <Button value="Get Started For Free" style="w-[90%] md:w-[250px]"/>
</form>
</div>
    </section>
  )
}

export default CTA