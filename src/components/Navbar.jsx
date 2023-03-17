import {logo} from "../assets"
import { navElement } from "./data"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
<img src={logo} alt="logo" className="w-[120px]" />
<div className="flex space-x-8 md:space-x-10">
  {navElement.map((nav)=>(
   <a className="text-white">{nav.text}</a>
  ))}
</div>
    </nav>
  )
}

export default Navbar