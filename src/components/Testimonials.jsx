import { testimonials } from "./data"
import { quotes } from "../assets"
const Testimonials = () => {
  return (
  <article className="text-White bg-DarkBlueMain relative">
    <img src="" alt="" />
    <div className="grid md:grid-cols-3 w-[80%] justify mx-auto gap-8 py-12">{testimonials.map((card) =>{
       return <div key={card.name} className="text-[14px] font-body bg-DarkBlueTestimonials  px-6 py-6">
        <p className=" max-w-[300px] md:max-w-[280px]">{card.text}</p>
        <div className="flex items-center gap-2 mt-4">
          <img src={card.img} alt=""  className="w-[10%] rounded-full"/>
          <div>
            <h3 className="font-bold font-heading text-[16px]">{card.name}</h3>
            <p>{card.role}</p>
          </div>
        </div>
      </div>
    })}</div>
  </article>
  )
}

export default Testimonials