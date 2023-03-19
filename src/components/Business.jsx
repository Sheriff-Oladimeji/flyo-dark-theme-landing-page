import { productive , arrow} from "../assets"

const Business = () => {
  return (
    <section className="text-white bg-DarkBlueMain w-full">
<div className="flex flex-col md:flex-row items-center justify-center">
<img src={productive} alt="stay productive"  className="w-[80%]"/>
<div>
<h2>Stay productive, wherever you are</h2>
<p>Never let location be an issue when accessing your files.Flyo has you covered for all of your file storage needs.</p>
<p>Securely share files and folders wit friends,family and colleagues for live collaboration.No email attachmnts required.</p>
<a href="#">See how Flyo works</a>
</div>
</div>
    </section>
  )
}

export default Business