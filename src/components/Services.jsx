import { services } from "./data"

const Services = () => {
  return (
    <section className="w-full bg-DarkBlueMain z-30">
<div className="mx-auto grid md:grid-cols-2 w-[70%] gap-8 sm:pt-8  pb-8">
  {services.map(service =>
  {
    return <div key={service.id} className="text-white flex flex-col items-center justify-center mt-6">
      <img src={service.img} alt={service.title} className=" w-[20%] md:w-[10%]"/>
      <h2 className="text-[1.5rem] font-bold font-heading text-center my-1">{service.title}</h2>
      <p className="text-center max-w-[360px] text-[14px]">{service.text}</p>
    </div>
  })}
</div>
    </section>
  )
}

export default Services