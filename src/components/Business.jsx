import { productive , arrow} from "../assets"

const Business = () => {
  return (
    <section className="text-white bg-DarkBlueMain w-full">
<div className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto  gap-14">
<img src={productive} alt="stay productive"  className="w-[90%] md:w-[50%]"/>
<div>
<h2 className="text-White text-[2rem] font-bold font-heading z-20">Stay productive, <br className="hidden md:block"/> wherever you are</h2>
< p className="text-White text-[16px] font-normal font-body  max-w-[500px] mt-4 z-20">Never let location be an issue when accessing your files.Flyo has you covered for all of your file storage needs.</p>
< p className="text-White text-[16px] font-normal font-body t max-w-[510px] mt-4 z-20">Securely share files and folders wit friends,family and colleagues for live collaboration.No email attachmnts required.</p>
<a href="#" className="text-[16px] text-Cyan flex gap-2 border-b border-Cyan pb-1 max-w-[180px] font-heading mt-3 items-center object-contain">See how Flyo works <img src={arrow} alt="arrow" /></a>

</div>
</div>
    </section>
  )
}

export default Business