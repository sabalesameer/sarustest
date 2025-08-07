import React from 'react'
import TornaBG from '../assets/TornaB.png'
import { FaWeightHanging} from 'react-icons/fa';
import { GiDeliveryDrone } from "react-icons/gi";
import { GiWindSlap } from 'react-icons/gi';
import { MdCameraAlt } from 'react-icons/md';
import { LuMapPin } from 'react-icons/lu';
import { BsClockHistory } from 'react-icons/bs';
import Torna1 from '../assets/torna1.png'
import Torna2 from '../assets/close camera.png'
import Torna3 from '../assets/swapabblebattery.png'
import Torna4 from '../assets/ppk.png'
import Torna5 from '../assets/torna5.png'

import miningImg from "../assets/mining.webp";
import renewableImg from "../assets/renewable.jpg";
import agricultureImg from "../assets/agriculture.webp";
import surveyImg from "../assets/survey.png";
import constructionImg from "../assets/construction.webp";
import defenceImg from "../assets/defence.avif";

import Lr1 from '../assets/LR1camera.png';        // Sony Camera
import A8Mini from '../assets/DISPLAY 1 (7).png';  // Gimbal (middle top)
import Zt6 from '../assets/ZT6.png';        // Dual sensor
import Multispectral from '../assets/whitecamera.png'; // Bottom multispectral

