import { desktop, mobile , intro} from "../assets"

const Main = () => {
  return (
   <main className="flex items-center justify-center w-screen cover relative overflow-x-hidden">
<div className="flex-col bg-DarkBlueIntro flex justify-center items-center ">
    <img src={intro} alt="intro" className=""/>
<h1>All your files in one secure <br className="md:hidden block"/> location, 
            <br className="hidden md:block"/>
        accessible anywhere</h1>
</div>
   </main>
  )
}

export default Main