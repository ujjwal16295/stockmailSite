"use client"
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SliderCollection from "@/components/SliderCollection";

import { ToastContainer } from "react-toastify";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
  <div className="text-6xl hover:animate-wave text-center px-4 " >
    Choose Your Parameters
  </div>
  <div className="hover:animate-wave text-center px-4">
    by moving the slider and by drag drop the box to set priority of Parameters
  </div>
</div>
      <div className="" style={{ fontFamily: 'var(--font-roboto)' }}>
      <DndProvider backend={HTML5Backend}>
      <SliderCollection /> {/* This component uses react-dnd */}
    </DndProvider>        
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
