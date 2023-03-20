import CTA from "./CTA"
import { logo, location} from "../assets"
import { contacts } from "./data"
const Footer = () => {
  return (
    <footer className="text-White bg-DarkBlueFooter pt-20">
      <div className="w-[90%] md:w-[80%] mx-auto">
<img src={logo} alt="" />
<div className="mt-6 grid">
  <div className="flex flex-col md:flex-row">
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
  <div></div>
  <div></div>
  <div></div>
</div>
      </div>
    </footer>
  )
}

export default Footer