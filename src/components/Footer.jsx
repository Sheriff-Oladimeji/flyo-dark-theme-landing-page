import CTA from "./CTA"
import { logo, location} from "../assets"
import { contacts, linkOne, linkTwo} from "./data"

const Footer = () => {
  return (
    <footer className="text-White bg-DarkBlueFooter pb-20 pt-48">
      <div className="w-[90%] md:w-[80%] mx-auto">
<img src={logo} alt="" />
<div className="mt-8 flex  flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="flex items-start gap-4">
<img src={location} alt="location" />
<p className="text-White max-w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
<div className="flex flex-col gap-4">
{contacts.map((contact)=>{
  return <div key={contact.id} className="flex gap-4 items-center">
    <img src={contact.icon} alt="" />
    <p className="text-white font-normal font-body">{contact.text}</p>
  </div>

})}
</div>
  </div>
  <div>{linkOne.map(link=>{
   return  <a className="text-white block  mb-3 hover:font-bold text-[16px] font-heading" href="#" key={link.id}>{link.link}</a>
  })}</div>
  <div>{linkTwo.map((value) => {
    return <a className="text-white block  mb-3 hover:font-bold  text-[16px] font-heading" href="#">{value.link}</a>
  })}</div>
  <div>
  
  </div>
</div>

      </div>
    </footer>
  )
}

export default Footer