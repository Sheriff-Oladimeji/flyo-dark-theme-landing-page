import CTA from "./CTA"
import { logo } from "../assets"
const Footer = () => {
  return (
    <footer className="relative">
      <CTA/>
      <div>
<img src={logo} alt="" />
      </div>
    </footer>
  )
}

export default Footer