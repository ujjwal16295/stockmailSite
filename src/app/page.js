"use client"
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderCollection from "@/components/SliderCollection";
import { ToastContainer } from "react-toastify";

export default function Home() {
  // const flash=useSelector(state=>state.submit)

  // console.log(flash["submit"])

  return (
    <div>
      <div id="Navbar" style={{ fontFamily: 'var(--font-poppins)' }}>
        <Navbar/>
      </div>
      <ToastContainer/>


      <div id="Body" className="my-32 flex flex-col justify-evenly items-center gap-10" >
      <div className="flex flex-col justify-center items-center gap-4" style={{ fontFamily: 'var(--font-poppins)' }}>
  <div className="text-6xl hover:animate-wave " >
    Choose Your Parameters
  </div>
  <div className="hover:animate-wave">
    by moving the slider and by drag drop the box to set priority of Parameters
  </div>
</div>
      <div className="" style={{ fontFamily: 'var(--font-roboto)' }}>
        <SliderCollection/>
      </div>
      <div style={{ fontFamily: 'var(--font-roboto)' }}>
         <Email/>
      </div>

      </div>

      <div style={{ fontFamily: 'var(--font-poppins)' }}>
        <Footer/>
      </div>
    </div>
  );
}
