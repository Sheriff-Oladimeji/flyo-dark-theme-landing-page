import CTA from "./CTA"
import { logo, location} from "../assets"
import { contacts } from "./data"
const Footer = () => {
  return (
    <footer className="text-White bg-DarkBlueFooter pt-20">
      <div className="w-[80%] mx-auto">
<img src={logo} alt="" />
<div>
  <div className="flex">
    <div>

    </div>
{contacts.map((contact)=>{
  return <div key={contact.id} className="flex gap-2 items-start">
    <img src={contact.icon} alt="" />
    <p className="max-w-[400px]">{contact.text}</p>
  </div>
})}
  </div>
</div>
      </div>
    </footer>
  )
}

export default Footer