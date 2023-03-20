import {logo} from "../assets"
import { navElement } from "./data"
import styles from "../style"
const Navbar = () => {
  return (

      <nav className={`flex justify-between items-center font-heading ${styles.container} flex-wrap gap-4`}>
<img src={logo} alt="logo" className="w-[120px]" />
<div className="flex space-x-8  md:space-x-12">
  {navElement.map((nav)=>(
   <a className="text-White hover:font-bold cursor-pointer hover:underline">{nav.text}</a>
  ))}
</div>
   </nav> 
 
  )
}

export default Navbar