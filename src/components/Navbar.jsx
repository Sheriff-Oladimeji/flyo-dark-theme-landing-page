import {logo} from "../assets"
import { navElement } from "./data"
import styles from "../style"
const Navbar = () => {
  return (
    <nav className={`flex justify-between items-center font-heading ${styles.container} flex-wrap`}>
<img src={logo} alt="logo" className="w-[120px]" />
<div className="flex space-x-8  md:space-x-12">
  {navElement.map((nav)=>(
   <a className="text-gray-200 hover:text-white cursor-pointer">{nav.text}</a>
  ))}
</div>
    </nav>
  )
}

export default Navbar