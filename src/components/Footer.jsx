import CTA from "./CTA"
import { logo } from "../assets"
const Footer = () => {
  return (
    <footer className="relative bg-DarkBlueFooter z-20">
      <CTA/>
      <div className="z-10">
<img src={logo} alt="" />
      </div>
    </footer>
  )
}

export default Footer