function Torna() {
  return (
    <div className="h-auto w-full">
      <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-10">
    
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[10vw] leading-none font-extrabold uppercase tracking-widest text-gray-900">torna</h1>
          <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-gray-700 mt-4">By SARUS AEROSPACE PVT LTD</h3>
        </div>

        <div className="mt-10 w-full flex justify-center">
          <img src={TornaBG} alt="Torna Drone" className="w-[90vw] md:w-[70vw] max-h-[350px] object-contain drop-shadow-[-10px_80px_30px_#000000] "/>
        </div>
      </div>

      <section className="bg-white px-6 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-gray-800 text-justify leading-relaxed">
            <span className="font-bold text-blue-900 text-justify justify-items-start">TORNA</span> is a next generation, indigenous drone designed for <span className="font-semibold">surveillance, mapping, and inspection</span> <span className="font-bold text-blue-900">Ready for Type Certification!</span> Engineered for versatility and built to perform in demanding environments, it combines advanced capabilities with a compact, foldable design offering an efficient, reliable, and affordable aerial solution for modern operations.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center">
            <FaWeightHanging className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">3.5KG</p>
            <p className="text-sm text-gray-600">MAX TAKE-OFF WEIGHT</p>
          </div>

          <div className="flex flex-col items-center">
            <BsClockHistory className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">78min</p>
            <p className="text-sm text-gray-600">MAX FLIGHT TIME</p>
          </div>

          <div className="flex flex-col items-center">
            <GiDeliveryDrone className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">TOOL LESS</p>
            <p className="text-sm text-gray-600">FOLDING DESIGN</p>
          </div>

          <div className="flex flex-col items-center">
            <LuMapPin className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">2 SQ KM</p>
            <p className="text-sm text-gray-600">IN ONE FLIGHT</p>
          </div>

          <div className="flex flex-col items-center">
            <MdCameraAlt className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">MULTIPLE</p>
            <p className="text-sm text-gray-600">PAYLOAD COMPATIBILITY</p>
          </div>

          <div className="flex flex-col items-center">
            <GiWindSlap className="text-4xl text-black mb-2" />
            <p className="text-lg font-bold">10m/s</p>
            <p className="text-sm text-gray-600">MAX WIND SPEED RESISTANCE</p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen flex items-center justify-center ">
        <img src={Torna1} alt="" className='h-full max-w-content absolute drop-shadow-[-90px_30px_40px_#000000]' />
        <h1 className='text-black max-w-[35%] relative top-69 text-3xl font-semibold'>MULTIPLE ANTENA POSITIONS FOR LONG RANGE COMMUNICATION</h1>
      </section>

      <section className="w-full min-h-screen flex items-center justify-center gap-30">
        <div className="h-[60vh] w-[35vw]  flex flex-col mt-30 ">
          <h3 className='text-2xl font-semibold text-black uppercase ml-5'> swappable batterY</h3>
          <img src={Torna3} alt="" className='h-96'/>
        </div>
        <div className="h-[60vh] w-[35vw]  flex flex-col mb-30">
          <img src={Torna2} alt="" className='h-96 '/>
          <h3 className='text-2xl font-semibold text-black uppercase'> MULTI PAYLOAD SUPPORT</h3>
        </div>
      </section>
      <section className="w-full min-h-screen flex items-center justify-center gap-30">
        <div className="h-[60vh] w-[35vw]  flex flex-col mt-30 text-center  ">
          <h3 className='text-2xl font-semibold text-black uppercase ml-45 w-50 '> EASY FOLDABLE MECHANISM</h3>
          <img src={Torna5} alt="" className='h-96'/>
        </div>
        <div className="h-[60vh] w-[35vw]  flex flex-col mb-30">
          <img src={Torna4} alt="" className='h-96 '/>
          <h3 className='text-2xl font-semibold text-black uppercase w-30'> PPK & RTK ENEBLED</h3>
        </div>
      </section>

      <section className="w-full px-4 py-12 bg-white text-center">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 uppercase mb-5 tracking-wide">Payload</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
          {/* LR1 Camera */}
          <div className="flex flex-col items-center max-w-sm mt-[40vh]">
            <img src={Lr1} alt="LR1 Camera" className="w-48 h-auto mb-4" />
            <p className="text-xl text-gray-800 font-thin leading-relaxed">
              LR1 is a 61MP full-frame industrial camera with E-mount lens support and full remote operation for high precision imaging applications.
            </p>
          </div>

          {/* A8 Mini */}
          <div className="flex flex-col items-center max-w-sm mb-35">
            <img src={A8Mini} alt="A8 Mini Camera" className="w-48 h-auto mb-4" />
            <p className="text-xl text-gray-800 font-thin leading-relaxed">
              A8 Mini is a lightweight 4K Ultra HD gimbal camera with 6X zoom, night vision, 3-axis stabilization
            </p>
          </div>

          {/* ZT6 Mini */}
          <div className="flex flex-col items-center max-w-sm mt-[40vh]">
            <img src={Zt6} alt="ZT6 Mini" className="w-48 h-auto mb-4" />
            <p className="text-xl text-gray-800 font-thin leading-relaxed">
              ZT6 Mini is a dual-sensor gimbal payload featuring 4K 8MP optical zoom, 640×512 thermal imaging, temperature measurement, 540° yaw rotation
            </p>
          </div>
        </div>

        {/* Bottom Center Item */}
        <div className=" flex flex-col items-center max-w-sm mx-auto text-center">
          <img src={Multispectral} alt="Multispectral Sensor" className="w-48 h-auto mb-4" />
          <p className="text-xl text-gray-800 font-thin leading-relaxed">
            Ultra-high-resolution multispectral data with 1.25 cm pan sharpened imagery using a 12.4 MP panchromatic sensor.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          { title: "MINING", image: miningImg },
          { title: "RENEWABLE ENERGY", image: renewableImg },
          { title: "AGRICULTURE", image: agricultureImg },
          { title: "INSPECTION & SURVEY", image: surveyImg },
          { title: "CONSTRUCTION", image: constructionImg },
          { title: "DEFENCE", image: defenceImg },
        ].map(({ title, image }, index) => (
          <div key={index}>
            <img
              src={image}
              alt={title}
              className="w-full h-[180px] object-cover shadow-md"
            />
            <h4 className="mt-2 font-semibold text-sm md:text-base">{title}</h4>
          </div>
        ))}
      </section>

    </div>
  )
}

export default Torna
