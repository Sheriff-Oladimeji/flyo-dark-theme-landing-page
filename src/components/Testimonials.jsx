import { testimonials } from "./data"

const Testimonials = () => {
  return (
  <article>
    <div>{testimonials.map((card) =>{
      <div>
        <p>{card.text}</p>
        <div>
          <img src={card.img} alt="" />
          <div>
            <h3>{card.name}</h3>
            <p>{card.role}</p>
          </div>
        </div>
      </div>
    })}</div>
  </article>
  )
}

export default Testimonials